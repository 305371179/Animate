const DataUtils = require('../utils/DataUtils');
const {exportHtml, exportCss, exportJs} = require('./export');

module.exports = {
  parseClass(idMap, id) {
    let clz = idMap[id]
    if(clz.type === 'graphic'){
      clz.type= 'movieclip'
    }
    let node = createNode(clz, id)
    global.idsMap[id] = node
    let cssId = '.' + clz.type + id
    let cssNode = createCssNode(cssId)
    global.cssMap.push(cssNode)
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
const parseFrame = (frame, cssNode) => {
  let x = Math.round(frame.x)
  let y = Math.round(frame.y)
  if (x) cssNode.attr.left = x
  if (y) cssNode.attr.top = y
  setTransform(frame, cssNode)
}
const setTransform = (frame, cssNode) => {
  // console.log(frame)
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
const parseCss = (instance, node) => {
  // if (instance.type === 'bitmap') {
  //   console.log(instance.frames)
  // }
  let id = node.attr['id']
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
    // delete cssNode.attr.position
    // console.log(cssNode)
    global.cssMap.push(cssNode)
    parseFrame(frame, cssNode)
  }
  if(frames.length){
    // console.log(instance)/**/
    // console.log(frames)
    if(frames.length === 1 && frames[0] === 1){

    }else{
      node.attr['frames'] = frames.toString()
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
      parseCss(instance,node)
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