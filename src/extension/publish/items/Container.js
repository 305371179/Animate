"use strict";

const util = require('util');
const LibraryItem = require('./LibraryItem');
const {renderHtml} = require('../renderHtml');
const ContainerInstance = require('../instances/ContainerInstance');
const SoundInstance = require('../instances/SoundInstance');

/**
 * The single frame timeline
 * @class Container
 * @extends LibraryItem
 * @constructor
 * @param {Object} data The bitmap data
 * @param {int} data.assetId The resource id
 */
const Container = function(library, data)
{
    // Add the data to this object
    LibraryItem.call(this, library, data);

    /**
     * Get the instances by id
     * @property {Object} instancesMap
     */
    this.instancesMap = {};

    /**
     * The collection of masks
     * @property {Array} masks
     */
    this.masks = [];

    /**
     * Collection of instances to render (excluding masks)
     * @property {Array} children
     */
    this.children = [];

    /**
     * The children to add using .addChild()
     * these are static/non-animated
     * @property {Array} addChildren
     * @private
     */
    this.addChildren = [];

    // Get the children for this
    this.getChildren();
};

// Reference to the prototype
util.inherits(Container, LibraryItem);
const p = Container.prototype;

/**
 * Render the element
 * @method render
 * @param {Renderer} renderer
 * @return {string} Buffer of object
 */
p.render = function(renderer)
{
    return renderer.template('container', {
        id: this.name,
        contents: this.getContents(renderer)
    });
};

/**
 * Handler for the mask added event
 * @method onMaskAdded
 * @param {Mask} command Mask command
 * @param {int} frame index
 */
p.onMaskAdded = function(command, frame)
{
    const mask = this.instancesMap[command.instanceId];
    const instance = this.instancesMap[command.maskTill];
    // console.log("maskAdded", instance, mask, frame);
    this.masks.push({
        instance: instance,
        mask: mask,
        frame: frame
    });
};

/**
 * Handler for the mask removed event
 * @method onMaskRemoved
 * @param {Mask} command Mask command
 * @param {int} frame index
 */
p.onMaskRemoved = function(command, frame)
{
    const mask = this.instancesMap[command.instanceId];
    // console.log("maskRemoved", command, frame);
    this.masks.forEach(function(entry)
    {
        if (entry.mask === mask)
        {
            entry.duration = frame - entry.frame;
        }
    });
};

/**
 * Get the collection of children to place
 * @method getChildren
 * @return {array<Instance>} Collection of instance objects 
 */
p.getChildren = function()
{
    const library = this.library;
    const instancesMap = this.instancesMap;
    const children = this.children;
    const onMaskAdded = this.onMaskAdded.bind(this);
    const onMaskRemoved = this.onMaskRemoved.bind(this);
    this.frames.forEach(function(frame)
    {
        // Ignore frames without commands
        if (!frame.commands)
        {
            return;
        }
        frame.commands.forEach(function(command)
        {
            let instance = instancesMap[command.instanceId];

            if (!instance)
            {
                instance = library.createInstance(command.assetId, command.instanceId);
                instancesMap[command.instanceId] = instance;

                instance.on('maskAdded', onMaskAdded);
                instance.on('maskRemoved', onMaskRemoved); 
            }

            // Add to the list of commands for this instance
            instance.addToFrame(frame.frame, command);
            // console.log(command)
            // Add it if it hasn't been added already
            if (!(instance instanceof SoundInstance) && children.indexOf(instance) == -1) 
            {
                children.push(instance);
            }
        });
    });
};

/**
 * Renderer to use
 * @method getContents
 * @param {Renderer} renderer
 */
p.getContents = function(renderer)
{
    let preBuffer = this.renderChildrenMasks(renderer);
    // console.log(preBuffer)
    let buffer = this.renderChildren(renderer);
    // console.log(buffer)
    let postBuffer = this.renderAddChildren(renderer);
    // console.log(preBuffer)
  // console.log(preBuffer + buffer + postBuffer)
    return preBuffer + buffer + postBuffer;
};

p.renderAddChildren = function(renderer)
{
    let buffer = '';
    // Add the static children using addChild
    if (this.addChildren.length)
    {
        let func = renderer.compress ? 'ac' : 'addChild';
        buffer += `this.${func}(${this.addChildren.join(', ')});`;
    }
    return buffer;
};

/** 
 * Convert instance to add child calls
 * @method renderChildrenMasks
 * @param {Renderer} renderer The reference to renderer
 */
p.renderChildrenMasks = function(renderer)
{
    const len = this.masks.length;
    let buffer = '';
    for(let i = 0; i < len; i++)
    {
        buffer += this.renderInstance(
            renderer,
            this.masks[i].mask
        );
    }
    return buffer;
};

