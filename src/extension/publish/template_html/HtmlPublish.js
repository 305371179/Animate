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
    global.library = global.stage.library
    global.meta = global.library.meta
    for(let id in global.library._mapById){
      // console.log(id)
      utils.parseClass(global.library._mapById,id)
    }
    // 获取所有的html标签类
    // console.log(stage.library._mapById)
    // console.log(stage)
  },
  getTimeline(timeline){
    // console.log(timeline)
  },
}