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
    cssText = cssText.replace(/&quot;\n\s*/g,'"').replace(/&#x3D;\n/g, '=')
    // console.log(cssText)
    writeFile('index.css',cssText)
  },
  exportHtml(stage){
    // console.log( global.maskDefs)
    paseId2Class(stage,true)
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
    mergeHtml(stage)
  },
}
const paseId2Class = (node,isStage)=>{
  let isMask = node.attr.id ==='_masks' || node.tag === 'defs' || node.tag === 'clipPath' || node.isMaskPath
  if(!isMask)
  node.attr.class = node.attr.class +(node.attr.id?' ' +node.attr.id:'')
  if(!isStage&&!isMask){
    delete node.attr.id
  }else{
    // delete node.attr.visibility
  }

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
const replaceCssNode = (id,id1) => {
  for (let i = 0; i < global.cssMap.length; i++) {
      let node = global.cssMap[i].node
    if (node.indexOf("."+id)!==-1) {
        // console.log(id,id1,node)
      var patt1=new RegExp();
       let c = patt1.compile('.'+id,'g')
      // console.log(c)
      global.cssMap[i].node = node.replace(c,'\.'+id1)
    }
  }
}
const getStr = (cssMap)=>{
  let str= ''
  for(let k in cssMap){
    // str+=k
    str+= JSON.stringify(cssMap[k].attr)
  }
  return str
}
const isTheSame = (cssMap,cssMap1)=>{
  let str = getStr(cssMap)
  let str1 = getStr(cssMap1)
  // console.log(str===str1,55555)
  if(str === str1){
    return true
  }
  return false
}
const mergeHtml = node=>{
  // return
  let child = node.child
  if(!child||!child.length)return
  let map = {}
  let totalFrames = node.attr.totalFrames

  let deletes = []
  for (let i = 0; i < child.length; i++) {
    let c = child[i]
    let id = getChildIdStr(c)
    if(!map[id]){
      map[id] = c
      continue
    }
    let first = map[id]
    let firstRange = first.attr.range
    if(firstRange.indexOf('-1')!==-1)continue
    if(!isTheSame(first.cssMap,c.cssMap))continue
    first.attr.range = firstRange.split(',')[0] + c.attr.range.split(',')[1]
    first.attr.totalFrames += c.attr.totalFrames
    first.attr.frames += ','+c.attr.frames
    replaceCssNode(c.attr.id,first.attr.id)
    deletes.push(i)
  }
  for (let i = 0; i < deletes.length; i++) {
    child.splice(deletes[i],1)
  }
  for (let k in map) {
    mergeHtml(map[k])
  }
  /*console.log(child.length)
  child.forEach(c=>{
    let id = getChildIdStr(c)
    if(!map[id]){
      map[id] = c
      return
    }
    let first = map[id]
    // console.log(5555555)
    let firstRange = first.attr.range
    if(firstRange.indexOf('-1')!==-1)return
    first.attr.range = firstRange.split(',')[0] + c.attr.range.split(',')[1]
    first.attr.totalFrames += c.attr.totalFrames
    first.attr.frames += ','+c.attr.frames

    // firstRange.lastIndexOf(',')
    // first.attr.range
    // console.log(first.attr.range,c.attr.range)
  })*/
}
const getChildIdStr = node =>{
  let str = ''
  let child = node.child
  if(!child||!child.length)return ''
  child.forEach(c=>{
    let id = c.attr.assetId
    str+=id+'_'
  })
  // console.log(node.cssMap)
  str+= getStr(node.cssMap)
  // console.log(str)
  return str
}