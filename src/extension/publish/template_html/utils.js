const DataUtils = require('../utils/DataUtils');
const {exportHtml, exportCss, exportJs} = require('./export');
var textAlignMap = {}
const utils = module.exports = {
  parseClass(idMap, id) {
    if(global.idsMap[id])return
    let clz = idMap[id]
    // console.log(clz)
    // console.log(clz.type)
    if (clz.type === 'graphic') {
      clz.type = 'movieclip'
    }

    let node = createNode(clz, id)
    global.idsMap[id] = node
    let cssId = '.' + clz.type + id
    let cssNode = createCssNode(cssId)
    global.cssMap.push(cssNode)
    // let nodes = getNode(clz,id)
    // let node = nodes[0]
    // let cssNode = nodes[1]
    if(clz.type !== 'shape' &&!global.hasAddGCssNode){
      global.hasAddGCssNode = true
      global.cssMap.push({
        node: 'g',
        attr: {
          'pointer-events':'visiblePainted'
        }
      })
    }
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
      case 'shape':
        node.tag = 'svg'
        node.attr = {
          // xmlns:"http://www.w3.org/2000/svg",
          // version:"1.1",
          // width: '100%',
          // height:'100%',
          // style:'pointer-events:none',
          ...node.attr,
          name:createId('shape')
        }
        // console.log(clz)
        cssNode.attr = {
          ...cssNode.attr,
          'pointer-events': 'none',
          width: global.meta.width,
          height: global.meta.height,
        }
        // cssNode.attr.position = 'fixed'
        // cssNode.attr.left = '0'
        // cssNode.attr.top = '0'
        parseShape(node,clz,cssId,cssNode,id)
        break
      case 'text':
        node.tag = 'p'
        parseText(node, clz, cssId, cssNode, id)
        break
      case 'graphic':
      case 'movieclip':
        parseFrames(node, clz)
        // let bounds = ''
        // let bounds = clz.frames[0].commands.forEach(item=>{
        //
        // })
        // console.log(4444,clz.frames)
        break
      case 'stage':
        // console.log(stage)
        node.attr.id = clz.name
        cssNode.node = '#' + clz.name
        cssNode.attr.overflow = 'hidden'
        cssNode.attr.width = global.meta.width
        cssNode.attr.height = global.meta.height
        cssNode.attr.background= global.meta.background
        // console.log(global.library)
        parseFrames(node, clz)
        break
    }
    if (clz.type === 'stage') {
      parseHtml(global.idsMap['undefined'])
    }else{
      // node.attr.class+= ' hidden'
    }
    // console.log(55555555)
    return node
  }
}
const getNode = (clz,id)=>{
  let node = global.idsMap[id]
  if(!node){
    node = createNode(clz, id)
    global.idsMap[id] = node
  }
  let cssNode = ''
  let cssId = '.' + clz.type + id
  for (let i = 0; i < global.cssMap.length; i++) {
    var cn = global.cssMap[i]
    if(cn.node === cssId){
      cssNode = cn
    }
  }
  if(!cssNode){
    cssNode = createCssNode(cssId)
    global.cssMap.push(cssNode)
  }
  return [node,cssNode]
}
const pathMap = {
  'b': 'c',
  'c': 'z',
}
const getSvgPath = command=>{
  let pathCommand = pathMap[command]
  return pathCommand?pathCommand:command
}
const parseShape = (node, clz, cssId, cssNode, id) => {
  let gid = createId('g'+id)
  let g = createNode({type:'',name:gid},gid)
  g.tag = 'g'
  node.child.push(g)
  // console.log(cssNode)
  clz.paths.forEach(p=>{
    let pid = createId('path'+id)
    let pathNode = createNode({type:'',name:pid},pid)
    pathNode.tag = 'path'
    // node.child.push(pathNode)
    g.child.push(pathNode)
    // g.attr['pointer-events'] = 'visiblePainted'
    // g.attr.onclick = 'console.log(111)'
    if(p.color){
      if(!p.stroke){
        pathNode.attr.fill = p.color
        // g.attr.fill = p.color
      }else{
        pathNode.attr.fill = 'none'
        pathNode.attr.stroke = p.color
        pathNode.attr['stroke-width'] = p.thickness
        pathNode.attr['stroke-linejoin']=p.linejoin
        pathNode.attr['stroke-linecap']=p.linecap
      }
    }
    pathNode.attr.d = parseD(p.d)
    // pathNode.attr.d = parseD(p.d)

    // console.log(p)
  })
}
const parseD = d =>{
  let path = ''
  d.forEach(item=>{
    if(isNaN(item)){
      // console.log(item)
      item=getSvgPath(item)
      path+=item.toUpperCase()+' '
    }else{
      path+= item + ' '
    }
  })
  path=path.substring(0,path.length-1)
  // console.log(path)
  // console.log(d)
  return path
}
const parseText = (node, clz, cssId, cssNode, id) => {
  // console.log(clz)
  var name = clz.behaviour.name
  node.attr.name = name ? name : createId(clz.behaviour.type)
  //先处理Dynamic
  switch (clz.behaviour.type) {
    case 'Static':
      parseStaticText(node, clz, cssId, cssNode, id)
      break
    case 'Dynamic':
      parseDynamicText(node, clz, cssId, cssNode, id)
      break
    case 'Input':
      parseInputText(node, clz, cssId, cssNode, id)
      // console.log(cssNode)
      break
  }
}
const parseStaticText = (node, clz, cssId, cssNode, id) => {
  var behaviour = clz.behaviour
  var nodeText = {
    node: 'text',
  }
  cssNode.attr['box-sizing'] = 'border-box'
  cssNode.attr['display'] = 'inline-block'
  cssNode.attr['overflow'] = 'hidden'
  breakWrod(cssNode)
  node.child.push(nodeText)
  // var text = clz.txt
  // nodeText.text = te、xt.replace(/\\n/g,"<br/>").replace(/\s/g,"&nbsp;")
  parseStaticTextRun(clz, node, cssNode, id)
}
const enterKeys = [
  '-', '_', '#', '@', '^', '~', '`', '*', '!', '①'
]
const getEnterKey = (txt) => {
  for (let i = 0; i < enterKeys.length; i++) {
    if (txt.indexOf(enterKeys[i]) === -1) {
      return enterKeys[i]
    }
  }
  return null
}
const parseStaticTextRun = (clz, node, cssNode, id) => {
  let txt = clz.txt
  node.tag = 'div'
  //设置样式，静态文本有多种样式
  var paras = clz.paras
  // console.log(clz)
  // console.log('======================', txt.replace(/\\n/g, "_").length)
  const key = getEnterKey(txt)
  txt = txt.replace(/\\n/g, key)
  let result = []
  let css = []
  for (let i = 0; i < paras.length; i++) {
    let para = paras[i]
    let textRuns = para.textRun
    for (var j = 0; j < textRuns.length; j++) {
      let textRun = textRuns[j]
      let str = txt.substring(textRun.startIndex, textRun.startIndex + textRun.length)
      let textNodeId = createId('txt' + id)
      let textNode = {
        node: 'element',
        tag: 'p',
        attr: {
          class: 'txt',
          id: textNodeId
        },
        child: [{
          node: 'text',
          text: str.replace(key, '')
        }]
      }

      let txtCssNode = createCssNode('#' + textNodeId)
      delete txtCssNode.attr.position
      global.cssMap.push(txtCssNode)

      textStyle(clz, textNode, txtCssNode, para, textRun, textNodeId)
      result.push(textNode)
      css.push(txtCssNode)
      if (str.indexOf(key) === -1) {
        textNode.tag = 'span'
      }
      if(str.indexOf(key) !== -1 || j === textRuns.length - 1){
        let parentNode = createParentNode(result,id,css)
        if (parentNode&&result.length>1) {
          node.child.push(parentNode)
        } else {
          node.child.push(textNode)
        }
        result = []
        css = []
      }
      // if (j === textRuns.length - 1 && result.length) {
      //   let parentNode = createParentNode(result,id,txtCssNode)
      //   result = []
      //   node.child.push(parentNode)
      // }
      // var paddingLeft = txtCssNode.attr['padding-left']
      // var paddingRight = txtCssNode.attr['padding-right']
      // delete txtCssNode.attr['padding-left']
      // delete txtCssNode.attr['padding-right']
      // console.log()
      // setTimeout(()=>{
      // console.log(str/*,textRun.startIndex,textRun.startIndex+textRun.length*/)
    }
    // },100)
    // console.log(node)
    // var textRun = para['textRun']
  }
  // console.log('======================')
  // var style = textRun.style
  // textStyle(clz,node,cssNode,para,textRun,id)
}
const createParentNode = (result,id,css) => {
  let parentNode = ''
  if (result.length>1) {
    let parentNodeId = createId('txt'+id)
    parentNode = {
      node: 'element',
      tag: 'div',
      attr: {
        class: parentNodeId,
        id: parentNodeId
      },
      child: []
    }
    let cssNode = createCssNode('#'+parentNodeId)
    delete cssNode.attr['position']
    global.cssMap.push(cssNode)
    for (let k = 0; k < result.length; k++) {
      // console.log(result[k].attr['padding-left'],777777)
      cssNode.attr['padding-left'] = css[k].attr['padding-left']
      cssNode.attr['padding-right'] = css[k].attr['padding-right']
      //去除内联元素的间距
      cssNode.attr['font-size'] =0
      cssNode.attr['-webkit-text-size-adjust'] = 'none'
      // css[k].attr['background']='000000'
      let textAlign = css[k].attr['text-align']
      if(textAlign){
        cssNode.attr['text-align'] = css[k].attr['text-align']
        delete css[k].attr['text-align']
      }
      delete css[k].attr['padding-left']
      delete css[k].attr['padding-right']
      parentNode.child.push(result[k])
    }
  }
  return parentNode
}
const parseDynamicText = (node, clz, cssId, cssNode, id) => {
  var behaviour = clz.behaviour
  var nodeText = {
    node: 'text',
  }
  cssNode.attr['box-sizing'] = 'border-box'
  cssNode.attr['display'] = 'inline-block'
  cssNode.attr['overflow'] = 'hidden'
  node.child.push(nodeText)
  var text = clz.txt
  //单行是直接忽略换行的
  if (behaviour.lineMode === 'single') {
    text = text.replace(/\\n/g, '')
    nowWrap(cssNode)
  } else if (behaviour.lineMode === 'multi') {
    text = text.replace(/\\n/g, "<br/>")
    breakWrod(cssNode)
  } else if (behaviour.lineMode === 'multiNoWrap') {
    //多行，但是每一行是禁止换行的
    text = text.replace(/\\n/g, "<br/>")
    nowWrap(cssNode)
  }
  nodeText.text = text.replace(/\s/g, "&nbsp;")
  //设置样式，动态的文本只有一种样式
  var para = clz.paras[0]
  var textRun = para['textRun'][0]
  // var style = textRun.style
  textStyle(clz, node, cssNode, para, textRun, id)

}
const parseInputText = (node, clz, cssId, cssNode, id) => {
  var behaviour = clz.behaviour
  var nodeText = {
    node: 'text',
  }
  // console.log(behaviour)

  cssNode.attr['box-sizing'] = 'border-box'
  cssNode.attr['display'] = 'inline-block'
  cssNode.attr['overflow'] = 'hidden'
  cssNode.attr['outline'] = 'none'
  cssNode.attr['background'] = '#00000000'
  /*cssNode.attr['border'] = 'none'*/
  cssNode.attr['type'] = 'text'
  node.child.push(nodeText)
  var text = clz.txt
  let isInput = behaviour.lineMode === 'input'
  if(isInput){
    node.attr.type = 'password'
  }
  //单行是直接忽略换行的
  if (behaviour.lineMode === 'single'|| isInput) {
    text = text.replace(/\\n/g, '')
    node.attr.value = text
    // nowWrap(cssNode)
    node.tag = 'input'
  } else if (behaviour.lineMode === 'multi') {
    node.tag = 'textarea'
    text = text.replace(/\\n/g, "&#10;")
    cssNode.attr.resize = 'none'
    // breakWrod(cssNode)
  } else if (behaviour.lineMode === 'multiNoWrap') {
    //多行，但是每一行是禁止换行的
    // text = text.replace(/\\n/g, "<br/>")
    text = text.replace(/\\n/g, "")
    // nowWrap(cssNode)
    node.tag = 'textarea'
    cssNode.attr.resize = 'none'
  }

  nodeText.text = text.replace(/\s/g, "&nbsp;")
  //设置样式，动态的文本只有一种样式
  var para = clz.paras[0]
  var textRun = para['textRun'][0]
  // var style = textRun.style
  textStyle(clz, node, cssNode, para, textRun, id)

}
var fontStyleMap = {
  RegularStyle: 'normal',
  BoldItalicStyle: 'italic',
  ItalicStyle: 'italic',
  BoldStyle: 'normal',
}
const textStyle = (clz, node, cssNode, para, textRun, id) => {
  var style = textRun.style
  if(clz.behaviour.isBorderDrawn){
    cssNode.attr['border'] = '1px #000 solid'
  }else{
    cssNode.attr['border'] = 'none'
  }
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
  if (alignment !== 'left') {
    cssNode.attr['text-align'] = alignment
    // node.alignment = {'text-align':alignment}
    textAlignMap[id] = cssNode
    // if(clz.behaviour.type!=='Dynamic'){
    //   textAlignMap[id]['rightMargin'] = rightMargin
    // }
  }
  //暂时存储这些属性
  // node.tmp = {attr:['text-align':alignment]}
  if (leftMargin !== 0) {
    cssNode.attr['padding-left'] = leftMargin
  }
  //动态文本的rightMargin是不生效的
  if (rightMargin !== 0 /*&& clz.behaviour.type!=='Dynamic'*/) {
    cssNode.attr['padding-right'] = rightMargin
  }
  fontSize = Math.ceil(fontSize * 1)
  cssNode.attr['font-size'] = fontSize
  if (letterSpacing !== 0)
    cssNode.attr['letter-spacing'] = letterSpacing
  cssNode.attr['line-height'] = Math.floor(linespacing * 16 / 12 * fontSize / 2 - 2)
  cssNode.attr['color'] = fontColor
  fontName = fontName.replace(' Bold Italic', '').replace(' Bold', '').replace(' Italic', '')
  cssNode.attr['font-family'] = '"' + fontName + '"'
  var fs = fontStyleMap[fontStyle]
  cssNode.attr['font-style'] = fs
  if (fontStyle.indexOf('Bold') !== -1) {
    cssNode.attr['font-weight'] = 'bold'
  }
}
const breakWrod = cssNode => {
  cssNode.attr['word-wrap'] = 'break-word'
  cssNode.attr['word-break'] = 'break-all'
}
const nowWrap = cssNode => {
  cssNode.attr['white-space'] = 'nowrap'
  cssNode.attr['overflow'] = 'hidden'
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
  if (id.indexOf('.f') == -1) {
    cssNode.attr.position = 'absolute'
  }
  return cssNode
}
const frameKeys = [
  'a', 't', 'c', 'x', 'y', 'sx', 'sy', 'kx', 'ky', 'r', 'v', 'bounds'
]
const isEmptyFrame = (frame) => {
  for (let i = 0; i < frameKeys.length; i++) {
    let k = frameKeys[i]
    // console.log(frame[k])
    if (frame[k]/* !== null*/) {
      return false
    }
  }
  return true
}
const parseFrame = (frame, cssNode, instance,node) => {
  let bounds = frame.bounds
  if (bounds) {

    console.log(bounds)
    cssNode.attr.width = bounds.width
    cssNode.attr.height = bounds.height
    // cssNode.attr.left += bounds.x
    // cssNode.attr.top += bounds.y
    // cssNode.attr.overflow = 'hidden'
    let cn = textAlignMap[instance.libraryItem.assetId]
    // console.log(cn, textAlignMap)
    if (cn && instance.libraryItem.type === 'text') {
      let textAlign = cn.attr['text-align']
      if (textAlign === 'center' || textAlign === 'justify') {
        cssNode.attr.left =- bounds.width / 2
      } else if (textAlign === 'right') {
        cssNode.attr.left = -bounds.width
      }
    }
  }

  // console.log(frame, cssNode.attr, 4444)

  setTransform(frame, cssNode, instance,node)
}
const setTransform = (frame, cssNode,instance,node) => {
  // console.log(frame.bounds)
  let value = ''
  let cx = 1
  let cy = 1
  let rotate = frame.r == null ? 0 : frame.r
  let skewX = frame.kx == null ? 0 : frame.kx
  let skewY = frame.ky == null ? 0 : frame.ky
  let scaleX = frame.sx == null ? 1 : frame.sx
  let scaleY = frame.sy == null ? 1 : frame.sy
  let visibility = frame.v == null ? true : frame.v
  let alpha = frame.a == null ? 1 : frame.a
  let x = Math.floor(frame.x)
  let y = Math.floor(frame.y)

  // if (x) cssNode.attr.left = x
  // if (y) cssNode.attr.top = y
  // let isShape = instance.libraryItem.type === 'shape'
  // if(!isShape){
  //   if (x) cssNode.attr.left = x
  //   if (y) cssNode.attr.top = y
  // }else{
  if(x||y){
    let v =  !x? 0:`${x}px`
    v =  y? `${v},${y}px`:`${v},0`
    value+= `translate3d(${v},0)`
  }
    // if(x){
    //   if(y){
    //     value+= `translate3d(${x}px,${y}px),0`
    //   }else{
    //     value+= `translate(${x}px)`
    //   }
    // }else if(y){
    //   value+= `translate(0,${y}px)`
    // }
  // }
  if (visibility === 0) {
    cssNode.attr.visibility = 'hidden'
  }
  if (alpha != null && alpha != 1) {
    cssNode.attr.opacity = alpha
  }
  // console.log(scaleX,scaleY)

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
  if (deg === 0) {
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
const getLastFrameAttr = (frame,lastFrame)=>{
  // console.log(frame)
  // return frame
  if(!lastFrame){
    return frame
  }
  // console.log('--------------------')
  // console.log(frame.r,lastFrame.r)
  if(frame.bounds == null){
    frame.bounds = lastFrame.bounds
  }
  if(frame.r == null){
    frame.r = lastFrame.r
  }
  if(frame.kx == null){
    frame.kx = lastFrame.kx
  }
  if(frame.ky == null){
    frame.ky = lastFrame.ky
  }
  if(frame.sx == null){
    frame.sx = lastFrame.sx
  }
  if(frame.sy == null){
    frame.sy = lastFrame.sy
  }
  if(frame.v == null){
    frame.v = lastFrame.v
  }
  if(frame.a == null){
    frame.a = lastFrame.a
  }
  if(frame.x == null){
    frame.x = lastFrame.x
  }
  if(frame.y == null){
    frame.y = lastFrame.y
  }
  // console.log(frame.r,lastFrame.r)
  // console.log('=====================')
  return frame
}
const getFilters=(clz,key,node,cssNode,instance)=>{
  let frame = clz.frames[key]
  console.log(frame)
  let value = ''
  let boxShadow = ''
  frame.commands.forEach(c=>{
    if(c.type === 'Filter'){
      if(c.instanceId == instance.id){
        if(!c.enabled)return
        switch (c.filterType){
          case 'AdjustColorFilter':
            if(c.brightness!==1&&c.brightness!==0){
              value+=`brightness(${c.brightness}) `
            }
            if(c.contrast!==1&&c.contrast!==0){
              value+=`contrast(${c.contrast*100}%) `
            }
            if(c.saturation!==1&&c.saturation!==0){
              value+=`saturate(${c.saturation*100}%) `
            }
            if(c.hue!==0&&c.hue!==0){
              value+=`hue-rotate(${c.hue}deg) `
            }
            break
          case 'BlurFilter':
            let quality1 = 1
            if(c.qualityType === 'low'){
              quality1 = 0.3
            }else if(c.qualityType === 'medium'){
              quality1 = 0.35
            }else{
              quality1 = 0.45
            }
            if(c.blurX){
              // console.log(c.blurX,quality1)
              value+=`blur(${c.blurX*quality1}px) `
            }
            break;
          case 'DropShadowFilter':
            let quality2 = 1
            if(c.qualityType === 'low'){
              quality2 = 0.2
            }else if(c.qualityType === 'medium'){
              quality2 = 0.6
            }else{
              quality2 = 1
            }
            if(boxShadow){
              boxShadow+=','
            }
            if(c.innerShadow){
              boxShadow+='inset '
            }
            console.log(Math.cos(0))
            // let angle = 180/Math.PI*c.angle
            // console.log(angle)
            // value+= `drop-shadow(${c.blurX}px ${c.blurY}px ${c.blurX*quality2}px ${c.shadowColor})`
            boxShadow+= `${c.distance*(Math.round(Math.cos(c.angle)))}px ${c.distance*(Math.round(Math.sin(c.angle)))}px ${c.blurX*quality2}px ${Math.round(c.strength/100)}px ${c.shadowColor} `
            break;
          case 'GlowFilter':
            let quality = 1
            if(c.qualityType === 'low'){
              quality = 0.2
            }else if(c.qualityType === 'medium'){
              quality = 0.6
            }else{
              quality = 1
            }
            if(boxShadow){
              boxShadow+=','
            }
            if(c.innerShadow){
              boxShadow+='inset '
            }
            boxShadow+=` 0 0 ${c.blurX*quality}px ${Math.round(c.strength/100)}px ${c.shadowColor} `

            /*boxShadow+=`0 0 ${c.blurY*quality*100}px ${c.strength/100*c.blurY}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurX}px ${c.strength/100}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurX}px ${c.strength/100}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurY}px ${c.strength/100}px ${c.shadowColor} `*/

            break
        }
      }
    }
  })
  setPrifix(cssNode,'filter',value)
  setPrifix(cssNode,'box-shadow',boxShadow)
}
const parseCss = (clz,instance, node, assetId,libraryFrames) => {
  // console.log(libraryFrames)
  // if (instance.type === 'bitmap') {
  //   console.log(instance.frames)
  // }
  let id = node.attr['id']
  node.attr['range'] = (instance.startFrame + 1) + ',' + (instance.endFrame == -1 ? -1 : instance.endFrame + 1)
  // node.attr['startFrame'] = instance.startFrame + 1
  // node.attr['endFrame'] = instance.endFrame ==-1? -1:instance.endFrame +1
  let frames = []
  let lastFrame = ''
  // console.log(instance.frames.labels)
  for (let key in instance.frames) {
    let frame = instance.frames[key]
    // console.log(frame.labels,555)
    // if(frame.labels){
    //   // console.log(frame.labels,3333)
    // }
    // console.log(frame)
    let indexFrame = ''
    if (!isSingleFrame(instance)) {
      indexFrame = `.f${parseInt(key) + 1}`
    }
    // console.log(frame)
    // console.log(isEmptyFrame(frame))
    if (isEmptyFrame(frame)) {
      frames.push((parseInt(key) + 1))
    } else {
      frames.push(parseInt(key) + 1)
    }
    let cssId = `#${id}${indexFrame}`
    if(instance.libraryItem.type === 'shape'){
      cssId += ''
    }
    let cssNode = createCssNode(cssId)
    global.cssMap.push(cssNode)
    getFilters(clz,key,node,cssNode,instance)
    // console.log(Object.keys(cssNode.attr))
    //去掉空帧
    // if(!Object.keys(cssNode.attr).length){
    //   global.cssMap=global.cssMap.splice(global.cssMap.length-1,1)
    // }
    // console.log(instance.libraryItem.type)
    // if(node.attr.id === '_id3'){
    //   // console.log(frame)
    //   // if(instance.libraryItem.type === 'text')
    //   console.log(instance.initFrame)
    // }
    if(instance.libraryItem.type === 'text'){
      // console.log(instance.initFrame)
      // console.log(frame)
      // console.log(instance)
    }

    getLastFrameAttr(frame,lastFrame)
    parseFrame(frame, cssNode, instance,node)
    lastFrame = frame
    // console.log(cssNode)
  }
  // console.log(frames)
  if (frames.length) {
    // console.log(instance)/**/
    // console.log(frames)
    if (frames.length === 1 && frames[0] === 1) {

    } else {
      // frames = [1]
      var f = []
      for (var i = 0; i < frames.length; i++) {
        if (!f.length) {
          f.push([frames[i]])
          continue
        }
        if (frames[i] === frames[i - 1] + 1) {
          if (f[f.length - 1].length < 2) {
            f[f.length - 1].push(frames[i])
          } else {
            f[f.length - 1][1] = frames[i]
          }
        } else {
          f.push([frames[i]])
        }
      }
      var fstr = ''
      for (var i = 0; i < f.length; i++) {
        var item = f[i]
        if (item.length === 1) {
          fstr += item[0] + ','
        } else {
          fstr += item[0] + '~'
          fstr += item[1] + ','
        }
      }
      fstr = fstr.substring(0, fstr.length - 1)
      // setTimeout(function () {
      //   console.log(fstr)
      // })

      node.attr['frames'] = fstr
    }
    // console.log(frames,fstr)
  }

  // global.cssMap[id] = cssNode
  // console.log(instance,555555)
  // instance.frames.forEach(frame=>{
  //
  // })
}
const getLabels = (node,clz)=>{
  if(clz.frames){
    // let labelsAndScripts = {}
    let ls = ''
    let ss = ''
    clz.frames.forEach(frame=>{
      // console.log(frame)
      let index = frame.frame + 1
      // index=1
      if(frame.labels){
        ls += index+':'
        frame.labels.forEach(label=>{
          ls += label.trim()+','
        })
        ls = ls.substring(0,ls.length-1) + '|'
      }else if(frame.scripts){
        // let index = frame.frame + 1
        ss += index+':'
        frame.scripts.forEach(script=>{
          ss += encodeURIComponent(script.trim())+ ','
        })
        ss = ss.substring(0,ss.length-1) + '|'
      }
      // getFilters(frame,node,clz)
    })
    if(ls){
      ls = ls.substring(0,ls.length-1)
      node.attr.labels = ls
    }
    if(ss){
      ss = ss.substring(0,ss.length-1)
      node.attr.scripts = ss
    }
    return
  }
}
const parseFrames = (node, clz) => {
  // return
  // console.log(clz)
  getLabels(node,clz)
  node.attr.totalFrames = clz.totalFrames
  // console.log(clz.name)
  // console.log(clz.frames)
  let child = node.child
  clz.renderChildren(global.renderer, (children) => {
    children.forEach(instance => {
      let claz = instance.libraryItem
      // console.log(instance.frames)
      // let node = {}
      // Object.assign(node,global.idsMap[claz.assetId + ''])
      // console.log(claz.assetId,global.idsMap)
      // return
      //产生这种情况，是因为需要的类还没存到idsMap，所以缺少了
      /*console.log(claz.type)
      console.log(global.idsMap,global.cssMap)
      let nodes = getNode(claz,claz.assetId+ '')
      let node = JSON.parse(JSON.stringify(nodes[0]))*/
      utils.parseClass(global.library._mapById,claz.assetId + '')
      // if(!global.idsMap[claz.assetId + ''])return

      let node = JSON.parse(JSON.stringify(global.idsMap[claz.assetId + '']))


      node.attr['id'] = createId('_id')
      parseCss(clz,instance, node, claz.assetId,claz.frames)
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