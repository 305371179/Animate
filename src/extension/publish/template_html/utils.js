const DataUtils = require('../utils/DataUtils');
const Matrix = require('../data/Matrix')
const {merge,exportHtml, exportCss, exportJs} = require('./export');
const fs = require('fs-extra')
const path = require('path')
var textAlignMap = {}
// global.cssNodeMap = {}
global.isSpriteSheet = false
global.spriteSheetJson = ''
global.maskMap = {}
global.maskDefs = {
  node: 'element',
  tag: 'defs',
  attr: {},
  child: []
}
global.maskNode = {
  node: 'element',
  tag: 'svg',
  attr: {
    // position:'absolute',
    class: 'masks',
    name: 'masks',
    id: '_masks'
  },
  child: [global.maskDefs]
}
const utils = module.exports = {
  exportAssets(assets) {
    // if(global.isDebug)
    // assets = {'a':"/Users/gsch/编程/AnimateCC/pixi-animate-extension/fla/images/a_atlas_1.json"}
    if (assets) {
      global.spriteSheetJson = []
      for (let k in assets) {
        let str = fs.readFileSync(path.resolve(process.cwd(), assets[k]), 'utf-8')
        global.spriteSheetJson.push(JSON.parse(str))
      }
      global.isSpriteSheet = true
      // alert(JSON.stringify(global.spriteSheetJson))
    }
  },
  getImage(image) {
    if (!global.isSpriteSheet) {
      return image
    }
    for (let i = 0; i < global.spriteSheetJson.length; i++) {
      let sprite = global.spriteSheetJson[i]
      let frames = sprite['frames']
      let img = frames[image.name]
      if (img) {
        let frame = img.frame
        let scale = sprite.meta.scale
        // image.width = frame.w/scale
        // image.height = frame.h/scale
        image.src = path.join(global.meta.imagesPath, sprite.meta.image)
        // console.log(frame.w,scale,frame)
        image.x = frame.x
        image.y = frame.y
        image.w = frame.w
        image.h = frame.h
        // console.log(frame,image.name)
        /*let scale = sprite.meta.scale
        let bigSize = sprite.meta.size
        let image = sprite.meta.image
        let app = sprite.meta.app
        return {
            "x": 1,
            "y": 1,
            "w": 126*scale,
            "h": 88*scale,
            "width":frame['sourceSize'].w,
            "height":frame['sourceSize'].h,
            bigSize,
            "src": image,
            app

        }*/
      }
    }
    return image
    // return global.spriteSheetJson.frames[image.name]
  },
  parseClass(idMap, id) {

    if (global.idsMap[id]) return
    let clz = idMap[id]
    // console.log(clz)
    // console.log(clz.type)
    if (clz.type === 'graphic') {
      clz.type = 'movieclip'
    }
    // console.log(clz.assetId)
    let node = createNode(clz, id)
    node.classType = clz.type
    node.cssMap = {}
    node.attr.assetId = id
    global.idsMap[id] = node
    let cssId = '.' + clz.type + id
    let cssNode = createCssNode(cssId)
    cssNode.attr.visibility = 'hidden'
    // node.cssId = cssId
    global.cssMap.push(cssNode)
    // node.cssMap[cssId] =cssNode
    // cssNode.parent=parentCssNode
    // let nodes = getNode(clz,id)
    // let node = nodes[0]
    // let cssNode = nodes[1]
    if (clz.type !== 'shape' && !global.hasAddGCssNode) {
      global.hasAddGCssNode = true
      global.cssMap.push({
        node: 'g',
        attr: {
          'pointer-events': 'visiblePainted'
        }
      })
    }
    switch (clz.type) {
      case 'bitmap':

        // console.log(clz)
        if (global.isSpriteSheet) {
          utils.getImage(clz)
          node.tag = 'div'
          node.attr = {
            ...node.attr,
            // id: createId('id'),
            // src: clz.src
          }
          cssNode.attr = {
            ...cssNode.attr,
            width: clz.width,
            height: clz.height,
            'background': `url(${clz.src}) no-repeat`,
            'background-position': `${-clz.x}px ${-clz.y}px`,
          }

        } else {
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
          name: createId('shape')
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
        parseShape(node, clz, cssId, cssNode, id)
        break
      case 'text':
        node.tag = 'p'
        parseText(node, clz, cssId, cssNode, id)
        break
      case 'graphic':
      case 'movieclip':
        // console.log(clz)
        /*for(var i=0;i<clz.frames.length;i++){
          clz.frames[i].commands.forEach(item=>{
            console.log(item)
            if(item.type ==='Place'&&item.bounds){
              console.log(item.bounds)
              cssNode.attr.width = item.bounds.width
              cssNode.attr.height = item.bounds.height
            }
          })
        }*/
        parseFrames(node, clz)
        // console.log(clz.masks)
        // console.log(44444)

        break
      case 'stage':
        // console.log(clz.frames.length,clz)
        /*for(var i=0;i<clz.frames.length;i++){
          clz.frames[i].commands.forEach(item=>{
            console.log(item)
            if(item.type ==='Place'&&item.bounds){
              console.log(item.bounds)
            }
          })
        }*/
        // console.log(4444,clz.masks)
        // console.log(stage.frames)
        node.attr.id = clz.name
        cssNode.node = '#' + clz.name
        cssNode.attr.overflow = 'hidden'
        delete cssNode.attr.visibility
        cssNode.attr.width = global.meta.width
        cssNode.attr.height = global.meta.height
        cssNode.attr.background = global.meta.background

        // console.log(clz.masks)
        // console.log(global.library)
        parseFrames(node, clz)
        break
    }
    if (clz.type === 'stage') {
      // console.log(clz.frames)
      if (global.maskDefs.child.length) {
        node.child.splice(0, 0, global.maskNode)
        // console.log(global.maskNode)
      }
      global.cssMap.push({
        node: '.masks',
        attr: {
          // display: 'none'
          position: 'absolute',
          left: 0,
          top: 0,
          width: 0,
          height: 0
        }
      })
      getChildCssNode(node)
      // cssNode.node = '.'+clz.name
      parseHtml(global.idsMap['undefined'])
    } else {
      // node.attr.class+= ' hidden'
    }
    // console.log(55555555)
    return node
  }
}
const getCssNode = (id) => {
  for (let i = 0; i < global.cssMap.length; i++) {
    if (id === global.cssMap[i].node) {
      return global.cssMap[i]
    }
  }
}
const getChildCssNode = (node, pbs = '') => {
  let newPbs = ''
  let cssMap = node.cssMap
  if (!cssMap) return
  for (let k in cssMap) {
    let currentCssNode = getCssNode(k)
    if (!currentCssNode) continue
    let boxShadow = currentCssNode.attr['box-shadow']
    if (!boxShadow) {
      if (pbs) {
        setPrifix(currentCssNode, 'box-shadow', pbs)
      }
    } else {
      if (pbs) {
        setPrifix(currentCssNode, 'box-shadow', pbs + ',' + boxShadow)
      }
    }

    if (node.child && currentCssNode.classType === 'movieclip') {
      var bs = currentCssNode.attr['box-shadow']
      if (bs) {
        node.child.forEach(child => {
          getChildCssNode(child, bs)
        })
      }
    }
  }
}
const getMovieClipBounds = (node, clz, cssNode, cssId) => {
  // console.log(node.child)
  // console.log(global.cssMap)

  let cssNodeArray = getChildCssNode(node, clz, cssNode, cssId)
  var minP = []
  var maxP = []
  for (var i = 0; i < clz.frames.length; i++) {
    clz.frames[i].commands.forEach(item => {
      // console.log(item)
      if (item.type === 'Place' && item.bounds) {
        // console.log(item.transform,item.bounds)
        if (!minP.length) {
          minP[0] = item.transform.tx + item.bounds.x
          minP[1] = item.transform.ty + item.bounds.y
          maxP[0] = minP[0] + item.bounds.width
          maxP[1] = minP[1] + item.bounds.height
        } else {
          let minX = item.transform.tx + item.bounds.x
          let minY = item.transform.ty + item.bounds.y
          let maxX = minX + item.bounds.width
          let maxY = minY + item.bounds.height
          if (minP[0] > minX) {
            minP[0] = minX
          }
          if (minP[1] > minY) {
            minP[1] = minY
          }
          if (maxP[0] < maxX) {
            maxP[0] = maxX
          }
          if (maxP[1] < maxY) {
            maxP[1] = maxY
          }
        }
      }
    })
    /* let maxWidth = maxP[0] -minP[0]
     let maxHeight = maxP[1] -minP[1]

     let boundNode = {
       node: 'element',
       tag: 'div',
       attr:{
         class:'bound'
       }
     }
     node.child.splice(0,0,boundNode)
     var cid = cssId+'.f'+(i+1)+' .bound'
     if(clz.frames.length===1&&clz.frames[0]){
       cid = cssId + ' .bound'
     }
     var css = createCssNode(cid)
     global.cssMap.push(css)
     css.attr ={
       position:'absolute',
       width:maxWidth,
       height:maxHeight,
       left:minP[0],
       top:minP[1],
       // border:'1px #000 solid'
     }

     // cssNode.attr.width = 0
    var cid = cssId+'.f'+(i+1)
     if(clz.frames.length===1&&clz.frames[0]){
       cid = cssId
     }
     var css = createCssNode(cid)
     global.cssMap.push(css)
     css.attr ={
       position:'absolute',
       width:maxWidth,
       height:maxHeight,
       // left:minP[0],
       // top:minP[1],
     }
     // console.log(minP,maxP)
     console.log(i,minP[0],minP[1],maxWidth,maxHeight)*/
  }

}
const getNode = (clz, id) => {
  let node = global.idsMap[id]
  if (!node) {
    node = createNode(clz, id)
    global.idsMap[id] = node
  }
  let cssNode = ''
  let cssId = '.' + clz.type + id
  for (let i = 0; i < global.cssMap.length; i++) {
    var cn = global.cssMap[i]
    if (cn.node === cssId) {
      cssNode = cn
    }
  }
  if (!cssNode) {
    cssNode = createCssNode(cssId)
    global.cssMap.push(cssNode)
  }
  return [node, cssNode]
}
const pathMap = {
  'b': 'c',
  'c': 'z',
}
const getSvgPath = command => {
  let pathCommand = pathMap[command]
  return pathCommand ? pathCommand : command
}
const getPercent = (x, w) => {
  // console.log(x,w)
  if (!w) {
    return x + '%'
  }
  return x / w * 100 + '%'
}
const getTransform = (matrix) => {
  let value = ''
  let x = matrix.x
  let y = matrix.y
  if (x || y) {
    let v = !x ? 0 : `${x}`
    v = y ? `${v},${y}` : `${v}`
    value += `translate(${v})`
  }
  let skewX = matrix.skewX;
  let skewY = matrix.skewY;
  let rotate = matrix.rotation;
  let scaleX = matrix.scaleX;
  let scaleY = matrix.scaleY;
  let cx = 1
  let cy = 1
  if (skewX + skewY === 0) {
    if (rotate !== 0)
      value += setRotate(rotate)
  } else {
    if (skewX != 0 && skewY == 0) {
      value += ` skew(${r2d(skewX)}deg)`
      // cy = Math.cos(skewX)
    } else if (skewY != 0 && skewX == 0) {
      value += ` skewY(${r2d(skewY)}deg)`
      // cx = Math.cos(skewY)
    } else {
      value += ` skew(${r2d(skewX)}deg,${r2d(skewY)}deg)`
      // cx = Math.cos(skewY)
      // cy = Math.cos(skewX)
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
  value = 'matrix(1,0,0,1,0.5,0.5)'
  return value
}
const createGradientNode = (type, linearGradient, p, g, pathNode, rect) => {
  let id = createId('_lid')
  let gNode = createNode({type: '', name: id}, id)
  if (!rect) rect = getPathWH(p.d)
  // let rect = getPathWH(p.d)
  let wh = [rect[2], rect[3]]
  let minX = rect[0]
  let minY = rect[1]
  // console.log(rect)
  if (type === 'radialGradient') {
    // console.log(p)
    let patternTransform = linearGradient.gradientTransform
    // let matrix = new Matrix(patternTransform)
    // let transtorm = getTransform(matrix)
    // console.log(transtorm)
    let matrix = `matrix(${patternTransform.a},${patternTransform.b},${patternTransform.c},${patternTransform.d},${patternTransform.tx / wh[0]},${patternTransform.ty / wh[1]})`
    gNode.attr.gradientTransform = matrix

    let tx = /*patternTransform.tx*/-minX
    let ty = /*patternTransform.ty*/-minY
    // console.log(wh[0],wh[1],tx,ty,linearGradient.cx+tx)
    // console.log()
    let rx = (linearGradient.r) / wh[0]
    let ry = (linearGradient.r) / wh[1]
    let r = rx < ry ? rx : ry
    gNode.attr = {
      ...gNode.attr,
      id,
      // spreadMethod: linearGradient.spreadMethod,
      cx: getPercent(linearGradient.cx + tx, wh[0]),//linearGradient.x1+'px',
      cy: getPercent(linearGradient.cy + ty, wh[1]),//linearGradient.y1+ 'px',
      r: getPercent(r * 100),//linearGradient.x2+ 'px',
      fx: getPercent(linearGradient.fx + tx, wh[0]),//linearGradient.y2+ 'px',
      fy: getPercent(linearGradient.fy + ty, wh[1]),//linearGradient.y2+ 'px',
    }
  } else if (type === 'linearGradient') {
    gNode.attr = {
      ...gNode.attr,
      id,
      x1: getPercent(linearGradient.x1 - minX, wh[0]),//linearGradient.x1+'px',
      y1: getPercent(linearGradient.y1 - minY, wh[1]),//linearGradient.y1+ 'px',
      x2: getPercent(linearGradient.x2 - minX, wh[0]),//linearGradient.x2+ 'px',
      y2: getPercent(linearGradient.y2 - minY, wh[1]),//linearGradient.y2+ 'px',
    }
  }

  gNode.tag = type
  createStop(gNode, linearGradient, p)
  return gNode
}
const createStop = (gNode, {stop}, p) => {
  stop.forEach(s => {
    // console.log(s)
    let node = {
      node: 'element',
      tag: 'stop',
      attr: {
        offset: s.offset + '%',
        style: `stop-color:${s.stopColor};stop-opacity:${s.stopOpacity}`
      }
    }
    gNode.child.push(node)
  })
}
const quadraticCurve = function (p0, p1, p2, t) {
  var p = []
  p[0] = Math.pow(1 - t, 2) * p0[0] + 2 * t * (1 - t) * p1[0] + Math.pow(t, 2) * p2[0]
  p[1] = Math.pow(1 - t, 2) * p0[1] + 2 * t * (1 - t) * p1[1] + Math.pow(t, 2) * p2[1]
  return p
}
const quadraticCurveLength = function (p0, p1, p2) {
  var fromX = p0[0]
  var fromY = p0[1]
  var cpX = p1[0]
  var cpY = p1[1]
  var toX = p2[0]
  var toY = p2[1]
  var ax = fromX - (2.0 * cpX + toX);
  var ay = fromY - (2.0 * cpY + toY);
  var bx = 2.0 * ((cpX - 2.0) * fromX);
  var by = 2.0 * ((cpY - 2.0) * fromY);
  var a = 4.0 * (ax * ax + ay * ay);
  var b = 4.0 * (ax * bx + ay * by);
  var c = bx * bx + by * by;

  var s = 2.0 * Math.sqrt(a + b + c);
  var a2 = Math.sqrt(a);
  var a32 = 2.0 * a * a2;
  var c2 = 2.0 * Math.sqrt(c);
  var ba = b / a2;
  return (a32 * s + a2 * b * (s - c2) + (4.0 * c * a - b * b) * Math.log((2.0 * a2 + ba + s) / (ba + c2))) / (4.0 * a32);
};
const getCurvePoints = function (p0, p1, p2) {
  const length = quadraticCurveLength(p0, p1, p2)
  // var minP = []
  // var maxP = []
  let points = []
  let k = 1
  if(length<50){
    k =4
  }else if(length<100){
    k = 10
  }else if(length<200){
    k = 20
  }else{
    k = 50
  }
  for (var i = 0; i <= length; i+=k) {
    var p = quadraticCurve(p0, p1, p2, 1 * i / length)
    points.push(p)
    /*if(minP[0] === undefined){
      minP[0]= p[0]
      minP[1]= p[1]
      maxP[0]= p[0]
      maxP[1]= p[1]
    }
    if(minP[0]<p[0]){
      minP[0] = p[0]
    }
    if(minP[1]<p[1]){
      minP[1] = p[1]
    }
    if(maxP[0]>p[0]){
      maxP[0] = p[0]
    }
    if(maxP[1]>p[1]){
      maxP[1] = p[1]
    }*/
  }
  return points//[minP,maxP]
}
const getWH = function (points) {

  const length = points.length
  var minP = []
  var maxP = []
  for (var i = 0; i < length; i++) {
    var p = points[i]
    if (minP[0] === undefined) {
      minP[0] = p[0]
      minP[1] = p[1]
      maxP[0] = p[0]
      maxP[1] = p[1]
    }
    if (minP[0] > p[0]) {
      minP[0] = p[0]
    }
    if (minP[1] > p[1]) {
      minP[1] = p[1]
    }
    if (maxP[0] < p[0]) {
      maxP[0] = p[0]
    }
    if (maxP[1] < p[1]) {
      maxP[1] = p[1]
    }
  }
// console.log(minP,maxP)
  // console.log(Math.abs(maxP[0]-minP[0]),Math.abs(maxP[1]-minP[1]))

  return [...minP, Math.abs(maxP[0] - minP[0]), Math.abs(maxP[1] - minP[1]), maxP[0], maxP[1]]
}

const parseGradient = (p, g, pathNode, rect) => {
  let id = ''
  let linearGradient = p.linearGradient
  if (linearGradient) {
    let gNode = createGradientNode('linearGradient', linearGradient, p, g, pathNode, rect)
    g.child.push(gNode)
    // console.log(css)
    // css.attr.background = '-webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96))';
    // console.log(css)
    id = gNode.attr.id
  }
  let radialGradient = p.radialGradient
  if (radialGradient) {
    let gNode = createGradientNode('radialGradient', radialGradient, p, g, pathNode, rect)
    g.child.push(gNode)
    // console.log(css)
    // css.attr.background = '-webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96))';
    // console.log(css)
    id = gNode.attr.id
  }

  // console.log(linearGradient)
  return id
}
const fillImage = (p, defs) => {
  /* <defs>
        <pattern id="avatar" width="100%" height="100%" patternContentUnits="objectBoundingBox">
            <image width="1" height="1" xlink:href="http://userimg.yingyonghui.com/head/24/1458708838143/5426424.png-thumb"/>
        </pattern>
        <style>
            circle, rect {
                stroke: #ff9900;
                stroke-width: 5px;
            }
        </style>
    </defs>
*/
//位图填充的图片是不会被打到雪碧图里面的
  let image = p.image
  if (!image) return
  let id = createId('_pattern')
  let patternNode = createNode({type: '', name: id}, id)
  defs.child.push(patternNode)
  patternNode.tag = 'pattern'
  let patternTransform = image.patternTransform
  let matrix = `matrix(${patternTransform.a},${patternTransform.b},${patternTransform.c},${patternTransform.d},${patternTransform.tx},${patternTransform.ty})`
  // utils.getImage(image)
  patternNode.attr = {
    patternTransform: matrix,
    id: id,
    width: image.width,
    height: image.height,
    patternUnits: image.patternUnits,
  }
  // let img = {
  //   node: 'element',
  //   tag: 'rect',
  //   attr:{
  //     x:0,
  //     y:0,
  //     width: image.width,
  //     height: image.height,
  //     'style': 'background:url(image.src)'
  //   }
  // }
  let img = {
    node: 'element',
    tag: 'image',
    attr: {
      // width: image.width,
      // height: image.height,
      'xlink:href': image.src
    }
  }
  patternNode.child.push(img)
  return id
}
const parseShape = (node, clz, cssId, cssNode, id) => {
  let gid = createId('g' + id)
  let g = createNode({type: '', name: gid}, gid)
  g.tag = 'g'
  node.child.push(g)
  let defs = {
    node: 'element',
    tag: 'defs',
    child: []
  }
  // node.child.push(defs)
  // console.log(clz)
  // parseGradient(p,cssNode)
  let isDefs = false
  let maxRect = []
  let rect = ''
  clz.paths.forEach(p => {
    let imgId = fillImage(p, defs)
    if (imgId && !isDefs) {
      isDefs = true
      node.child.push(defs)
    }
    // rect = getPathWH(p.d)

    let pid = createId('path' + id)
    let pathNode = createNode({type: '', name: pid}, pid)
    let gradientId = parseGradient(p, g, pathNode, rect)
    pathNode.tag = 'path'
    // node.child.push(pathNode)
    g.child.push(pathNode)
    // g.attr['pointer-events'] = 'visiblePainted'
    // g.attr.onclick = 'console.log(111)'
    /* if(p.stroke&&rect){
       let half = p.thickness/2
       rect[0] -= half
       rect[1] -= half
       rect[4] += half
       rect[5] += half
       // console.log(rect,p.thickness)
     }
     if(!maxRect.length){
       maxRect = rect
     }else{
       if(maxRect[0]>rect[0]){
         maxRect[0]=rect[0]
       }
       if(maxRect[1]>rect[1]){
         maxRect[1]=rect[1]
       }
       if(maxRect[4]<rect[4]){
         maxRect[4]=rect[4]
       }
       if(maxRect[5]<rect[5]){
         maxRect[5]=rect[5]
       }
     }*/
    if (p.color && !gradientId) {
      let color = p.color;
      if (p.alpha !== 1) {
        // console.log(color)
        color = DataUtils.hexToRgba(color, p.alpha)
      }

      // console.log(p.alpha)
      if (!p.stroke) {
        pathNode.attr.fill = color
        // g.attr.fill = p.color
      } else {
        pathNode.attr.fill = 'none'
        pathNode.attr.stroke = p.color
        // console.log(p)
        pathNode.attr['stroke-width'] = p.thickness
        pathNode.attr['stroke-linejoin'] = p.linejoin
        pathNode.attr['stroke-linecap'] = p.linecap
      }
    } else {
      if (gradientId) {
        if (p.stroke) {
          pathNode.attr.fill = 'none'
          pathNode.attr.stroke = `url(#${gradientId})`
          pathNode.attr['stroke-width'] = p.thickness
          pathNode.attr['stroke-linejoin'] = p.linejoin
          pathNode.attr['stroke-linecap'] = p.linecap
        } else {
          pathNode.attr.fill = `url(#${gradientId})`
        }
      } else if (imgId) {
        if (!p.stroke) {
          pathNode.attr.fill = `url(#${imgId})`
        } else {
          pathNode.attr.fill = 'none'
          pathNode.attr.stroke = `url(#${imgId})`
          // console.log(p)
          pathNode.attr['stroke-width'] = p.thickness
          pathNode.attr['stroke-linejoin'] = p.linejoin
          pathNode.attr['stroke-linecap'] = p.linecap
        }
      }
    }
    pathNode.attr.d = parseD(p.d)
    pathNode.d = p.d
    // pathNode.attr.d = parseD(p.d)

    // console.log(wh)
  })
  /*  if(maxRect){
      let x = maxRect[0]
      let y = maxRect[1]
      let width = Math.ceil(maxRect[4]) -x
      let height = Math.ceil(maxRect[5]) - y
      x = Math.floor(x)
      y = Math.floor(y)
      width = Math.ceil(width)
      height = Math.ceil(height)
      g.attr.transform = 'translate('+(-x)+' '+(-y)+')'
      node.attr.style = `width:${width}px;height:${height}px;left:${x}px;top:${y}px`
    }*/
  // console.log(maxRect)
}
const getPathWH = d => {
  let points = []
  let point = []
  let lastPoint = []
  for (let i = 0; i < d.length; i++) {
    let c = d[i]
    if (c === 'c') continue
    if (c === 'm' || c === 'l') {
      point = []
      lastPoint = point
      points.push(point)
      point.push(d[++i])
      point.push(d[++i])
    } else if (c === 'q') {
      let p0 = lastPoint
      let p1 = [d[++i], d[++i]]
      let p2 = [d[++i], d[++i]]
      lastPoint = p2
      points = [
        ...points,
        ...getCurvePoints(p0, p1, p2)
      ]
    }
  }
  let rect = getWH(points)
  return rect
  // console.log()
}
const parseD = d => {
  let path = ''
  let points = []
  let point = []
  let lastC = ''
  let p0 = []
  let p1 = []
  let p2 = []
  d.forEach(item => {
    // console.log(item)
    if (isNaN(item)) {
      // if(lastC==='q'){
      //   p0 = point
      //   console.log(p0)
      //   // p1 = []
      //   // p2 = []
      // }
      //
      // lastC = item
      // console.log(item)
      item = getSvgPath(item)
      if (item.toUpperCase() === 'H') return
      path += item.toUpperCase() + ' '
      // point = []
      // points.push(point)
    } else {
      let v = parseFloat(item)
      // if(lastC === 'q'){
      //   /*if(p0.length<2){
      //     // p0.push(v)
      //   }else */if(p1.length<2){
      //     p1.push(v)
      //   }else if(p2.length<2){
      //     p2.push(v)
      //   }else if(p2.length === 2){
      //     // console.log(p0,p1,p2)
      //     p0 = []
      //     p1 = []
      //     p2 = []
      //   }
      // }else{
      // }
      // if(lastC === 'm' || lastC === 'l'){
      //   console.log(point)
      //   if(point.length === 2){
      //     p0 = point
      //     console.log(p0,55555)
      //   }
      // }
      // point.push(v)
      path += v + ' '

    }
  })
  path = path.substring(0, path.length - 1)
  // if(!points[points.length-1].length){
  //   points.splice(points.length-1,1)
  // }

  // console.log(getWH(points))
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
  if(!paras)return
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
      if (str.indexOf(key) !== -1 || j === textRuns.length - 1) {
        let parentNode = createParentNode(result, id, css)
        if (parentNode && result.length > 1) {
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
const createParentNode = (result, id, css) => {
  let parentNode = ''
  if (result.length > 1) {
    let parentNodeId = createId('txt' + id)
    parentNode = {
      node: 'element',
      tag: 'div',
      attr: {
        class: parentNodeId,
        id: parentNodeId
      },
      child: []
    }
    let cssNode = createCssNode('#' + parentNodeId)
    delete cssNode.attr['position']
    global.cssMap.push(cssNode)
    for (let k = 0; k < result.length; k++) {
      // console.log(result[k].attr['padding-left'],777777)
      cssNode.attr['padding-left'] = css[k].attr['padding-left']
      cssNode.attr['padding-right'] = css[k].attr['padding-right']
      //去除内联元素的间距
      cssNode.attr['font-size'] = 0
      cssNode.attr['-webkit-text-size-adjust'] = 'none'
      // css[k].attr['background']='000000'
      let textAlign = css[k].attr['text-align']
      if (textAlign) {
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
  cssNode.attr['background'] = 'white'
  /*cssNode.attr['border'] = 'none'*/
  cssNode.attr['type'] = 'text'
  node.child.push(nodeText)
  var text = clz.txt
  let isInput = behaviour.lineMode === 'input'
  if (isInput) {
    node.attr.type = 'password'
  }
  //单行是直接忽略换行的
  if (behaviour.lineMode === 'single' || isInput) {
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
  if (clz.behaviour.isBorderDrawn) {
    cssNode.attr['border'] = '1px #000 solid'
  } else {
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
  cssNode.attr['line-height'] = Math.round(linespacing * 16 / 12 * fontSize / 2 - 2)
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
  merge(stage)
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
    // type: clz.type,
    attr: {
      class: clz.type + id,
      'name': clz.name
      // id: scope.name,
    },
    child: []
  }
}
const createCssNode = (id) => {
  // console.log(id,type)
  let cssNode = {
    node: id.replace(/#/g,'.'),
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
const r2d = r => round(DataUtils.toPrecision(r * 180 / Math.PI, 8))
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
const getLastFrameAttr = (frame, lastFrame) => {
  // console.log(frame)
  // return frame
  if (!lastFrame) {
    return frame
  }
  // console.log('--------------------')
  // console.log(frame.r,lastFrame.r)
  if (frame.bounds == null) {
    frame.bounds = lastFrame.bounds
  }
  if (frame.r == null) {
    frame.r = lastFrame.r
  }
  if (frame.kx == null) {
    frame.kx = lastFrame.kx
  }
  if (frame.ky == null) {
    frame.ky = lastFrame.ky
  }
  if (frame.sx == null) {
    frame.sx = lastFrame.sx
  }
  if (frame.sy == null) {
    frame.sy = lastFrame.sy
  }
  if (frame.v == null) {
    frame.v = lastFrame.v
  }
  if (frame.a == null) {
    frame.a = lastFrame.a
  }
  if (frame.x == null) {
    frame.x = lastFrame.x
  }
  if (frame.y == null) {
    frame.y = lastFrame.y
  }
  if(!frame.matrix){
    frame.matrix = lastFrame.matrix
  }
  // console.log(frame.r,lastFrame.r)
  // console.log('=====================')
  return frame
}

//Layer 图层  Add：增加 Substract：减去 Invert：反向 Alpha：透明 Erase：擦除
const blendModes = {
  // 'Normal': 'normal',        //正常
'Multiply': 'multiply',       //正片叠底
'Screen': 'screen',          //滤色
'Overlay': 'overlay',        //叠加
'Darken': 'darken',          //变暗
'Lighten': 'lighten',         //变亮
'Substract': 'color-dodge',     //颜色减淡
'Add': 'color-burn',      //颜色加深
'Hardlight': 'hard-light',      //强光
// mix-blend-mode: soft-light,      //柔光
'Difference': 'difference',     //差值 减去
'Invert': 'exclusion',       //排除
// mix-blend-mode: hue;             //色相
// mix-blend-mode: saturation;      //饱和度
// mix-blend-mode: color;           //颜色
// mix-blend-mode: luminosity;      //亮度
}
const getBlendMode = (cssNode,c)=>{
  let blendMode = blendModes[c.blendMode]
  // console.log(c.blendMode)
  return blendMode
  if(blendMode)
  setPrifix(cssNode,'mix-blend-mode',blendMode)
}

const getFilters = (clz, key, node, cssNode, instance) => {
  let frame = clz.frames[key]
  cssNode.range = [
    instance.startFrame,
    instance.endFrame
  ]
  // console.log(cssNode.node)
  // console.log(instance.startFrame,instance.endFrame)
  let isText = instance.libraryItem.type === 'text'
  let value = ''
  let boxShadow = ''
  if (!frame) return
  let blendMode = ''
  frame.commands.forEach(c => {
    // console.log(c)
    if (c.type === 'Filter') {
      // console.log(c.instanceId,c.filterType , instance.id,node.attr.id,cssNode)
      if (c.instanceId == instance.id) {
        if (!c.enabled) return
        switch (c.filterType) {
          case 'AdjustColorFilter':
            if (c.brightness !== 1 && c.brightness !== 0) {
              value += `brightness(${c.brightness}) `
            }

            if (c.saturation !== 1 && c.saturation !== 0) {
              value += `saturate(${c.saturation * 100}%) `
            }
            if (c.hue !== 0 && c.hue !== 0) {
              value += `hue-rotate(${c.hue}deg) `
            }
            if (c.contrast !== 1 && c.contrast !== 0) {
              value += `contrast(${(c.contrast) / 100}) `
            }
            break
          case 'BlurFilter':
            let quality1 = 1
            if (c.qualityType === 'low') {
              quality1 = 0.3
            } else if (c.qualityType === 'medium') {
              quality1 = 0.35
            } else {
              quality1 = 0.45
            }
            if (c.blurX) {
              // console.log(c.blurX,quality1)
              value += `blur(${c.blurX * quality1}px) `
            }
            break;
          case 'DropShadowFilter':
            let quality2 = 1
            if (c.qualityType === 'low') {
              quality2 = 0.2
            } else if (c.qualityType === 'medium') {
              quality2 = 0.6
            } else {
              quality2 = 1
            }
            if (boxShadow) {
              boxShadow += ','
            }
            if (c.innerShadow) {
              boxShadow += 'inset '
            }
            // console.log(Math.cos(0))
            // let angle = 180/Math.PI*c.angle
            // console.log(angle)
            // value+= `drop-shadow(${c.blurX}px ${c.blurY}px ${c.blurX*quality2}px ${c.shadowColor})`
            let strength = ''
            if (!isText) {
              strength = `${Math.round(c.strength / 100)}px`
            }
            let color = DataUtils.hexToRgba(c.shadowColor, 0.3)
            boxShadow += `${c.distance * (Math.round(Math.cos(c.angle)))}px ${c.distance * (Math.round(Math.sin(c.angle)))}px ${c.blurX * quality2}px ${strength} ${color} `
            // if(cssNode.node==='#_id1'){
            //   console.log(frame)
            // }
            break;
          case 'GlowFilter':
            let quality = 1
            if (c.qualityType === 'low') {
              quality = 0.2
            } else if (c.qualityType === 'medium') {
              quality = 0.6
            } else {
              quality = 1
            }
            if (boxShadow) {
              boxShadow += ','
            }
            if (c.innerShadow) {
              boxShadow += 'inset '
            }
            boxShadow += ` 0 0 ${c.blurX * quality}px ${Math.round(c.strength / 100)}px ${c.shadowColor} `

            /*boxShadow+=`0 0 ${c.blurY*quality*100}px ${c.strength/100*c.blurY}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurX}px ${c.strength/100}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurX}px ${c.strength/100}px ${c.shadowColor},`
            boxShadow+=`0 0 ${c.blurY}px ${c.strength/100}px ${c.shadowColor} `*/

            break
        }
      }
    }else if(c.type ==='BlendMode'){
      blendMode = getBlendMode(cssNode,c)
      // console.log(blendMode)
    }
  })
  /*console.log(value,boxShadow,cssNode.node)
  if(cssNode.node==='#_id1'){
    console.log(frame)
  }*/
  // let cn = cssNode
  /*
  if((value||boxShadow)&&instance.libraryItem.type === 'movieclip'){
    // console.log(node.attr.id,3333)
    cn = {
      node: cn.node + ' .bound',
      attr: {
      }
    }
    global.cssMap.push(cn)
  }*/
  // getChildCssNode(node,cssNode)
  // console.log(instance.libraryItem.behaviour.type === 'Input')
  // let cn = {
  //   node: cssNode.node + '.f'+key
  // }
  // if(value) {
  //   global.cssMap.push(cn)
  // }
  let cn = cssNode
  setPrifix(cn, 'filter', value)
  if(blendMode){
    let cn = {
      node: cssNode.node /*+ '.f'+(frame.frame+1)*/ + ' *',
      attr:{

      }
    }
      global.cssMap.push(cn)
    setPrifix(cn,'mix-blend-mode',blendMode)
  }
  if (isText && instance.libraryItem.behaviour.type !== 'Input') {
    setPrifix(cn, 'text-shadow', boxShadow)
  } else {
    setPrifix(cn, 'box-shadow', boxShadow)
  }


}
const parseCss = (clz, instance, node, assetId, libraryFrames, parentNode) => {
  // console.log(libraryFrames)
  // if (instance.type === 'bitmap') {
  //   console.log(instance.frames)
  // }
  let id = node.attr['id']
  let startFrame = instance.startFrame + 1
  let endFrame = instance.endFrame == -1 ? -1 : instance.endFrame + 1
  node.attr['range'] = startFrame + ',' + endFrame
  // node.attr['startFrame'] = instance.startFrame + 1
  // node.attr['endFrame'] = instance.endFrame ==-1? -1:instance.endFrame +1
  let parentId = parentNode.attr.id?'#'+parentNode.attr.id:''
  let frames = []
  let lastFrame = ''
  let lastCssNode = ''
  let lastFrameIndex = -1
  /*if(id==='_id4'){
    console.log(instance.frames)
  }*/
  // console.log(instance.frames)
  // console.log(instance.libraryItem.totalFrames)
  for (let key in instance.frames) {
    let frame = instance.frames[key]
    // console.log(parseInt(key)+1,endFrame)
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
    let isEmpty = isEmptyFrame(frame)

    // lastFrame = frames
    // console.log(parentNode)

    let cssId = `${parentId}${indexFrame} #${id}`
    // let cssId = `#${id}${indexFrame}`
    // if(clz.type !== 'movieclip'){
    //
    // }
    let type = instance.libraryItem.type
    if (type=== 'shape') {
      cssId += ''
    }
    // console.log(cssId)
    // if(id==='_id1'){
    //   // console.log(isEmpty)
    // }
    let cssNode = createCssNode(cssId)
    // if(instance.t)
    cssNode.attr.visibility = 'inherit'
    // console.log(key,instance.endFrame)

    if(/*!isEmpty &&*/(parseInt(key)<instance.endFrame||instance.endFrame ===-1)){
      // if(id==='_id4'){
      //   console.log(key,isEmpty)
      // }
      global.cssMap.push(cssNode)
      // console.log(cssId,instance.endFrame)
    }else{
      // if(id==='_id6'){
      //   console.log(instance.endFrame,key)
      // }

    }

    cssNode.classType = instance.libraryItem.type

    parentNode.cssMap[cssId] = cssNode
    //如果上一帧，不是当前帧-1，就要将上一帧到当前帧中间的帧数补充，然后设置为可见
    //例如  上一帧是1  ，当前帧是3，就要补充第二针的值
    if(lastCssNode&&lastFrameIndex!==parseInt(key)){
      let cid = ''
      for (let i = lastFrameIndex+1; i < parseInt(key)+1; i++) {
        // console.log(parentId)
        cid += `${parentId}.f${i} #${id},`
        // frames.push(i)
      }
      if(cid){
        cid=cid.substring(0,cid.length-1).replace(/#/g,'.')
        lastCssNode.node = lastCssNode.node+','+cid
      }
    }
    /*if (isEmpty) {

          // frames.push((parseInt(key) + 1))
        } else {
          frames.push(parseInt(key) + 1)
        }*/
    let currentFrame = parseInt(key) + 1
    if(currentFrame<endFrame||endFrame===-1){
      frames.push(currentFrame)
    }
    lastFrameIndex = currentFrame
    lastCssNode = cssNode
    // console.log(node)
    // node.cssNode.push(cssNode)
    getFilters(clz, key, node, cssNode, instance)
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
    // if(instance.libraryItem.type === 'text'){
    // console.log(instance.initFrame)
    // console.log(frame)
    // console.log(instance)
    // }

    getLastFrameAttr(frame, lastFrame)
    // if(cssId === '#_id2'){
    //   console.log(frame)
    // }
    parseFrame(clz, frame, cssNode, instance, node, key)
    lastFrame = frame
    // console.log(cssNode)
  }

  let totalFrames = parentNode.attr.totalFrames

  if(totalFrames&&(lastFrameIndex<=endFrame||endFrame === -1)){
    let cid = ''
    for (let i = lastFrameIndex+1; i < totalFrames+1; i++) {
      cid += `${parentId}.f${i} #${id},`
      // console.log(parentId)
    }
    if(cid){
      cid=cid.substring(0,cid.length-1).replace(/#/g,'.')
      lastCssNode.node = lastCssNode.node+','+cid
    }
    if(endFrame!==-1){
      cid = ''
      // if(id==='_id4'){
      //   console.log(totalFrames,endFrame)
      // }

      for(let i = endFrame;i<totalFrames+1;i++){
        cid += `${parentId}.f${i} #${id},`
      }
      if(cid){
        cid=cid.substring(0,cid.length-1).replace(/#/g,'.')
        global.cssMap.push({
          node:cid,
          attr:{
            visibility: 'hidden'
          }

        })
      }
    }
    // if(id==='_id6'){
    //   console.log(totalFrames,lastFrameIndex,endFrame,lastCssNode)
    //   console.log(lastCssNode)
    // }
  }
  // console.log(node.attr.totalFrames,33333,lastFrameIndex,endFrame)
  // if(la)
  // console.log(frames)
  if (frames.length) {
    // console.log(instance)/**/
    // console.log(frames)
    if (frames.length === 1 && frames[0] === 1) {
      node.attr['frames'] = [1]
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
const getLabels = (node, clz) => {
  if (clz.frames) {
    // let labelsAndScripts = {}
    let ls = ''
    let ss = ''
    clz.frames.forEach(frame => {
      // console.log(frame)
      let index = frame.frame + 1
      // index=1
      if (frame.labels) {
        ls += index + ':'
        frame.labels.forEach(label => {
          ls += label.trim() + ','
        })
        ls = ls.substring(0, ls.length - 1) + '|'
      } else if (frame.scripts) {
        // let index = frame.frame + 1
        ss += index + ':'
        frame.scripts.forEach(script => {
          ss += encodeURIComponent(script.trim()) + ','
        })
        ss = ss.substring(0, ss.length - 1) + '|'
      }
      // getFilters(frame,node,clz)
    })
    if (ls) {
      ls = ls.substring(0, ls.length - 1)
      node.attr.labels = ls
    }
    if (ss) {
      ss = ss.substring(0, ss.length - 1)
      node.attr.scripts = ss
    }
    return
  }
}
const isTheSame = (clz, assetId) => {
  return clz.libraryItem.assetId === assetId
}
const createMaskNode = (maskInstance,mask,node,nodeId) => {
  //<clipPath id="clipPathDefinition" style="clip-rule:evenodd"
  // clipPathUnits="userSpaceOnUse">
  // <path d="m0,200 l100,-100 100,100 -100,100z"/>
  // </clipPath>
  // console.log(node.child[0].child)
  // global.alert(JSON.stringify(node.child[0].child[0].tag))
  if(node.child[0].child[0].tag!=='g'&&global.alert)global.alert('只支持矢量遮罩')
  let id = createId('mask')
  let clipPathNode = {
    node: 'element',
    tag: 'clipPath',
    child: [],
    attr: {
      id,
      class: 'mask'
    }
  }
  // global.maskDefs.child.push(clipPathNode)

  clipPathNode.child = node.child[0].child[0].child
  clipPathNode.child.forEach(c=>{
    for(let k in c.attr){
      if(k === 'd')continue
      delete c.attr[k]
    }
    c.isMaskPath = true
  })
  //JSON.parse(JSON.stringify(node.child[0].child))
  mask.libraryItem.frames[0].commands.forEach(c=>{
    // console.log(c)
    if(c.type === 'Place'){
      clipPathNode.child.forEach(p=>{
        let id = createId('path')
        p.attr.id = id
        let cssNode = {
          node: '#'+id,
          attr:{

          }
        }
        // console.log(id)
        global.cssMap.push(cssNode)
        // console.log()
        let matrix = new Matrix(c.transform)
        let value = maskTransform({
          r: matrix.rotation,
          kx: matrix.skewX,
          ky: matrix.skewY,
          sx: matrix.scaleX,
          sy: matrix.scaleY,
          x: matrix.x,
          y: matrix.y,
          v: null,
          a: null
        },cssNode)
      })
    }
  })


  // clipPathNode.attr.frames = maskInstance.libraryItem.totalFrames
  // clipPathNode.attr.range = [mask.startFrame+1,mask.endFrame===-1?-1:mask.endFrame+1].toString()
  // clipPathNode.attr.class =
  let lastFrame = ''
  // console.log(mask)
  // clipPathNode.node
  // console.log(mask.initFrame)
  let frames = []
  // console.log(mask.frames)
  for (let key in mask.frames) {
    let frame = mask.frames[key]
    if(isEmptyFrame(frame))continue
    frames.push(parseInt(key) + 1)
    // console.log(frame)
    getLastFrameAttr(frame,lastFrame)

    lastFrame = frame
    let cnId = id+'_'+ (parseInt(key)+1)
    let cssNode = {
      node: '#'+cnId,//+'.f'+(parseInt(key)+1),//+ " path",
      attr:{
        // class: '#'+id +'.f'+(parseInt(key)+1)
        // class: 'mask'
      }
    }
    global.cssMap.push(cssNode)
    // console.log(cnId)
    let cpn = JSON.parse(JSON.stringify(clipPathNode))
    // for(let k in cpn.attr){
    //   if(k === 'd')continue
    //   delete cpn.attr[k]
    // }
    // delete cpn.attr.fill
    // delete cpn.attr.class
    // delete cpn.attr.stroke
    // delete cpn.attr['stroke-width']
    cpn.attr.id = cnId
    maskTransform(frame,cssNode,cpn)
    global.maskDefs.child.push(cpn)
    // console.log(node,4444)

    let mn = {
      node: '.'+nodeId + '.' + cnId +' *:not([class^="movieclip"])',
      attr:{
        // 'clip-path': `url(#${cnId})`
      }
    }
    setPrifix(mn,'clip-path',`url(#${cnId})`)
    global.cssMap.push(mn)
    // maskTransform(frame,cssNode,clipPathNode)
  }

  global.maskDefs.attr[id] = parseRange(frames)//[mask.startFrame+1,mask.endFrame===-1?-1:mask.endFrame+1].toString()

  // parseFrame(mask.libraryItem, frame, cssNode, instance, node, key)
  return id
}
const parseRange = (frames)=>{
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
  return fstr
}
const maskTransform = (frame, cssNode, node)=>{
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
  // console.log(Math.floor(frame.x))
    let x = Math.round(frame.x/*-parentX*/)
    let y = Math.round(frame.y/*-parentY*/)

    // if (x) cssNode.attr.left = x
    // if (y) cssNode.attr.top = y
    // let isShape = instance.libraryItem.type === 'shape'
    // if(!isShape){
    //   if (x) cssNode.attr.left = x
    //   if (y) cssNode.attr.top = y
    // }else{
    if (x || y) {
      let v = !x ? 0 : `${x}px`
      v = y ? `${v},${y}px` : `${v},0`
      value += `translate3d(${v},0)`
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
    // cssNode.attr.transform = value
  // console.log(value,444)
    setPrifix(cssNode, 'transform', value)

  // console.log(clipPathNode)
  // if(node){
  //   node.child.forEach(c=>{
  //     let d = []
  //     let count = 0
  //     console.log(c.d)
  //     c.d.forEach(item=>{
  //       if(isNaN(item)){
  //         d.push(item)
  //         count=0
  //       }else{
  //         let p = (count++)===0?x:y
  //         d.push(item-p)
  //       }
  //     })
  //     c.attr.d = d
  //     console.log(c.attr.d)
  //     console.log('============',x,y)
  //   })
  //   // console.log(node.child)
  // }



  // console.log(cssNode,node)
  // console.log(frame.matrix)、
  // if(frame.matrix)
  //   setPrifix(cssNode, 'transform', `matrix(${frame.matrix.toString()})`)
  // setPrifix(cssNode, 'transform', 'translate(50px,40px)')
  // node.attr.transform = 、'translate(50,40)'/* value.repl、ace(/px/g,'').replace(/,/g,' ')*/
  return value
}
const getMaskId = (instance, masks, nodeId,node) => {
  if (!masks) return ''
  if (global.maskMap[nodeId]) {
    return global.maskMap[nodeId]
  }
  // console.log(nodeId,5555)
  // console.log(3333,masks.length)
  let maskIds = []
  masks.forEach(item => {
    // if(item.mask.libraryItem.assetId == '7'){
    //   // console.log(item.mask.frames)
    // }
    // console.log(item.instance.libraryItem.assetId,nodeId)
    let maskInstance = item.instance
    // console.log(item.mask.libraryItem.assetId,item.instance.libraryItem.assetId,instance.id,maskInstance.id)
    // console.log(maskInstance)
    // console.log(item.mask.frames)
    if (instance.id === maskInstance.id) {
      // console.log(item.mask.libraryItem.assetId,item.mask.libraryItem.frames[0].commands[0],item.mask.libraryItem.name)
      // console.log(2222,global.idsMap[item.mask.libraryItem.assetId])
      let id = createMaskNode(maskInstance,item.mask,global.idsMap[item.mask.libraryItem.assetId],nodeId)
// console.log(5555,id)
      global.maskMap[nodeId] = id


      if(!node.attr.maskId){
        node.attr.maskId = ''
      }
      let maskId = getMaskId(instance, masks, node.attr['id'],node);
      maskIds.push(maskId)
      // node.attr.maskId += maskId + ' '
      // console.log(maskId)
    }
  })
  if(maskIds.length){
    node.attr.maskId = maskIds.toString();/*node.attr.maskId.substring(0,node.attr.maskId.length-1)*/
    // maskIds.forEach(mid=>{
    //   let cssNode = {
    //     node: '#'+node.attr.id+'.'+mid+ ' *',
    //     attr:{
    //       'clip-path':`url(#${mid})`
    //     }
    //   }
    //   global.cssMap.push(cssNode)
    // })

  }

  return global.maskMap[nodeId]
}
const parseFrames = (node, clz) => {
  // return
  // console.log(clz)
  getLabels(node, clz)
  node.attr.totalFrames = clz.totalFrames
  // console.log(clz.name)
  // console.log(clz.frames)
  let parentNode = node
  let child = node.child
  // console.log(clz.masks)
  let masks = clz.masks

  let maskId = ''
  clz.renderChildren(global.renderer, (children) => {
    children.forEach(instance => {
      // console.log(instance)
      // console.log(instance.frames)
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
      utils.parseClass(global.library._mapById, claz.assetId + '')
      // if(!global.idsMap[claz.assetId + ''])return

      let node = JSON.parse(JSON.stringify(global.idsMap[claz.assetId + '']))


      node.attr['id'] = createId('_id')
      parseCss(clz, instance, node, claz.assetId, claz.frames, parentNode)
      child.push(node)
      maskId = getMaskId(instance, masks, node.attr['id'],node)
      /*if (!maskId) {
        if(!node.attr.maskId){
          node.attr.maskId = ''
        }
        maskId = getMaskId(instance, masks, node.attr['id'])
        node.attr.maskId = maskId
      }*/
    })
    // if (maskId) {
    //   if (node.child.length) {
    //     node.child.forEach(item=>{
    //       if (!item.attr.style) item.attr.style = ''
    //       item.attr.style += `clip-path:url(#${maskId});`
    //     })
    //   }else{
    //     if (!node.attr.style) node.attr.style = ''
    //     node.attr.style += `clip-path:url(#${maskId});`
    //   }
    // }
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
  // getMovieClipBounds(node)
}
const parseFrame = (clz, frame, cssNode, instance, node, key) => {
  let bounds = frame.bounds
  if (bounds) {
    // console.log(bounds)
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
        cssNode.attr.left = -bounds.width / 2
      } else if (textAlign === 'right') {
        cssNode.attr.left = -bounds.width
      }
    }
  }

  // console.log(frame, cssNode.attr, 4444)

  setTransform(frame, cssNode, instance, node, clz, key)
}
const setTransform = (frame, cssNode, instance, node, clz, key) => {
  // let parentX = 0
  // let parentY = 0
  // let parentFrame = clz.frames[+key]
  // for (let i = 0; i < parentFrame.commands.length; i++) {
  //   let command = parentFrame.commands[i]
  //   // console.log(command.type === 'Place')
  //   if(command.type === 'Place' && command.assetId === instance.libraryItem.assetId){
  //     // console.log(command.transform)
  //     // parentX = command.transform.tx
  //     // parentY = command.transform.ty
  //
  //   }
  // }
  // console.log(parentX,parentY,66666)
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
  let x = Math.round(frame.x/*-parentX*/)
  let y = Math.round(frame.y/*-parentY*/)

  // if (x) cssNode.attr.left = x
  // if (y) cssNode.attr.top = y
  // let isShape = instance.libraryItem.type === 'shape'
  // if(!isShape){
  //   if (x) cssNode.attr.left = x
  //   if (y) cssNode.attr.top = y
  // }else{
  if (x || y) {
    let v = !x ? 0 : `${x}px`
    v = y ? `${v},${y}px` : `${v},0`
    value += `translate3d(${v},0)`
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