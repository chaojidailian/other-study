// 任务：实现数组some方法
/**
 * 主要需要处理的点：1. 边界值
 */

/**
 * @param {Function} callbackFn 
 * @returns 返回一个经过callbackFn函数处理后的结果
 */
Array.prototype.cjSome = function(callbackFn) {
  if(typeof callbackFn !== 'function') throw new Error('请传入一个函数')
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    if(callbackFn(item, i, this)) {
      return true
    }
  }
  return false
}

