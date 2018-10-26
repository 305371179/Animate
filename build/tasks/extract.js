const unzip = require('unzip')
const fs = require('fs-extra')
const path = require('path')
const fla = path.resolve(__dirname, '../../fla/pixi.fla')
const outPath = path.resolve(__dirname, '../../fla/out')
const  documentXml = 'DOMDocument.xml'
const srcPath = path.resolve(outPath,documentXml)
const documentPath = path.resolve(__dirname, '../../fla/',documentXml)
module.exports = function (gulp, options, plugins) {
  gulp.task('extract', function () {
    extractFla(fla, outPath).then(()=>{
      fs.copy(srcPath, documentPath)
      plugins.del([outPath])
    })
    return
  });
};
const extractFla = (fla, outPath) => new Promise(resolve => {
  let extract = unzip.Extract({path: outPath})
  fs.createReadStream(fla).pipe(extract)
  extract.on('close', () => {
    resolve()
  })
})