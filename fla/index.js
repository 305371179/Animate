(function(win) {
  var parseType = function(classList) {
    // console.log(classList,3333)
    if (!classList || !classList.length) return
    return classList[0].replace(/\d*/g, '')
  }
  var Common = function(dom) {
    if (!dom) return
    if (typeof dom === "string") {
      // console.log(dom,5555)
      dom = document.querySelector(dom)
      if (!dom) {
        throw new Error('不存在此元素' + dom)
      }
    }
    this.dom = dom
    this.id = this.dom.getAttribute('id')
    this.name = this.dom.getAttribute('name')
    this.classList = this.dom.classList
    // console.log(dom,this.dom)
    this.type = parseType((this.classList))
    this.currentFrame = 1
    this._getStartAndEndFrame()
  }
  var p = Common.prototype
  p.getCurrentFrameClass = function(currentFrame) {
    return 'f' + currentFrame
  }
  p._getStartAndEndFrame = function() {
    var range = this.dom.getAttribute('range')
    if (range) {
      range = range.split(',')
      this.startFrame = parseInt(range[0])
      this.endFrame = parseInt(range[1])
    }
    // this.startFrame = parseInt(this.dom.getAttribute('startFrame'))
    // // if(!this.startFrame){
    // //   throw new Error(this.dom.toString()+'属性startFrame不存在')
    // // }
    // this.endFrame = parseInt(this.dom.getAttribute('endFrame'))
    // if(!this.endFrame){
    //   throw new Error(this.dom.toString()+'属性endFrame不存在')
    // }
  }
  p._getFrames = function() {
    this.frames = this.dom.getAttribute('frames')
    if (!this.frames) {
      this.frames = [1]
    } else {
      var fs = this.frames.split(',')
      for (var i = 0; i < fs.length; i++) {
        if (fs[i].indexOf('~') !== -1) {
          var r = fs[i].split('~')
          fs[i] = [parseInt(r[0]), parseInt(r[1])]
        } else {
          fs[i] = parseInt(fs[i])
        }
      }
      // fs=[1,2]
      // console.log(JSON.stringify(fs),this.dom)
      // console.log()
      // console.log(fs)
      this.frames = fs //JSON.parse('[' + fs + ']')
    }
  }
  p._getTotalFrames = function() {
    this.totalFrames = this.dom.getAttribute('totalFrames')
    if (!this.totalFrames) {
      throw new Error(this.dom.toString() + '属性totalFrames不存在')
    } else {
      this.totalFrames = parseInt(this.totalFrames)
    }
  }
  p.render = function() {
    // Should be overwrite
  }
  p._isKeyFrame = function(currentFrame) {
    // console.log(this.frames)
    for (var i = 0; i < this.frames.length; i++) {
      let frame = this.frames[i]
      // console.log(typeof frame)
      if (frame.length) {
        if (currentFrame >= frame[0] && currentFrame <= frame[1]) {
          return frame
        }
      }
      if (frame === currentFrame) {
        return frame
      }
    }
    return false
  }
  p._changFrame = function(currentFrame) {
    var currentClass = this.getCurrentFrameClass(currentFrame)
    if (this.lastClass && this.lastClass === currentClass) {
      // console.log(this.lastClass)
      // this.classList.remove('hidden')
      return
    }
    this.lastClass && this.classList.remove(this.lastClass)
    this.lastClass = currentClass
    // this.classList.remove('hidden')
    if (this.frames.length === 1 && this.frames[0] === 1) {
      // console.log(44444)
    } else {
      // if(this.id === 'id2'){
      //   console.log(currentFrame)
      // }

      // for(var i=0;i<this.classList.length;i++){
      //   // console.log(this.classList[i],this.lastClass)
      //   if(this.classList[i]===currentClass){
      //     return
      //   }
      // }
      // this.lastClass && this.classList.remove(this.lastClass)
      // this.lastClass = currentClass
      // this.classList.remove('hidden')
      this.classList.add(this.lastClass)
      // console.log(this.classList)
    }
  }
  /*
    p._changFrame = function (currentFrame) {
      this.lastClass && this.classList.remove(this.lastClass)
      this.lastClass = this.getCurrentFrameClass(currentFrame)
      this.classList.remove('hidden')
      if (this.frames.length === 1 && this.frames[0] === 1) {

      } else {
        // if(this.id === 'id2'){
        //   console.log(currentFrame)
        // }
        // for(var i=0;i<this.classList.length;i++){
        //   // console.log(this.classList[i],this.lastClass)
        //   if(this.classList[i]===this.lastClass){
        //     return
        //   }
        // }
        this.classList.add(this.lastClass)
        // console.log(this.classList)
      }
    }
  */
  p._deleteFrame = function() {
    // console.log(5555,this.type)
    if (this.lastClass === 'hidden') return
    this.lastClass && this.classList.remove(this.lastClass)
    this.classList.add('hidden')
    this.lastClass = 'hidden'
  }
  p._renderSelf = function( /*totalFrames,*/ currentFrame) {
    // if(this.id == 'id2')
    // console.log(currentFrame,'||||||||')
    // if(this.id === 'id2'){
    //   console.log(currentFrame,this.startFrame,this.endFrame,currentFrame<this.startFrame||(currentFrame >= this.endFrame&&this.endFrame!==-1))
    // }
    if (currentFrame < this.startFrame || currentFrame >= this.endFrame && this.endFrame !== -1) {
      // console.log(this.type,this.name)
      this._deleteFrame()
      return
    }
    var frame = this._isKeyFrame(currentFrame)
    // if(currentFrame)
    // console.log(frame,currentFrame)
    if (frame) {
      // if(this.id === 'id2'){
      //   console.log(frame,currentFrame)
      // }
      this._changFrame(currentFrame)
    } else if (frame < 0 && this.endFrame !== -1) {
      // console.log(this.type,this.name)
      //空白帧
      this._deleteFrame()
    }
  }
  win.Common = Common
})(window);
(function(win) {
  var DisplayElement = function(dom) {
    Common.call(this, dom)
    this.init()
  }
  DisplayElement.prototype = new Common()
  var p = DisplayElement.prototype
  p.init = function() {
    this._getFrames()
    this._setSvgSize()
  }
  p._setSvgSize = function() {
    if (this.type === 'shape') {
      //设置svg大小，刚好包裹矢量元素
      let g = this.dom.querySelector('g')
      let box = g.getBBox()
      let x = Math.floor(box.x)
      let y = Math.floor(box.y)
      let width = Math.ceil(box.width)
      let height = Math.ceil(box.height)
      if (x || y) {
        g.setAttribute('transform', 'translate(' + (-x) + ' ' + (-y) + ')')
        if (x) this.dom.style.left = x + 'px'
        if (y) this.dom.style.top = y + 'px'
      }
      this.dom.style.width = width + 'px'
      this.dom.style.height = height + 'px'

      // this.dom.style.width=Math.ceil(box.x+box.width)+'px'
      // this.dom.style.height=Math.ceil(box.y+box.height)+'px'
    }
  }
  p.render = function( /*totalFrames,*/ currentFrame) {
    this._renderSelf( /*totalFrames,*/ currentFrame)
    // console.log(totalFrames)
    // if(currentFrame<this.startFrame){
    //
    //   return
    // }
    // var frame = this._isKeyFrame(currentFrame)
    // // this._renderSelf(totalFrames)
    // // console.log(totalFrames,currentFrame,this.frames)
    // if(frame){
    //   // console.log(currentFrame)
    //   this._changFrame()
    // }else if(frame <0) {
    //   //空白帧
    //   this._deleteFrame()
    // }
    // if(){
    //
    // }else{
    //
    // }
  }

  win.DisplayElement = DisplayElement
})(window);
(function(win) {
  var MovieClip = function(dom) {
    if (!dom) return
    Common.call(this, dom)
    this.init()
  }
  MovieClip.prototype = new Common()
  var p = MovieClip.prototype
  p.init = function() {
    this._isStop = false
    this._direction = 1
    this._getFrames()
    this._getTotalFrames()
    this._getLabels()
    this._getScripts()
    this._getChildren()
  }
  p._getLabels = function() {
    this._labels = {}
    var labelsStr = this.dom.getAttribute('labels')
    if (labelsStr) {
      var labels = labelsStr.split('|')
      for (var i = 0; i < labels.length; i++) {
        var label = labels[i]
        var strs = label.split(':')
        var frame = parseInt(strs[0])
        var ls = strs[1].split(',')
        for (var j = 0; j < ls.length; j++) {
          var l = ls[j]
          this._labels[l] = frame
        }
      }
    }
    // console.log(this._labels)
  }
  p._getScripts = function() {
    var scriptsStr = this.dom.getAttribute('scripts')
    if (scriptsStr) {
      this._scripts = {}
      var scripts = scriptsStr.split('|')
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i]
        var strs = script.split(':')
        var frame = parseInt(strs[0])
        var ss = strs[1].split(',')
        this._scripts[frame] = []
        for (var j = 0; j < ss.length; j++) {
          var s = ss[j]
          this._scripts[frame].push(decodeURIComponent(s))
        }
      }
      // console.log(this._scripts)
    }
    // console.log(this._labels)
  }
  p._runScripts = function() {
    if (!this._scripts) return
    var scripts = this._scripts[this.currentFrame]
    if (scripts) {
      // console.log(currentFrame,this.currentFrame)
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i]

        // console.log(script)
        // script = 'this.stop()'
        // var a = function(script){
        eval(script)
        // console.log(3333)
        // }.bind(this)
        // a(script)

      }
    }
  }
  //只是本身不变，但是孩子还是会变化的
  p.stop = function() {
    // console.log(this.id)
    // this.parent._isStop = true
    // console.log(333)
    // this.currentFrame =
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (!child.gotoAndStop) {
        // child.render(this.currentFrame)
        continue
      }
      child.gotoAndStop(this.currentFrame)
    }
    // this.gotoAndStop()

  }
  p.gotoAndStop = function(frame) {
    // if(this.type !=='stage'){
    //   this.parent._isStop = true
    // }else{

    // }
    this.gotoAndPlay(frame)
    this._isStop = true
    // this._runScripts()
  }
  p.setPlayDirection = function(direction) {
    if (!direction) {
      return
    }
    if (direction < 0) {
      this._direction = -1
    } else {
      this._direction = 1
    }
  }
  // p.gotoAndPlay = function (frame, isReverse) {
  //   // if(this.type !=='stage'){
  //   //   // console.log(this.parent.type)
  //   //   this.parent._gotoAndPlay(frame, isReverse)
  //   // }else{
  //   // }
  //   this._gotoAndPlay(frame, isReverse)
  //
  //   // if(typeof frame === 'string'){
  //   //   frame = this._labels[frame]
  //   //   // console.log(frame,666666)
  //   // }
  //   // this.setPlayDirection(isReverse ? -1 : 1)
  //   // if (frame === undefined) frame = this.currentFrame
  //   // if (frame > this.totalFrames) {
  //   //   this.currentFrame = frame
  //   // } else if (frame < 1) {
  //   //   this.currentFrame = 1
  //   // } else {
  //   //   this.currentFrame = frame
  //   // }
  //   // // console.log(this.currentFrame)
  //   // this.render(this.currentFrame)
  //   // console.log(this.currentFrame)
  //   // this._renderSelf(this.currentFrame)
  // }
  p.gotoAndPlay = function(frame, isReverse) {
    if (typeof frame === 'string') {
      frame = this._labels[frame]
      // console.log(frame,666666)
    }
    this.setPlayDirection(isReverse ? -1 : 1)
    if (frame === undefined) frame = this.currentFrame
    if (frame > this.totalFrames) {
      this.currentFrame = frame
    } else if (frame < 1) {
      this.currentFrame = 1
    } else {
      this.currentFrame = frame
    }
    // console.log(this.currentFrame)
    // console.log(this.currentFrame)
    // this.render(this.currentFrame)
    // console.log(this.currentFrame)
    this._renderSelf(this.currentFrame)
  }
  p._getChildren = function() {
    this.children = []
    var childNodes = this.dom.childNodes
    // console.log(this.id,this.dom)
    // var bounds = ''
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i]
      // console.log(child)
      if (child.nodeName === '#text') continue
      //movieclip都有totalFrames属性
      // console.log(child.getAttribute('totalFrames')===null)
      var c = ''
      // console.log(child)
      if (child.getAttribute('totalFrames')) {
        // console.log(child,66666)
        c = new MovieClip(child)
        // console.log(c.id,55555)
      } else {
        // console.log(child,777777)
        c = new DisplayElement(child)
        // console.log(c.id,88888)
      }
      c.parent = this
      // console.log(c.id,55666)
      this[c.id] = c
      // console.log(this.id,c.id,666666)
      this.children.push(c)
      /* var rect = c.dom.getBoundingClientRect()
       console.log(rect,bounds)
       if(!bounds){
         bounds = []
         bounds[0] = rect.x
         bounds[1] = rect.y
         bounds[2] = rect.x+rect.width
         bounds[3] = rect.y+rect.height
       }else{
         if(bounds[0]>rect.x){
           bounds[0] = rect.x
         }
         if(bounds[1]>rect.y){
           bounds[1] = rect.y
         }

         if(bounds[2]>rect.x+rect.width){
           bounds[2] = rect.x+rect.width
         }
         if(bounds[3]>rect.y+rect.height){
           bounds[3] = rect.y+rect.height
         }
       }*/
    }
    // if(bounds){
    //   this.dom.style.width = Math.ceil(bounds[2] - bounds[0])+'px'
    //   this.dom.style.height = Math.ceil(bounds[3] - bounds[1])+'px'
    //   console.log(4444444,Math.ceil(bounds[3] - bounds[0]),Math.ceil(bounds[4] - bounds[1]))
    // }
    // console.log(this.parent,66666)
    // this.parent[this.id] = this
    // if(this.id === 'id2'){
    //   console.log(this.children[0])
    // }
    // console.log(nodeList,this.dom,66666)
  }
  // MovieClip中，只有stage没有totalFrames
  p.render = function( /*totalFrames,*/ currentFrame) {
    // console.log(totalFrames,currentFrame)
    // debugger
    // console.log(this._isStop)
    // if(this.type!='stage'){
    //   console.log(this.currentFrame)
    // }

    // if(this.name === 'Graphic1'){
    //   console.log(this.currentFrame,this._scripts[this.currentFrame])
    // }
    if (!this._isStop) {

      // if(win.stage)
      // win.stage.stop()
      this._renderSelf( /*totalFrames,*/ currentFrame)
      // return
    }
    // if(this.id === 'id3'){
    //   console.log(this.currentFrame)
    //   this.classList.remove('hidden')
    //   this.classList.add('f10')
    // }
    this._renderChild()
    this._runScripts()
    // if(!totalFrames){
    //   totalFrames = this.totalFrames
    // }
    // if(this.type === 'movieclip')
    //   console.log(this.currentFrame,this.type)
    //问题的关键在于此，

    if (this._isStop /*&&this.type === 'stage'*/ ) {
      // console.log(this.currentFrame)
      // return
    }
    this.currentFrame = this.currentFrame + this._direction
    if (this.currentFrame > this.totalFrames) {
      this.currentFrame = 1
    } else if (this.currentFrame < 1) {
      this.currentFrame = this.totalFrames
    }
  }
  //如果是stage，本身是没有变化的，只变化孩子
  //如果是其他movieclip，所有的变化都是来自于父亲的totalFrames,currentFrame
  /*p._renderSelf = function(totalFrames,currentFrame){
    // console.log(totalFrames,this.currentFrame)
    // debugger
    if(totalFrames!==undefined){
      var frame = this._isKeyFrame(currentFrame)
      // console.log(frame,currentFrame)
      // console.log(currentFrame === frame)
      if(frame){
        this.lastClass&& this.classList.remove(this.lastClass)
        this.lastClass = this.getCurrentFrameClass(currentFrame)
        this.classList.remove('hidden')
        this.classList.add(this.lastClass)
      }else /!*if(frame <0)*!/ {
        //空白帧
        this.lastClass&& this.classList.remove(this.lastClass)
        this.classList.add('hidden')
      }
    }
  }*/
  p._renderChild = function() {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      // console.log(this.totalFrames,this.currentFrame,child.type)
      // this._renderChild(child,this.totalFrames)
      // if(this.type == 'movieclip'){
      //   console.log('movieclip',this.totalFrames,this.currentFrame)
      // }
      child.render( /*this.totalFrames,*/ this.currentFrame)
    }
  }
  win.MovieClip = MovieClip
})(window);
(function(win) {
  var Stage = function(stageId) {
    MovieClip.call(this, stageId)
    // this._stage = new MovieClip(stageId)
    // console.log(this.stage.children)
    this._paused = false
    this.frameRate = 24
    // this.totalFrames = this._stage.totalFrames
  }
  Stage.prototype = new MovieClip()
  var p = Stage.prototype
  // p.gotoAndPlay = function (frame) {
  //   this._stage.gotoAndPlay(frame)
  //   // console.log(this._stage.currentFrame)
  // }
  p.pause = function() {
    this._paused = true
  }
  p.resume = function() {
    this._paused = false
  }
  p.stop = function() {
    clearInterval(this._renderId)
  }
  p.startUp = function() {
    this._renderId = setInterval(function() {
      if (this._paused) return
      this.render(1)
    }.bind(this), 1000 / this.frameRate)
    this.render(1)
    return this
  }
  win.Stage = Stage
})(window);
// new MovieClip('#pixi')
// new DisplayElement('#id1')
var stage = new Stage('#a').startUp()
// stage['_id2'].gotoAndStop(10)
// console.log(stage['_id2'].currentFrame)
// stage['_id2']['_id1'].gotoAndStop(10)
// console.log(stage['id4']['id3'])、
// console.log(stage['id4']['id3'])
// var stage = new Stage('#pixi').render()
// stage.children[0].children[1].gotoAndStop(10, -1)
// console.log(stage.children[0].children[1])
// console.log(stage.children[0].name)
// console.log(stage.children[0].totalFrames)
// stage.gotoAndPlay('kkk',-1)
// stage.gotoAndStop('kkk')
// console.log(stage._stage.currentFrame)

// console.log(stage.frameRate,stage.totalFrames)
// setTimeout(function () {
//   // stage.pause()
//   stage.gotoAndPlay(1)
//   console.log(4444)
// },3000)
// setTimeout(function () {
//   stage.resume()
// },6000)