(function(win) {
  win.isDebug = false
  var parseType = function(classList) {
    if (!classList || !classList.length) return
    return classList[0].replace(/\d*/g, '')
  }
  var Common = function(dom) {
    if (!dom) return
    if (typeof dom === "string") {
      dom = document.querySelector(dom)
      if (!dom) {
        // throw new Error('不存在此元素' + dom)
        return
      }
    }
    this.dom = dom
    this.name = this.getAttribute('name')
    this.classList = this.dom.classList
    this.id = this.classList[1]
    this.type = parseType((this.classList))
    this.currentFrame = 1
    this._getStartAndEndFrame()
    this._setMask()
  }
  var p = Common.prototype
  p.getAttribute = function(attrName) {
    if (!this.dom || !attrName) return
    var attr = this.dom.getAttribute(attrName)
    if (!win.isDebug) {
      this.dom.removeAttribute(attrName)
    }
    return attr
  }
  p._setMask = function() {
    var masks = this.getAttribute('maskid')
    if (!masks) return
    if (masks) {
      masks = masks.split(',')
    }
    this._masksMap = {}
    var defs = document.querySelector('.masks defs')
    for (var i = 0; i < masks.length; i++) {
      var maskId = masks[i]
      var range = defs.getAttribute(maskId)
      var max = []
      var fs = this._parseRange(range, max)
      // console.log(max)
      this._masksMap[maskId] = {
        frames: fs,
        max: max
      }
    }
  }
  p._runMasks = function() {
    if (!this._masksMap) return
    if (!this._masksFrames) {
      this._masksFrames = {}
    }
    var maskId = this._masksFrames[this.currentFrame]
    if (!maskId) {
      for (var k in this._masksMap) {
        maskId = this._isKeyFrame(this._masksMap[k]['frames'], this.currentFrame)
        if (maskId) {
          maskId = k + '_' + this.currentFrame
          this._masksFrames[this.currentFrame] = maskId
          break
        }
      }
    }

    if (maskId) {
      if (this._lastMaskId) {
        this.classList.remove(this._lastMaskId)
      }
      this._lastMaskId = maskId
      this.classList.add(this._lastMaskId)
    } else {
      if (this._lastMaskId) {

        var max = this._masksMap[this._lastMaskId.split('_')[0]].max
        if (max[0] > this.currentFrame || this.currentFrame > max[1]) {
          this.classList.remove(this._lastMaskId)
        }
      }
    }
  }
  p.getCurrentFrameClass = function(currentFrame) {
    return 'f' + currentFrame
  }
  p._getStartAndEndFrame = function() {
    var range = this.getAttribute('range')
    if (range) {
      range = range.split(',')
      this.startFrame = parseInt(range[0])
      this.endFrame = parseInt(range[1])
    }
  }

  p._getTotalFrames = function() {
    this.totalFrames = this.getAttribute('totalFrames')
    if (!this.totalFrames) {
      throw new Error(this.dom.toString() + '属性totalFrames不存在')
    } else {
      this.totalFrames = parseInt(this.totalFrames)
    }
  }
  p.render = function() {
    // Should be overwrite
  }
  p._isKeyFrame = function(frames, currentFrame) {
    for (var i = 0; i < frames.length; i++) {
      let frame = frames[i]
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
      return
    }
    this.lastClass && this.classList.remove(this.lastClass)
    this.lastClass = currentClass
    if (this.frames.length === 1 && this.frames[0] === 1) {} else {
      this.classList.add(this.lastClass)
    }
  }
  p._deleteFrame = function() {
    // console.log(5555,this.type)
    if (this.lastClass === 'hidden') return
    this.lastClass && this.classList.remove(this.lastClass)
    this.classList.add('hidden')
    this.lastClass = 'hidden'
  }
  p._renderSelf = function() {
    this._runMasks()
    if (this.type === 'movieclip' && this.currentFrame !== this.lastFrame) {
      this.classList.remove('f' + this.lastFrame)
      this.classList.add('f' + this.currentFrame)
      this.lastFrame = this.currentFrame
    }
  }
  p._parseRange = function(range, max) {
    var fs = range.split(',')
    if (!max) max = []
    for (var i = 0; i < fs.length; i++) {
      if (fs[i].indexOf('~') !== -1) {
        var r = fs[i].split('~')
        fs[i] = [parseInt(r[0]), parseInt(r[1])]
        if (!max.length) {
          max[0] = fs[i][0]
          max[1] = fs[i][1]
        }
        if (max[0] > fs[i][0]) {
          max[0] = fs[i][0]
        }
        if (max[1] < fs[i][1]) {
          max[1] = fs[i][1]
        }
      } else {
        fs[i] = parseInt(fs[i])
        if (!max.length) {
          max[0] = fs[i]
          max[1] = fs[i]
        }
        if (max[0] > fs[i]) {
          max[0] = fs[i]
        }
        if (max[1] < fs[i]) {
          max[1] = fs[i]
        }
      }
    }
    return fs
  }
  p._getFrames = function() {
    this.frames = this.getAttribute('frames')
    if (!this.frames) {
      this.frames = [1]
    } else {
      this.frames = this._parseRange(this.frames)
    }
  }
  win.Common = Common
})(window);
(function(win) {
  var DisplayElement = function(dom) {
    Common.call(this, dom)
    if (!dom) return
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
      let paths = g.querySelectorAll('path')
      let maxStrokeWidth = 0
      if (paths) {
        for (var i = 0; i < paths.length; i++) {
          let p = paths[i];
          let strokeWidth = p.getAttribute('stroke-width')
          if (strokeWidth && maxStrokeWidth < strokeWidth) {
            maxStrokeWidth = strokeWidth
          }
        }
      }
      let box = g.getBBox()
      let x = Math.floor(box.x)
      let y = Math.floor(box.y)
      let width = Math.ceil(box.width)
      let height = Math.ceil(box.height)
      let half = maxStrokeWidth / 2
      x -= half
      y -= half
      if (x || y) {
        g.setAttribute('transform', 'translate(' + (-x) + ' ' + (-y) + ')')
        if (x) this.dom.style.left = x + 'px'
        if (y) this.dom.style.top = y + 'px'
      }
      this.dom.style.width = width + maxStrokeWidth + 'px'
      this.dom.style.height = height + maxStrokeWidth + 'px'
    }
  }
  p.render = function(currentFrame) {
    this._renderSelf(currentFrame)
  }
  win.DisplayElement = DisplayElement
})(window);
(function(win) {
  var MaskElement = function(dom) {
    DisplayElement.call(this, dom)
    this.init()
  }
  MaskElement.prototype = new DisplayElement()
  var p = MaskElement.prototype
  p.init = function() {}
  p._renderSelf = function(currentFrame) {
    if (this.currentFrame === currentFrame) {
      return
    }
    this.currentFrame = currentFrame
    if (currentFrame < this.startFrame || currentFrame > this.endFrame && this.endFrame !== -1) {
      this._deleteFrame()
      return
    }
    this._changFrame(currentFrame)
    return this.id
  }
  p._changFrame = function(currentFrame) {
    var currentClass = this.getCurrentFrameClass(currentFrame)
    if (this.lastClass && this.lastClass === currentClass) {
      return
    }
    this.lastClass && this.classList.remove(this.lastClass)
    this.lastClass = currentClass
    this.classList.add(this.lastClass)
  }
  win.MaskElement = MaskElement
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
    var labelsStr = this.getAttribute('labels')
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
  }
  p._getScripts = function() {
    var scriptsStr = this.getAttribute('scripts')
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
    }
  }
  p._runScripts = function() {
    if (!this._scripts) return
    var scripts = this._scripts[this.currentFrame]
    if (scripts) {
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i]
        eval(script)
      }
    }
  }
  p.stop = function() {
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]
      if (!child.gotoAndStop) {
        continue
      }
      child.gotoAndStop(this.currentFrame)
    }
  }
  p.gotoAndStop = function(frame) {
    this.gotoAndPlay(frame)
    this._isStop = true
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
  p.gotoAndPlay = function(frame, isReverse) {
    if (typeof frame === 'string') {
      frame = this._labels[frame]
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
    this._renderSelf(this.currentFrame)
  }
  p._getChildren = function() {
    this.children = []
    var childNodes = this.dom.childNodes
    this._movieclips = {}
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i]
      if (!child.getAttribute) continue
      if (child.nodeName === '#text') continue
      var c = ''
      if (child.getAttribute('totalFrames')) {
        c = new MovieClip(child)
        this._movieclips[i] = c
      } else {
        c = new DisplayElement(child)
      }
      c.parent = this
      this[c.id] = c
      this.children.push(c)
    }
  }
  p.render = function(currentFrame) {
    if (!this._isStop) {
      this._renderSelf(currentFrame)
    }
    this._renderChild()
    this._runScripts()
    if (this._isStop) {}
    this.currentFrame = this.currentFrame + this._direction
    if (this.currentFrame > this.totalFrames) {
      this.currentFrame = 1
    } else if (this.currentFrame < 1) {
      this.currentFrame = this.totalFrames
    }
  }
  p._renderChild = function() {
    for (var key in this._movieclips) {
      this._movieclips[key].render(this.currentFrame)
    }
  }
  win.MovieClip = MovieClip
})(window);
(function(win) {
  var Stage = function(stageId) {
    MovieClip.call(this, stageId)
    this._paused = false
    this.type = 'movieclip'
    this.isStage = true
    this.frameRate = 24
  }
  Stage.prototype = new MovieClip()
  var p = Stage.prototype
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
// var stage = new Stage('.a').gotoAndStop(1)
// document.getElementById('mask_1')
// document.querySelector('._id3').classList.add('mask_1')
var stage = new Stage('#a')
stage.startUp()
// stage.gotoAndStop(5)
//
// var count = 0
// document.body.onclick=function () {
//   console.log(stage)
//   // stage.render()
//   document.querySelector('#_mask path').setAttribute('transform','translate('+(count++)+',0)')
// }
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
// console.log()
// },6000)
// let box = document.querySelector('clipPath').getBBox()
// document.querySelector('clipPath').style.left =-box.width/2 + 'px'
// document.querySelector('clipPath').style.top =-box.height/2 + 'px'
// console.log(document.querySelector('#_mask').classList.add('f3'))
// console.log(document.querySelector('#_mask1').classList.add('hidden'))
// console.log(document.querySelector('#_id2').classList.add('_mask_5'))
//
// console.log(document.querySelector('#_mask').classList.add('f1'))
// console.log(document.querySelector('#_mask1').classList.add('f5'))
// console.log(document.querySelector('#_id3').classList.add('_mask'))
// document.querySelector('.a').classList.add('f5')