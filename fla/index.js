(function(win) {
  var parseType = function(classList) {
    return classList[0].replace(/\d*/g, '')
  }
  var Common = function(dom) {
    if (!dom) return
    if (typeof dom === "string") {
      dom = document.querySelector(dom)
      if (!dom) {
        throw new Error('不存在此元素' + dom)
      }
    }
    this.dom = dom
    this.id = this.dom.getAttribute('id')
    this.name = this.dom.getAttribute('name')
    this.classList = this.dom.classList
    this.type = parseType((this.classList))
    this.currentFrame = 1
  }
  var p = Common.prototype
  //这个currentFrame是要用父亲的，孩子的状态是父亲来控制的
  p.getCurrentFrameClass = function(currentFrame) {
    return 'f' + currentFrame
  }
  p._getFrames = function() {
    this.frames = this.dom.getAttribute('frames')
    if (!this.frames) {
      this.frames = [1]
    } else {
      this.frames = JSON.parse('[' + this.frames + ']')
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
  // p.render = function () {
  //   // Should be overwrite
  // }
  //如果是stage，本身是没有变化的，只变化孩子
  //如果是其他movieclip，所有的变化都是来自于父亲的totalFrames,currentFrame
  p._renderSelf = function(totalFrames, currentFrame) {
    if (totalFrames !== undefined) {
      var frame = this._isKeyFrame(currentFrame)
      // console.log(frame,currentFrame)
      // console.log(currentFrame === frame)
      if (frame) {
        this.lastClass && this.classList.remove(this.lastClass)
        this.lastClass = this.getCurrentFrameClass(currentFrame)
        this.classList.remove('hidden')
        this.classList.add(this.lastClass)
      } else /*if(frame <0)*/ {
        //空白帧
        this.lastClass && this.classList.remove(this.lastClass)
        this.classList.add('hidden')
      }
    }
  }
  p._isKeyFrame = function(currentFrame) {
    for (var i = 0; i < this.frames.length; i++) {
      if (Math.abs(this.frames[i]) === currentFrame) {
        return this.frames[i]
      }
    }
    return false
  }
  // totalFrames,currentFrame 分别来自于父亲的属性，stage是来自于本身

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
  }
  p.render = function(totalFrames, currentFrame) {
    // console.log(totalFrames)
    this._renderSelf(totalFrames, currentFrame)
  }
  win.DisplayElement = DisplayElement
})(window);
(function(win) {
  var MovieClip = function(dom) {
    Common.call(this, dom)
    this.init()
  }
  MovieClip.prototype = new Common()
  var p = MovieClip.prototype
  p.init = function() {
    this._getFrames()
    this._getTotalFrames()
    this._getChildren()
  }
  p._getChildren = function() {
    this.children = []
    var childNodes = this.dom.childNodes
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i]
      if (!child.localName) continue
      //movieclip都有totalFrames属性
      // console.log(child.getAttribute('totalFrames')===null)
      if (child.getAttribute('totalFrames')) {
        this.children.push(new MovieClip(child))
      } else {
        this.children.push(new DisplayElement(child))
      }
    }
    // console.log(nodeList,this.dom,66666)
  }
  // MovieClip中，只有stage没有totalFrames
  p.render = function(totalFrames, currentFrame) {
    // console.log(totalFrames,currentFrame)
    // debugger
    this._renderSelf(totalFrames, currentFrame)
    this._renderChild()
    if (!totalFrames) {
      totalFrames = this.totalFrames
    }
    // if(this.type === 'movieclip')
    //   console.log(this.currentFrame,this.type)
    //问题的关键在于此，
    this.currentFrame++
    if (this.currentFrame > this.totalFrames) {
      this.currentFrame = 1
    }
  }

  p._renderChild = function() {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      // console.log(this.totalFrames,this.currentFrame,child.type)
      // this._renderChild(child,this.totalFrames)
      // if(this.type == 'movieclip'){
      //   console.log('movieclip',this.totalFrames,this.currentFrame)
      // }
      child.render(this.totalFrames, this.currentFrame)
    }
  }
  win.MovieClip = MovieClip
})(window);
(function(win) {
  var Stage = function(stageId) {
    this.stage = new MovieClip(stageId)
    console.log(this.stage.children)
  }
  var p = Stage.prototype
  p.stop = function() {
    clearInterval(this.renderId)
  }
  p.render = function() {
    this.renderId = setInterval(function() {
      this.stage.render()
    }.bind(this), 1000 / 24)
    this.stage.render()
    return this
  }
  win.Stage = Stage
})(window);
// new MovieClip('#pixi')
// new DisplayElement('#id1')
new Stage('#pixi').render()