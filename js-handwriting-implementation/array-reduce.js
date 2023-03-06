// 任务：实现数组reduce方法

/**
 * 主要需要处理的点：1. 边界值
 *                  2. 是否有初始化值
 *                  3. 回调函数callbackFn返回值作为下一次callbackFn的第一个值
 */

/**
 * 原生reduce实现：
 *  reduce(function(previousValue?, currentValue?, currentIndex?, array?), initialValue?)
 * 
 */

/**
 * 
 * @param {Function} callbackFn 
 * @param {any} initialValue 
 * @returns 返回一个经callbackFn回调函数处理后的结果
 */
Array.prototype.cjReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== 'function') throw new Error('请传入一个函数')
  let preValue
  let initI = 0
  if(initialValue) {
    preValue = initialValue
  }else {
    preValue = this[0]
    initI = 1
  }
  for (let i = initI; i < this.length; i++) {
    const curValue = this[i]
    preValue = callbackFn(preValue, curValue, i, this)
  }
  return preValue
}
