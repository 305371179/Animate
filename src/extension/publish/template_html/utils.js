const DataUtils = require('../utils/DataUtils');
const {exportHtml, exportCss, exportJs} = require('./export');
var textAlignMap ={}
module.exports = {
  parseClass(idMap, id) {
    let clz = idMap[id]
    // console.log(clz.type)
    if(clz.type === 'graphic'){
      clz.type= 'movieclip'
    }
    let node = createNode(clz, id)
    global.idsMap[id] = node
    let cssId = '.' + clz.type + id
    //text另外处理
    // if(clz.type !== 'text'){
      let cssNode = createCssNode(cssId)
      global.cssMap.push(cssNode)
    // }
    switch (clz.type) {
      case 'bitmap':
        node.tag = 'img'
        node.attr = {
          ...node.attr,
          // id: createId('id'),
          src: clz.src
        }
        cssNode.attr = {
          ...cssNode.attr,
          width: clz.width,
          height: clz.height,
        }

        break
      case 'text':
        //text有特别的处理，比较复杂
        //这里要加一层父亲的div，用来包裹文本
        node.tag = 'p'
        parseText(node,clz,cssId,cssNode,id)
        /*node.tag = 'p'
        node.child = [
          ...node.child,
          {
            node:'text',
            text:clz.txt.replace(/\\n/g,"<br/>").replace(/\s/g,"&nbsp;")
          }
        ]
        console.log(clz.txt.replace(/\\n/g,"<br/>"))
        // node.text = clz.txt
        console.log(node)
        node.attr = {
          ...node.attr,
          // id: createId('id'),
          src: clz.src
        }
        let paras = clz.paras[0]
        cssNode.attr = {
          ...cssNode.attr,
          'line-height': paras.linespacing*100+'%',
          'white-space': 'pre-line',
          // width: clz.width,
          // height: clz.height,
        }
        console.log(clz)*/
        break
      case 'graphic':
      case 'movieclip':
        parseFrames(node, clz)
        break
      case 'stage':
        node.attr.id = clz.name
        cssNode.node = '#' + clz.type
        parseFrames(node, clz)
        break
    }
    if (clz.type === 'stage') {
      parseHtml(global.idsMap['undefined'])
    }
    return node
  }
}
const parseText = (node,clz,cssId,cssNode,id) => {
  // console.log(clz)
  var name = clz.behaviour.name
  node.attr.name = name?name:createId(clz.behaviour.type)
  //先处理Dynamic
  switch (clz.behaviour.type) {
    case 'Static':
      parseStaticText(node,clz,cssId,cssNode,id)
      break
    case 'Dynamic':
      parseDynamicText(node,clz,cssId,cssNode,id)
      break
  }
}
const parseStaticText = (node,clz,cssId,cssNode,id) => {
  var behaviour = clz.behaviour
  // node.child = [
  //   ...node.child,
  //   {
  //     node:'text',
  //     text:clz.txt.replace(/\\n/g,"<br/>").replace(/\s/g,"&nbsp;")
  //   }
  // ]
  var pid = createId('id')
  var textNode = createNode({type:'p',name:'p'+pid},pid)
  textNode.attr['id'] = pid
  node.child.push(textNode)
  node = textNode
  textNode.tag = 'p'
  var nodeText = {
    node: 'text',
  }
  cssNode.node = '#'+pid
  // cssNode.attr['width']=200
  cssNode.attr['box-sizing']='border-box'
  cssNode.attr['display']='inline-block'
  cssNode.attr['overflow']='hidden'
  node.child.push(nodeText)
  var text = clz.txt
  //单行是直接忽略换行的
  if(behaviour.lineMode==='single'){
    text = text.replace(/\\n/g,'')
    nowWrap(cssNode)
  }else if(behaviour.lineMode==='multi'){
    text = text.replace(/\\n/g,"<br/>")
    breakWrod(cssNode)
  }else if(behaviour.lineMode==='multiNoWrap'){
    //多行，但是每一行是禁止换行的
    text = text.replace(/\\n/g,"<br/>")
    nowWrap(cssNode)
  }
  nodeText.text = text.replace(/\s/g,"&nbsp;")
  //设置样式，动态的文本只有一种样式
  var para = clz.paras[0]
  var textRun = para['textRun'][0]
  // var style = textRun.style
  textStyle(clz,node,cssNode,para,textRun,id)

}
const parseDynamicText = (node,clz,cssId,cssNode,id) => {
  var behaviour = clz.behaviour
  // node.child = [
  //   ...node.child,
  //   {
  //     node:'text',
  //     text:clz.txt.replace(/\\n/g,"<br/>").replace(/\s/g,"&nbsp;")
  //   }
  // ]
  // console.log(clz)
  // var pid = createId('id')
  // var textNode = createNode({type:'p',name:'p'+pid},pid)
  // textNode.attr['id'] = pid
  // node.child.push(textNode)
  // node = textNode
  // textNode.tag = 'p'
  var nodeText = {
    node: 'text',
  }
  // cssNode.node = '#'+pid
  // cssNode.attr['width']=200
  // cssNode.attr['box-sizing']='border-box'
  cssNode.attr['box-sizing']='border-box'
  cssNode.attr['display']='inline-block'
  cssNode.attr['overflow']='hidden'
  node.child.push(nodeText)
  var text = clz.txt
  //单行是直接忽略换行的
  if(behaviour.lineMode==='single'){
    text = text.replace(/\\n/g,'')
    nowWrap(cssNode)
  }else if(behaviour.lineMode==='multi'){
    text = text.replace(/\\n/g,"<br/>")
    breakWrod(cssNode)
  }else if(behaviour.lineMode==='multiNoWrap'){
    //多行，但是每一行是禁止换行的
    text = text.replace(/\\n/g,"<br/>")
    nowWrap(cssNode)
  }
  nodeText.text = text.replace(/\s/g,"&nbsp;")
  //设置样式，动态的文本只有一种样式
  var para = clz.paras[0]
  var textRun = para['textRun'][0]
  // var style = textRun.style
  textStyle(clz,node,cssNode,para,textRun,id)

}
var fontStyleMap ={
  RegularStyle:'normal',
  BoldItalicStyle: 'italic',
  ItalicStyle: 'italic',
  BoldStyle: 'normal',
}
const textStyle = (clz,node,cssNode,para,textRun,id)=>{
  var style = textRun.style
  // console.log(style,4444)
  var leftMargin = para['leftMargin']
  var rightMargin = para['rightMargin']
  var linespacing = para['linespacing']
  var alignment = para['alignment']
  var letterSpacing = style['letterSpacing']
  var fontSize = style['fontSize']
  var fontName = style['fontName']
  var fontColor = style['fontColor']
  var fontStyle = style['fontStyle']
  var baseLineShiftStyle = style['baseLineShiftStyle']
  var link = style['link']
  var linkTarget = style['linkTarget']
  if(alignment !== 'left'){
    cssNode.attr['text-align'] = alignment
    // node.alignment = {'text-align':alignment}
    textAlignMap[id] = cssNode
    // if(clz.behaviour.type!=='Dynamic'){
    //   textAlignMap[id]['rightMargin'] = rightMargin
    // }
  }
  //暂时存储这些属性
  // node.tmp = {attr:['text-align':alignment]}
  if(leftMargin !==0){
    cssNode.attr['padding-left'] = leftMargin
  }
  //动态文本的rightMargin是不生效的
  if(rightMargin !==0 && clz.behaviour.type!=='Dynamic'){
    cssNode.attr['padding-right'] = rightMargin
  }
  fontSize = Math.ceil(fontSize*0.8)
  cssNode.attr['font-size'] = fontSize
  if(letterSpacing!==0)
  cssNode.attr['letter-spacing'] = letterSpacing
  cssNode.attr['line-height'] = Math.floor(linespacing*16/12*fontSize/2-2)
  cssNode.attr['color'] = fontColor
  fontName = fontName.replace(' Bold Italic','').replace(' Bold','').replace(' Italic','')
  cssNode.attr['font-family'] = '"'+fontName+'"'
  var fs = fontStyleMap[fontStyle]
  cssNode.attr['font-style'] = fs
  if(fontStyle.indexOf('Bold')!==-1){
    cssNode.attr['font-weight'] = 'bold'
  }
}
const breakWrod = cssNode=>{
  cssNode.attr['word-wrap']='break-word'
  cssNode.attr['word-break']='break-all'
}
const nowWrap = cssNode=>{
  cssNode.attr['white-space']='nowrap'
  cssNode.attr['overflow']='hidden'
}
const parseHtml = (stage) => {
  // console.log(JSON.stringify(stage))
  // console.log(stage)
  // parseId(stage)
  // console.log(global.cssMap)
  exportJs()
  exportCss(global.cssMap)
  exportHtml(stage)
  /*let text = htmlTemplate({
    content: new Handlebars.SafeString(json2html(stage))
  })

  let htmlText = html(text,{
    inline: [],
    indent_size: 2
  })
  console.log(htmlText)*/

}

