const {html2json, json2html} = require('html2json')
const {html, css, js_beautify} = require('js-beautify');

module.exports = {
  parseClass(idMap, id) {
    let clz = idMap[id]
    // console.log(clz.type)
    let node = createNode(clz, id)
    global.idsMap[id] = node
    switch (clz.type) {
      case 'bitmap':
        node.tag = 'img'
        node.attr = {
          ...node.attr,
          // id: createId('id'),
          // width: clz.width,
          // height: clz.height,
          src: clz.src
        }
        break
      case 'movieclip':
        parseFrames(node.child, clz)
        break
      case 'stage':
        parseFrames(node.child, clz)
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
  parseId(stage)
  let content = html(json2html(stage), {
    inline: [],
    indent_size: 2
  })
  console.log(content)

}
parseId = node=>{
  node.attr.id = createId('id')
  if(node.child.length){
    node.child.forEach(n=>{
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
      'data-name': clz.name
      // id: scope.name,
    },
    child: []
  }
}
const parseFrames = (child, clz) => {
  clz.renderChildren(global.renderer, (children) => {
    children.forEach(instance => {
      let claz = instance.libraryItem
      // let node = {}
      // Object.assign(node,global.idsMap[claz.assetId + ''])
      let node = JSON.parse(JSON.stringify(global.idsMap[claz.assetId + '']))
      // let node = global.idsMap[claz.assetId + '']
      // console.log(instance)
      // node.attr['id'] = createId('id')
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
const createId=(name)=>{
  let count = global.uuidMap[name]
  if(count === undefined){
    global.uuidMap[name] = 1
    return name
  }
  // console.log(count, name+'_' + count)
  global.uuidMap[name]++
  return name+'' + count
}