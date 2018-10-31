const {html2json, json2html} = require('html2json')
const utils = require('./utils')
//定义全局的template
global.tamplate = {html:{},js:{},css:{}}
//用来保存类
global.idsMap = {}
//用来生成唯一的id
global.uuidMap = {}
global.renderer =''
// 舞台的timeline
var stage;
// 全局的library
var library;
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
    stage = timelines[timelines.length-1]
    library = stage.library
    for(let id in library._mapById){
      utils.parseClass(library._mapById,id)
    }
    // 获取所有的html标签类
    // console.log(stage.library._mapById)
    // console.log(stage)
  },
  getTimeline(timeline){
    // console.log(timeline)
  },
}