// 任务：实现数组forEach方法
/**
 * 主要需要处理的点：1. 边界值
 */

/**
 * @description 传入一个回调函数callbackFn，
 *               会依次传入调用数组的每一项及其索引值以及嗲用数组给callbackFn的形参
 * @param {Function} callbackFn 
 */
Array.prototype.cjForEach = function(callbackFn) {
  if(typeof callbackFn !== 'function') throw new Error('请传入一个函数')
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    callbackFn(item, i, this)
  }
}