const {html2json, json2html} = require('html2json')
const {html,css,js_beautify} = require('js-beautify');
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
Handlebars.registerHelper('array2string', function(array,options) {
  console.log(array)
  return options.fn({content:JSON.stringify(array)})
});
var cssTemplate
var htmlTemplate
var jsTemplate
var handlebars_css,handlebars_html,handlebars_js
var outHtml = 'index.html'
var outCss = 'index.css'
var libs = 'libs'
module.exports = {
  exportFiles: function(){
    return
    let cssText =handlebars_css({items:global.cssJson})
    const cssFormat =css(cssText,{
      indent_size: 2
    })
    let  content = json2html(global.json)
    // global.jsContent.data = JSON.stringify(global.jsContent.data)
    // console.log(global.scope)
    let jsContent = handlebars_js(global.jsContent)
    let jsText = handlebars_html({
      content:new Handlebars.SafeString(content),
      jsContent: new Handlebars.SafeString(jsContent),
      title: global.scope.name,
      frameRate: global.scope.library.meta.framerate
    }).toString().replace(/&quot;\s*/g,'"').replace(/& #x3D;/g,'=')
    // console.error(jsText,55555)
    // jsText = js_beautify(jsText
    const htmlFormat =html(jsText,{
      inline: [],
      indent_size: 2
    })
    // console.log(cssFormat)
    // console.log(htmlFormat)
    // console.log(JSON.stringify(global.jsContent),global.jsContent)
    writeFile(outHtml,htmlFormat)
    writeFile(outCss,cssFormat)
    fs.copySync(libs,path.resolve(process.cwd(),global.scope.library.meta.libsPath))
  },
  renderHtml: function (scope, instance, renderer) {
    return
    // console.log(renderer.snippetsPath)
    // console.log(scope.name,scope.type)
    // return
    if (!global.json) {
      global.renderer= renderer
      libs = path.resolve(renderer.snippetsPath,libs)
      htmlTemplate = fs.readFileSync(path.resolve(renderer.snippetsPath,'index.html'),'utf-8')
      cssTemplate = fs.readFileSync(path.resolve(renderer.snippetsPath,'css.mustache'),'utf-8')
      jsTemplate = fs.readFileSync(path.resolve(renderer.snippetsPath,'js.mustache'),'utf-8')
      handlebars_css = Handlebars.compile(cssTemplate)
      handlebars_html = Handlebars.compile(htmlTemplate)
      handlebars_js = Handlebars.compile(jsTemplate)
      global.scope = scope
      global.jsContent = {data: [],frameRate: global.scope.frameRate}
      global.json = {
        node: 'element',
        tag:'div',
        attr: {
          class: scope.name,
          id: scope.name,
        },
        child: []
      }
      global.cssJson = [{
        selector: setClassSelector(scope.name),
        attrs:{
          'will-change': 'all',
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
      child.attr['class'] = name + ' hidden'
      child.attr['id'] = name
      child.attr['src'] = instance.libraryItem.src
      child['tag'] = 'img'
      cssObj.selector = setClassSelector(name)
      cssObj.attrs.width = round(instance.libraryItem.width)
      cssObj.attrs.height = round(instance.libraryItem.height)
      parseFrames(cssObj,instance,child)
      // console.log(instance)
      // cssObj.attrs.width = 1333
      break
  }
}
const frameKeys =[
  'a','t','c','x','y','sx','sy','kx','ky','r','v','bounds'
]
const parseFrames = (parentCssObj,instance,child)=>{
  // console.log(instance)
  let frames = instance.frames
  // console.log(frames)
  let keys = Object.keys(frames)
  let totalFrames = global.scope.totalFrames
  // console.log(keys)
  let ks = keys.slice(0)
  for(let i=0;i<ks.length;i++){
    ks[i] = parseInt(ks[i]) +1
  }
  let result = []
  for(let i = 0;i<keys.length;i++){
    let key = keys[i]
    let matrix = frames[key]
    if(isNone(matrix)){
      result.push(-ks[i])
      continue
    }
    result.push(ks[i])
    let cssObj = {attrs:[]}
    global.cssJson.push(cssObj)
    cssObj.selector = parentCssObj.selector +`.f${ks[i]}`
    parseMatrix(matrix,cssObj)
  }
  // console.log(global.scope)
  let jsText = {target:child.attr.id,frames:result.toString(),totalFrames:totalFrames}
  global.jsContent.data.push(jsText)
  /*if(keys.length==1&&keys[0]==0){
    // console.log(frames[keys[0]])
    let matrix = frames[keys[0]]
    parseMatrix(matrix,cssObj)
    // cssObj.attrs.transform=
  }*/
}

const isNone = (matrix)=> {
  // console.log(matrix)
  // console.log(5555,matrix)
  for(let i=0;i<frameKeys.length;i++ ){
    let k = frameKeys[i]
    // console.log(k)
    // if('addCommand' === k || 'clean' === k) continue
    // console.log(matrix[k] === null,k)
    if(matrix[k]!==null){
      // console.log(666666666)
      return false
    }
  }
  return true
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
    let x =  Math.round(matrix.x)
    let y =  Math.round(matrix.y)
    if(x)cssObj.attrs.left = x
    if(y)cssObj.attrs.top = y
    setTransform(matrix,cssObj)
}
const setTransform = (matrix,cssObj) =>{
  let rotate = matrix.r
  let skewX = matrix.kx
  let skewY = matrix.ky
  let scaleX = matrix.sx
  let scaleY = matrix.sy






  // console.log(matrix)
  // console.log(rotate)
  let value = ''
  let cx=1
  let cy=1
  // if(x === 0 && y === 0){
  //
  // }else{
  //   value += ` translate3d(${x}px,${y}px,0)`
  // }
  if(skewX+skewY===0){
    if(rotate!==0)
    value += setRotate(rotate)
  }else{
    if(skewX!=0&&skewY == 0){
      value += ` skew(${r2d(skewX)}deg)`
      cy = Math.cos(skewX)
      // cssObj.attrs.top = cy*cssObj.attrs.top
    }else if(skewY!=0&&skewX == 0){
      value += ` skewY(${r2d(skewY)}deg)`
      cx = Math.cos(skewY)
      // cssObj.attrs.left = cx*cssObj.attrs.left
    }else{
      value += ` skew(${r2d(skewX)}deg,${r2d(skewY)}deg)`
      cx = Math.cos(skewY)
      cy = Math.cos(skewX)
      // cssObj.attrs.left = cx*cssObj.attrs.left
      // cssObj.attrs.top = cy*cssObj.attrs.top
    }
  }
  //这个是为了转换flash/canvas的skew变化，使其使用于css3的变化
  //css3的skew转换后几何宽高不变，flash/canvas是skew变化后，边长不变

  scaleX*=cx
  scaleY*=cy
  // scaleX = round(scaleX)
  // // console.log(Math.ceil(scaleX)-scaleX<0.0001)
  // scaleY = round(scaleY)
  // console.log(scaleX,scaleY)


  if(scaleX ===1 && scaleY ===1){

  }else if(scaleX!==1&&scaleY ===1){
    value += ` scaleX(${scaleX})`
  }else if(scaleY!==1 && scaleX===1){
    value += ` scaleY(${scaleY})`
  }else {
    value += ` scale(${scaleX},${scaleY})`
  }

  // console.log(cx,cy,skewX,skewY,rotate,value)
  setPrifix(cssObj,'transform',value)
  // setPrifix(cssObj,'transform-origin','0 0')
}
const setPrifix = (cssObj,attr,value)=>{
  cssObj.attrs[attr] = value
  cssObj.attrs['-webkit-'+attr] = value
}
const r2d = r => round(DataUtils.toPrecision(r*180/Math.PI,3))
const setRotate = r =>`rotate(${r2d(r)}deg)`
const setClassSelector = name => '.'+ name
const setIdSelector = name => '#'+ name
const createName = function (instance) {
  return instance.instanceName?instance.instanceName:instance.localName
}
const round = (v)=>{
  let f = Math.floor(v)
  if(v-f<=0.0002){
    return f
  }
  let c = Math.ceil(v)
  if(c-v<=0.0002){
    return c
  }
  return v
}