// 任务：函数柯里化

/**
 * 主要需要注意的点：1. 临界值
 *                  2. 函数的递归调用
 */

/**
 * 
 * @param {Function} callbackFn 
 * @returns 返回一个需要传够callbackFn回调函数参数才能运行的函数
 */
function curry(callbackFn) {
  if (typeof callbackFn !== 'function') throw new Error('请传入一个函数')
  const that = this
  const fnLength = callbackFn.length
  debugger
  function fn(...args) {
    if(args.length < fnLength) {
      return fn.bind(that, ...args)
    }else {
      return callbackFn.call(that, ...args)
    }
  }
  return fn
}
