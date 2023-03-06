// 任务：聚合函数

/**
 * 主要需要处理的点：1. 临界值
 *                  2. 如何依次执行函数，并将其返回值作为下一个函数的参数，返回最后一个函数结果
 */

/**
 * 
 * @param  {Function[]} callbackfns 
 * @returns 返回多个函数集合体的函数
 */
function compose(...callbackfns) {
  const fns = Array.from(callbackfns)
  for (const fn of fns) {
    if(typeof fn !== 'function'){
      throw new Error('传入了不是函数的参数')
    }
  }
  return function(...args) {
    let result = args
    result = result.length === 0 ? [] : result
    for (const fn of fns) {
      if(Array.isArray(result)) {
        result = fn(...result)
      }else {
        result = fn(result)
      }
    }
    return result
  }
}
