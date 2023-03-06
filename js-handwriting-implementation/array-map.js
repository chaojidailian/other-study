// 任务：实现数组map方法
/**
 * 主要需要处理的点：1. 边界值
 *                  2.数组方法是否会改变原数组
 */

/**
 * 
 * @param {Array} fn 
 * @returns 返回一个经过fn函数处理过的数组
 */
Array.prototype.cjMap = function(fn) {
  if(typeof fn !== 'function') throw new Error('请传入一个函数')
  let result = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    result.push(fn(item, i, this))
  }
  return result
}