parseId = node => {
  node.attr.id = createId('id')
  if (node.child.length) {
    node.child.forEach(n => {
      parseId(n)
    })
    // parseId()
  }
}
const createNode = (clz, id) => {
  if (id === 'undefined') {
    id = ''
  }
  // if(!clz.name){
  //   if(clz.type==='text')
  //   clz.name = createId(clz.behaviour.type)
  // }
  return {
    node: 'element',
    tag: 'div',
    attr: {
      class: clz.type + id,
      'name': clz.name
      // id: scope.name,
    },
    child: []
  }
}
const createCssNode = (id) => {
  let cssNode = {
    node: id,
    attr: {
      // 'will-change': 'all',
      // position: 'absolute',
      // display: 'none'
    }
  }
  if(id.indexOf('.f')==-1){
   cssNode.attr.position = 'absolute'
  }
  return cssNode
}
const frameKeys = [
  'a', 't', 'c', 'x', 'y', 'sx', 'sy', 'kx', 'ky', 'r', 'v', 'bounds'
]
const isEmptyFrame = (frame)=> {
  for(let i=0;i<frameKeys.length;i++ ){
    let k = frameKeys[i]
    if(frame[k]!==null){
      return false
    }
  }
  return true
}
const parseFrame = (frame, cssNode,instance) => {
  let x = Math.round(frame.x)
  let y = Math.round(frame.y)
  if (x) cssNode.attr.left = x
  if (y) cssNode.attr.top = y
  let bounds = frame.bounds
  if(bounds){
    cssNode.attr.width = bounds.width
    cssNode.attr.height = bounds.height
    // cssNode.attr.left += bounds.x
    // cssNode.attr.top += bounds.y
    // cssNode.attr.overflow = 'hidden'
    let cn = textAlignMap[instance.libraryItem.assetId]
    console.log(cn,textAlignMap)
    if(cn&&instance.libraryItem.type === 'text'){
      let textAlign = cn.attr['text-align']
      if(textAlign==='center'||textAlign==='justify'){
        cssNode.attr.left -=bounds.width/2
      }else if(textAlign==='right'){
        cssNode.attr.left -=bounds.width
      }
    }
  }

  console.log(frame,cssNode.attr,4444)

  setTransform(frame, cssNode,instance)
}
const setTransform = (frame, cssNode) => {
  let rotate = frame.r ==null?0: frame.r
  let skewX = frame.kx  ==null?0: frame.kx
  let skewY = frame.ky  ==null?0: frame.ky
  let scaleX = frame.sx  ==null?1: frame.sx
  let scaleY = frame.sy ==null?1: frame.sy
  let visibility = frame.v ==null?true: frame.v
  let alpha = frame.a ==null?1: frame.a

  if (visibility === 0) {
    cssNode.attr.visibility = 'hidden'
  }
  if (alpha != null && alpha != 1) {
    cssNode.attr.opacity = alpha
  }
  // console.log(scaleX,scaleY)
  let value = ''
  let cx = 1
  let cy = 1
  if (skewX + skewY === 0) {
    if (rotate !== 0)
      value += setRotate(rotate)
  } else {
    if (skewX != 0 && skewY == 0) {
      value += ` skew(${r2d(skewX)}deg)`
      cy = Math.cos(skewX)
    } else if (skewY != 0 && skewX == 0) {
      value += ` skewY(${r2d(skewY)}deg)`
      cx = Math.cos(skewY)
    } else {
      value += ` skew(${r2d(skewX)}deg,${r2d(skewY)}deg)`
      cx = Math.cos(skewY)
      cy = Math.cos(skewX)
    }
  }
  //这个是为了转换flash/canvas的skew变化，使其使用于css3的变化
  //css3的skew转换后几何宽高不变，flash/canvas是skew变化后，边长不变
  scaleX *= cx
  scaleY *= cy
  if (scaleX === 1 && scaleY === 1) {

  } else if (scaleX !== 1 && scaleY === 1) {
    value += ` scaleX(${scaleX})`
  } else if (scaleY !== 1 && scaleX === 1) {
    value += ` scaleY(${scaleY})`
  } else {
    value += ` scale(${scaleX},${scaleY})`
  }
  setPrifix(cssNode, 'transform', value)
}
const round = (v) => {
  let f = Math.floor(v)
  if (v - f <= 0.0002) {
    return f
  }
  let c = Math.ceil(v)
  if (c - v <= 0.0002) {
    return c
  }
  return v
}
const r2d = r => round(DataUtils.toPrecision(r * 180 / Math.PI, 3))
const setRotate = r => {
  let deg = r2d(r)
  if(deg === 0){
    return ''
  }
  return `rotate(${deg}deg)`
}
const setPrifix = (cssNode, attr, value) => {
  if (!value) return
  cssNode.attr[attr] = value
  cssNode.attr['-webkit-' + attr] = value
}
const isSingleFrame = (instance) => {
  let isSingle = false
  let keys = Object.keys(instance.frames)
  if (keys.length === 1 && keys == 0) {
    isSingle = true
  }
  return isSingle
}
const parseCss = (instance, node, assetId) => {
  // console.log(instance)
  // if (instance.type === 'bitmap') {
  //   console.log(instance.frames)
  // }
  let id = node.attr['id']
  node.attr['range'] = (instance.startFrame + 1)+','+ (instance.endFrame ==-1? -1:instance.endFrame +1)
  // node.attr['startFrame'] = instance.startFrame + 1
  // node.attr['endFrame'] = instance.endFrame ==-1? -1:instance.endFrame +1
  let frames = []
  for (let key in instance.frames) {
    let frame = instance.frames[key]
    // console.log(frame)
    let indexFrame = ''
    if(!isSingleFrame(instance)){
      indexFrame = `.f${parseInt(key) + 1}`
    }
    if(isEmptyFrame(frame)){
      frames.push(-(parseInt(key)+1))
    }else{
      frames.push(parseInt(key)+1)
    }
    let cssNode = createCssNode(`#${id}${indexFrame}`)
    // const {alignment,leftMargin,rightMargin} = textAlignMap[assetId] || {}
    // console.log(textAlignMap,align,id)
    //对齐
    /*if(alignment&&alignment !== 'left'){
      cssNode.attr['text-align'] = alignment
    }
    if(leftMargin){
      cssNode.attr['padding-left'] = leftMargin
      cssNode.attr['box-sizing'] = 'border-box'
    }
    //动态文本的rightMargin是不生效的
    if(rightMargin){
      cssNode.attr['padding-right'] = rightMargin
    }*/
    // delete cssNode.attr.position
    // console.log(cssNode)
    global.cssMap.push(cssNode)
    // console.log(instance.libraryItem.type)
    parseFrame(frame, cssNode,instance)
  }
  if(frames.length){
    // console.log(instance)/**/
    // console.log(frames)
    if(frames.length === 1 && frames[0] === 1){

    }else{
      // frames = [1]
      var f = []
      for (var i = 0; i < frames.length; i++) {
        if(!f.length){
          f.push([frames[i]])
          continue
        }
          if(frames[i] === frames[i-1]+1){
            if(f[f.length-1].length<2){
              f[f.length-1].push(frames[i])
            }else{
              f[f.length-1][1] = frames[i]
            }
          }else{
            f.push([frames[i]])
          }
      }
      var fstr = ''
      for(var i=0;i<f.length;i++){
        var item = f[i]
        if(item.length===1){
            fstr += item[0] + ','
        }else{
          fstr += item[0] + '~'
          fstr += item[1] + ','
        }
      }
      fstr = fstr.substring(0,fstr.length-1)
      // setTimeout(function () {
      //   console.log(fstr)
      // })

      node.attr['frames'] = fstr
    }
  }

  // global.cssMap[id] = cssNode
  // console.log(instance,555555)
  // instance.frames.forEach(frame=>{
  //
  // })
}

