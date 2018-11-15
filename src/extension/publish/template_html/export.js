const {html2json, json2html} = require('html2json')
const {html, css, js_beautify} = require('js-beautify');
const Handlebars = require('handlebars')
const fs = require('fs-extra')
const path = require('path')
Handlebars.registerHelper('eachAttr', function(eachAttr,options) {
  let str = ''
  for(let k in eachAttr){
    let v = eachAttr[k]
    v = convertStr(k,v)
    str+=options.fn({k,v})
  }
  return str
});
const pxK = [
  'width','height','left', 'top', 'font-size','line-height', 'padding-left','padding-right','letter-spacing'
]
const convertStr = function (k,v) {
  /*let index = pxK.findIndex((item,index)=> {

  })*/
  if(k === 'background' && (v[0] !== '#')) {
    if(v.indexOf('-webkit-gradient')!==-1||v.indexOf('url')!==-1)return v
    return '#' + v
  }
  for(let item of pxK){
    if (item === k && (v+'').indexOf('%')===-1) {
      return Math.round(v) + 'px'
    }
  }
  return v
}
const resolve = p => {
  let dir = __dirname
  // if(dir.indexOf('template_html')===-1){
  //   dir =path.resolve(dir,'template_html')
  // }
  return Handlebars.compile(fs.readFileSync(path.resolve(dir, p), 'utf-8'))
}
var htmlTemplate = resolve('./template/index.html')
var cssTemplate = resolve('./template/css.mustache')
var jsTemplate = resolve('./template/index.js')
module.exports = {
  exportJs(){
    // console.log(global.meta)
    let text =jsTemplate({
      items:cssMap,
      frameRate:global.meta.framerate,
      stageId: global.meta.stageName
    })
    const jsText =js_beautify(text,{
      indent_size: 2
    })
    // console.log(jsText)
    writeFile('index.js',jsText)
  },
  exportCss(cssMap){
    let text =cssTemplate({items:cssMap})
    let cssText =css(text,{
      indent_size: 2
    })
    cssText = cssText.replace(/&quot;\n\s*/g,'"')
    // console.log(cssText)
    writeFile('index.css',cssText)
  },
  exportHtml(stage){
    paseId2Class(stage)
    let text = htmlTemplate({
      content: new Handlebars.SafeString(json2html(stage))
    })

    let htmlText = html(text,{
      inline: ['br'],
      indent_size: 2
    })
    writeFile('index.html',htmlText)
    // console.log(htmlText)
  },
  merge(stage){
    // console.log(stage)
    // mergeHtml(stage)
  },
}
const paseId2Class = (node)=>{
  node.attr.class = node.attr.class +(node.attr.id?' ' +node.attr.id:'')
  delete node.attr.id
  let child = node.child
  if(child.length){
    child.forEach(c=>{
      paseId2Class(c)
    })
  }
}
const writeFile = (dest,str)=> {
  dest = path.resolve(process.cwd(),dest)
  // dest = path.resolve(__dirname,'dist',dest)
  // console.log(process.cwd())
  // let parse = path.parse(dest)
  // fs.ensureDirSync(parse.dir)
  fs.writeFileSync(dest, str, 'utf-8')
}

const mergeHtml = node=>{
  return
  let child = node
  if(!child.length)return
  let map = {}
  child.forEach(c=>{
    let id = c.attr.id
    if(!map[id]){
      return
    }

  })
}