(function(win) {
  var parseType = function(classList) {
    this.type = classList[0].replace(/\d*/g, '')
    // console.log(this.type,333)
  }
  var Common = function(dom) {
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
    parseType((this.classList))
    console.log(this.type)
    if (this.type === 'movieclip') {
      this._getChildren()
    }
  }
  var p = Common.prototype
  p._getChildren = function() {
    this.children = []
    console.log(this.dom)
    var nodeList = this.dom.childNodes
    console.log(nodeList)
  }
  win.Common = Common
})(window);
(function(win) {
  var Element = function(dom) {
    Common.call(this, dom)
    this.init()
  }
  var p = Element.prototype
  p.init = function() {
    this.frames = this.dom.getAttribute('frames')
    if (!this.frames) {
      this.frames = [1]
    } else {
      this.frames = JSON.parse('[' + this.frames + ']')
    }
    console.log(this.frames)
  }
  win.Element = Element
})(window);
(function(win) {
  var MovieClip = function(dom) {
    Common.call(this, dom)
    this.init()
  }
  var p = MovieClip.prototype
  p.init = function() {
    this.totalFrames = this.dom.getAttribute('totalFrames')
    if (!this.totalFrames) {
      throw new Error(this.dom.toString() + '属性totalFrames不存在')
    } else {
      this.totalFrames = parseInt(this.totalFrames)
    }
  }
  p.render = function() {
    console.log(3333)
  }
  win.MovieClip = MovieClip
})(window);
(function(win) {
  var Stage = function(stageId) {
    this.stage = new MovieClip(stageId)
  }
  var p = Stage.prototype
  p.render = function() {
    this.renderId = setInterval(function() {
      this.stage.render()
    }.bind(this), 1000 / 24)
    return this
  }
  win.Stage = Stage
})(window);
// new MovieClip('#pixi')
// new Element('#id1')
new Stage('#pixi').render()