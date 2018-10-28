const {html2json, json2html} = require('html2json')
const {html,css} = require('js-beautify');
const mustache = require('mustache');
const fs = require('fs-extra');
const DataUtils = require('./utils/DataUtils');
const path = require('path');
const Handlebars = require('handlebars')
Handlebars.registerHelper('eachAttr', function(eachAttr,options) {
  let str = ''
  eachAttr.position='absolute'
  for(let k in eachAttr){
    let v = eachAttr[k]
    v = convertStr(k,v)
    str+=options.fn({k,v})
  }
  return str
});
var cssTemplate
var htmlTemplate
var handlebars_css,handlebars_html
var outHtml = 'index.html'
var outCss = 'index.css'
module.exports = {
  exportFiles: function(){
    let cssText =handlebars_css({items:global.cssJson})
    const cssFormat =css(cssText,{
      indent_size: 2
    })
    let  content = json2html(global.json)
    let jsText = handlebars_html({
      content:new Handlebars.SafeString(content),
      title: global.scope.name
    })
    const htmlFormat =html(jsText,{
      inline: [],
      indent_size: 2
    })
    console.log(cssFormat)
    console.log(htmlFormat)
    writeFile(outHtml,htmlFormat)
    writeFile(outCss,cssFormat)
  },
  renderHtml: function (scope, instance, renderer) {

    // console.log(renderer.snippetsPath)
    // console.log(scope)
    if (!global.json) {
      htmlTemplate = fs.readFileSync(path.resolve(renderer.snippetsPath,'index.html'),'utf-8')
      cssTemplate = fs.readFileSync(path.resolve(renderer.snippetsPath,'css.mustache'),'utf-8')
      handlebars_css = Handlebars.compile(cssTemplate)
      handlebars_html = Handlebars.compile(htmlTemplate)
      global.scope = scope
      global.json = {
        node: 'element',
        tag:'div',
        attr: {
          class: scope.name,
        },
        child: []
      }
      global.cssJson = [{
        selector: setClassSelector(scope.name),
        attrs:{
          width: scope.library.meta.width,
          height: scope.library.meta.height,
          background: scope.library.meta.background
        }
      }]
    }
    renderChild(instance)
  },
}
const pxK = [
  'width','height','left', 'top'
]

const convertStr = function (k,v) {
  /*let index = pxK.findIndex((item,index)=> {

  })*/
  if(k === 'background') return '#' + v
  for(let item of pxK){
    if (item === k) {
      return v + 'px'
    }
  }
  return v
}
const renderChild = function (instance) {
  let child = {node:'element',attr:{}}
  let cssObj = {attrs:{}}
  global.cssJson.push(cssObj)
  global.json.child.push(child)
  switch (instance.type){
    case 'bitmap':
      let name = createName(instance)
      child.attr['class'] = name
      child.attr['src'] = instance.libraryItem.src
      child['tag'] = 'img'
      cssObj.selector = setClassSelector(name)
      parseFrames(cssObj,instance)
      // console.log(instance)
      // cssObj.attrs.width = 1333
      break
  }
}
const parseFrames = (cssObj,instance)=>{
  let frames = instance.frames
  let keys = Object.keys(frames)
  if(keys.length==1&&keys[0]==0){
    // console.log(frames[keys[0]])
    let matrix = frames[keys[0]]
    parseMatrix(matrix,cssObj)
    // cssObj.attrs.transform=
  }
}
const writeFile = (dest,str)=> {
  fs.writeFileSync(path.resolve(process.cwd(), dest), str, 'utf-8')
}
const parseMatrix = (matrix,cssObj)=>{
    // if(matrix.x){
    //   cssObj.left = matrix.x
    // }
    // if(matrix.y){
    //   cssObj.left = matrix.x
    // }
    cssObj.attrs.left = Math.round(matrix.x)
    cssObj.attrs.top = Math.round(matrix.y)
    setTransform(matrix.r,cssObj)
}
const setTransform = (rotate,cssObj) =>{
  // console.log(rotate)
  let value = setRotate(rotate)
  setPrifix(cssObj,'transform',value)
  setPrifix(cssObj,'transform-origin','0 0')
}
const setPrifix = (cssObj,attr,value)=>{
  cssObj.attrs[attr] = value
  cssObj.attrs['-webkit-'+attr] = value
}
const setRotate = rotate =>`rotate(${round(DataUtils.toPrecision(rotate*180/Math.PI,3))}deg)`
const setClassSelector = name => '.'+ name
const setIdSelector = name => '#'+ name
const createName = function (instance) {
  return instance.instanceName?instance.instanceName:instance.localName
}
const round = (v)=>{
  let f = Math.floor(v)
  if(v-f<=0.0001){
    return f
  }
  let c = Math.ceil(v)
  if(c-v<=0.0001){
    return c
  }
  return v
}