/**
 *
 *
 */
p.flattenDepthItems = function(items)
{
    const result = [];

    // Pre-sort the items by startFrame
    items.sort(function(a, b)
    {
        return b.startFrame - a.startFrame;
    }); 

    for(let i = 0; i < items.length; i++)
    {
        let item = items[i];
        result.push(item.instance);

        if (item.children.length)
        {
            let children = this.flattenDepthItems(item.children);
            result.push.apply(result, children);
        }
    }
    return result;
};

/** 
 * Convert instance to add child calls
 * @method renderChildren
 * @param {Renderer} renderer The reference to renderer
 * @return {string} Buffer of add children calls
 * 关键的核心在此
 */
p.renderChildren = function(renderer,callback)
{
    // console.log(this.children)
    const len = this.children.length;
    let buffer = '';
    if (len)
    {
        let items = [];
        let cloned = this.children.slice(0);
        let map = {};

        // Find all of the top nodes with no layer
      // 获取层级最高的顶层实例 placeAfter: 0
        for(let i = 0; i < len; i++) 
        {
            let instance = this.children[i];
            if (!instance.placeAfter)
            {
                // Remove from the temporary list
                cloned.splice(cloned.indexOf(instance), 1);

                // Create a list item to link together instances
                let item = {
                    instance: instance.id,
                    startFrame: instance.startFrame,
                    placeAfter: 0,
                    children: [] 
                };
                map[instance.id] = item;
                items.push(item);
            }
        }
        // Go through the rest of the items and 
        // add them to the depth sorted
        //将剩下的实例添加到他们的顶层实例里面并且排序
      // console.log(cloned,5555)
        while(cloned.length)
        {
            for(let i = 0; i < cloned.length; i++)
            {
                let instance = cloned[i];
                let parent = map[instance.placeAfter];

                if (parent)
                {
                    // Remove from the list
                    cloned.splice(i, 1);

                    // Create a new linked item
                    let item = {
                        instance: instance.id,
                        startFrame: instance.startFrame,
                        placeAfter: instance.placeAfter,
                        children: [] 
                    };

                    // nest under the parent
                    parent.children.push(item);

                    // Sort the children by startTime、
                    // TODO 此方法没有定义,自己定义一下，根据代码，显示在前面的元素，下标越小
                    // 没有测试过的，所以要小心
                    parent.children.sort(this.sortByStartFrame);

                    // Add to the map
                    map[instance.id] = item;
                    break;
                }
            }
        }

        // Flatted all the items to a single array of instances
        let depthSorted = this.flattenDepthItems(items);
        // console.log(depthSorted)
        // Reverse the items to add in reverse order
        depthSorted.reverse();
        let children = []
        // Render to the stage
        for(let i = 0; i < depthSorted.length; i++)
        {
            let instance = this.instancesMap[depthSorted[i]];
            // console.log(instance)
            if (!instance.renderable) continue;
            children.push(instance)
            // renderHtml(this,instance,renderer)
            // console.log(this.renderInstance(renderer, instance))
            // if(instance.libraryItem.type === 'text')
            // console.log(instance.frames)
            buffer += this.renderInstance(renderer, instance);
            
        }
        if(callback){
            callback(children)
        }
        // console.log(buffer,6666)
    }
    return buffer;
};

/**
 * Render either a mask or normal instance
 * @method renderInstance
 * @return {string}
 */
p.renderInstance = function(renderer, instance)
{
    this.addChildren.push(instance.localName);
    // console.log(this)
    return instance.render(renderer, this.getMaskByInstance(instance));
};
/**
 * 不知道是否错了的
 * 给layer得元素根据开始帧排序
 * @method renderInstance
 * @return {string}
 */
p.sortByStartFrame = function(a, b)
{
    // console.log(child0.startFrame,child1.startFrame)
  // console.log('用到了sortByStartFrame')
  return b.startFrame - a.startFrame
    // return child0.startFrame
};

/**
 * Get a mask for an instance
 * @method getMask
 * @param {Instance} instance
 * @return {Instance} The mask to use for instance
 */
p.getMaskByInstance = function(instance)
{
    for(let i = 0; i < this.masks.length; i++)
    {
        if (this.masks[i].instance === instance)
        {
            return this.masks[i].mask.localName;
        }
    }
    return null;
};

/**
 * Create a instance of this
 * @method create
 * @return {ContainerInstance} The new instance
 * @param {int} id Instance id
 */
p.create = function(id)
{
    return new ContainerInstance(this, id);
};

module.exports = Container;