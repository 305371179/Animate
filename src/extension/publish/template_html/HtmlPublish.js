const {html2json, json2html} = require('html2json')
const utils = require('./utils')
//定义全局的template
global.tamplate = {html:{},js:{},css:{}}
//用来保存css
global.cssMap = []
//用来保存类
global.idsMap = {}
//用来生成唯一的id
global.uuidMap = {}
global.renderer =''
// 舞台的timeline
global.stage;
// 全局的library
global.library;
global.meta;
module.exports = {
  createId(name){
    let count = global.uuidMap[name]
    if(count === undefined){
      global.uuidMap[name] = 1
      return name
    }
    global.uuidMap[name]++
    return name+'_' + count
  },
  //在Render里面调用
  getStageTimeline(timelines,renderer){
    global.renderer = renderer
    global.stage = timelines[timelines.length-1]
    global.assets = renderer.assets
    global.library = global.stage.library
    global.meta = global.library.meta

    // console.log(timelines)
    // mergeTimeline(timelines)

    for(let id in global.library._mapById){
      // console.log(id)
      utils.parseClass(global.library._mapById,id,assets)
    }
    // 获取所有的html标签类
    // console.log(stage.library._mapById)
    // console.log(stage)
  },
  getTimeline(timeline){
    // console.log(timeline)
  },
}
// 当
const isEqual = (tl,tl1)=>{

}
const mergeTimeline = (timelines)=>{
  let tMap = {}
  for(let i=0;i<timelines.length-1;i++){
    let tl = timelines[i]
    if(!tMap[tl.assetId]){
      continue
    }
    let find = false
    for(let key in tMap){
      let tl1 = tMap[key]
      if(isEqual(tl,tl1)){
        find= true
        break;
      }
    }
    if(find)continue
  }
  console.log(tMap)
}