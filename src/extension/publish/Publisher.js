"use strict";

// Node modules
const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const Library = require('./Library');
const Renderer = require('./Renderer');
const {exportAssets} = require('./template_html/utils');
const DataUtils = require('./utils/DataUtils');
const beautify = require('js-beautify').js_beautify;
var SpritesheetBuilder;
if(!global.isDebug){
   SpritesheetBuilder = require('./SpritesheetBuilder');
}

const {exportFiles} = require('./renderHtml')

/**
 * The application to publish the JSON data to JS output buffer
 * @class Publisher
 */
let Publisher = function (dataFile, compress, debug, assetsPath) {
  // Change the current directory
  process.chdir(path.dirname(dataFile));

  /**
   * The data file to delete
   * @property {string} _dataFile
   */
  this._dataFile = dataFile;

  /**
   * The data published from Flash
   * @property {Object} _data
   * @private
   */
  this._data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
  // override the compress
  if (compress) {
    this._data._meta.compressJS = true;
  }

  /**
   * The library of assets to publish
   * @property {Library} library
   */
  this.library = new Library(this._data);

  /**
   * The composer to render output
   * @property {Renderer} composer
   */
  this.renderer = new Renderer(this.library);

  /**
   * If we are running in debug mode
   * @property {Boolean} debug
   */
  this.debug = debug == undefined ? false : debug;

  /**
   * The path to the assets
   * @property {String} assetsPath
   */
  this.assetsPath = assetsPath;
};

// Reference to the prototype
let p = Publisher.prototype;

/**
 * Export the assets
 * @method exportAssets
 */
p.exportAssets = function (done) {
  let assetsToLoad = this.library.stage.assets;
  // Get the images to export
  this.library.bitmaps.forEach(function (bitmap) {
    assetsToLoad[bitmap.name] = bitmap.src;
  });

  // Get the sounds to export
  this.library.sounds.forEach(function (sound) {
    assetsToLoad[sound.name] = sound.src;
  });

  const shapes = this.library.shapes;
  const meta = this._data._meta;

  // No shapes, nothing to do here
  if (!meta.imagesPath) {
    return done();
  }

  if (shapes.length) {
    // The output map of graphics
    let buffer = "";
    let filename;

    if (!meta.compactShapes) {
      filename = meta.stageName + ".shapes.json";
      let results = [];
      shapes.forEach(function (shape) {
        results.push(shape.draw);
      });
      // console.log(results)
      buffer = DataUtils.readableShapes(results);
      // console.log(buffer)
    }
    else {
      filename = meta.stageName + ".shapes.txt";
      shapes.forEach(function (shape, i) {
        buffer += shape.toString();

        // Separate each shape with a new line
        if (i < shapes.length - 1)
          buffer += "\n";
      });
    }

    // Create the directory if it doesn't exist
    const baseUrl = path.resolve(process.cwd(), meta.imagesPath);
    mkdirp.sync(baseUrl);

    // Save the file data
    fs.writeFileSync(path.join(baseUrl, filename), buffer);
    // console.log(path.join(baseUrl, filename))
    // Add to the assets
    assetsToLoad[meta.stageName] = meta.imagesPath + filename;
    // console.log(assetsToLoad)
  }
  if(global.isDebug){
    meta.spritesheets = false
  }
  if (meta.spritesheets && this.library.bitmaps.length) {
    let spriteSheetJsonPath = meta.imagesPath + meta.stageName + '_atlas_'
    // exportAssets(fs.readFileSync(path.resolve(process.cwd(),spriteSheetJsonPath+'.png'),'utf-8'))
    // Create the builder
    new SpritesheetBuilder({
        assets: assetsToLoad,
        output: spriteSheetJsonPath,
        size: meta.spritesheetSize,
        scale: meta.spritesheetScale || 1,
        debug: this.debug
      },
      this.assetsPath,
      (assets) => {
        this.library.stage.assets = assets;
        global.assets = assets
        // alert(JSON.stringify(assets))
        done(assets);
      }
    );
  }
  else {
    done();
  }
};

/**
 * Clean the stage
 * @method destroy
 */
p.destroy = function () {
  if (!this.debug) {
    fs.unlinkSync(this._dataFile);
  }
  this._data = null;

  this.library.destroy();
  this.library = null;

  this.renderer.destroy();
  this.renderer = null;
};

/**
 * The main entry point for the publisher
 * @method run
 */
p.run = function (done) {
  try {
    this.exportAssets((assets) => {
      try {
        exportAssets(assets)
        const buffer = this.publish(assets)
        this.destroy();
        if (this.debug) {
          buffer.split('\n').forEach((line) => {
            console.error(line);
          });
        }
        done();
      }
      catch (e) {
        done(e);
      }
    });
  }
  catch (e) {
    done(e);
  }
};

/**
 * Save the output stream
 * @method publish
 */
p.publish = function (alert) {
  const meta = this._data._meta;
// return
  // Get the javascript buffer
  let buffer = this.renderer.render(global.assets);
  if (meta.compressJS) {
    // Run through uglify
    const UglifyJS = require('uglify-js');
    let result = UglifyJS.minify(buffer, {
      fromString: true
    });
    buffer = result.code;
  }
  else {
    // Run through js beautifier
    buffer = beautifyJs(buffer);
  }
  // return
  // Save the output file
  let outputFile = path.join(process.cwd(), meta.outputFile);
  fs.writeFileSync(outputFile, buffer);
  // setTimeout(()=>{
  //   // exportFiles(outputFile)
  // })

  /*let indexJs = path.join(process.cwd(), 'index.js');
  let html = path.join(process.cwd(), 'index.html');
  if(!fs.existsSync(indexJs))
  renderTemplate(indexJs,'index', {
    nameSpace: meta.nameSpace,
    stageName: meta.stageName,
    width: meta.width,
    height: meta.height,
    background: meta.background,
  },this.renderer)
  if(!fs.existsSync(html))
  renderTemplate(html,'html', {
    stageName: meta.stageName,
    width: meta.width,
    height: meta.height,
    libsPath: meta.libsPath,
    outputFile: meta.outputFile,
    indexFile: 'index.js',
  },this.renderer)*/
  return buffer;
};

function beautifyJs(buffer) {
  return beautify(buffer, {
    indent_size: 2,
    preserve_newlines: true,
    space_after_anon_function: true,
    brace_style: "collapse-preserve-inline",
    break_chained_methods: true
  });
}
function renderTemplate(outputFile,template,params,renderer) {
  if(outputFile.indexOf('html')!==-1){
    return fs.writeFileSync(outputFile,renderer.template(template,params))
  }
  fs.writeFileSync(outputFile, beautifyJs(renderer.template(template,params)))
}

module.exports = Publisher;