const parseFrames = (node, clz) => {
  // console.log(clz)
  node.attr.totalFrames = clz.totalFrames
  // if(clz.type === 'stage')
  // console.log(clz)
  let child = node.child
  clz.renderChildren(global.renderer, (children) => {
    children.forEach(instance => {
      let claz = instance.libraryItem
      // console.log(instance.frames)
      // let node = {}
      // Object.assign(node,global.idsMap[claz.assetId + ''])
      let node = JSON.parse(JSON.stringify(global.idsMap[claz.assetId + '']))
      // let node = global.idsMap[claz.assetId + '']
      // console.log(instance)
      node.attr['id'] = createId('id')
      parseCss(instance,node,claz.assetId)
      // console.log(createId('id'))
      // console.log(node.attr['id'])
      // console.log(node,5555)
      child.push(node)
    })
  })
  // clz.frames.forEach(frame=>{
  //   // console.log(frame)
  //   frame.commands.forEach(command=>{
  //     switch (command.type) {
  //       case 'Place':
  //         // console.log(command)
  //         let node = global.idsMap[command.assetId+'']
  //         node.attr['data-instance'] = command.instanceId
  //         child.push(node)
  //         break
  //     }
  //   })
  // })
  // console.log(frames[0], frames[0].commands)
}
const createId = (name) => {
  let count = global.uuidMap[name]
  if (count === undefined) {
    global.uuidMap[name] = 1
    return name
  }
  // console.log(count, name+'_' + count)
  global.uuidMap[name]++
  return name + '' + count
}