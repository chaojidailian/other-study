// 手写call-apply-bind

/**
 * 主要需要处理的点：1. 临界值
 *                  2. 绑定的是否是对象，或者绑定为null,undefined
 *                  3. 传入的参数是否符合标准，call依次传入，apply接收数组，bind依次传入 
 */

/**
 * 
 * @param {Object} context 
 * @param  {any} args 
 * @returns 返回调用方法的结果值
 */
Function.prototype.cjCall = function (context, ...args) {
  if (this === Function.prototype) throw new Error('不能直接调用cjCall')
  if (typeof this !== 'function') throw new Error('不是一个函数调用cjCall')
  context = context ?? window
  if (typeof context !== 'object') {
    context = {}
  }
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
/**
 * 
 * @param {Object} context 
 * @param {any} args 
 * @returns 返回调用方法的结果值
 */
Function.prototype.cjApply = function (context, args) {
  if (this === Function.prototype) throw new Error('不能直接调用cjCall')
  if (typeof this !== 'function') throw new Error('不是一个函数调用cjCall')
  context = context ?? window
  if (typeof context !== 'object') {
    context = {}
  }
  const fn = Symbol()
  context[fn] = this
  let result
  try {
    if (Array.isArray(args)) {
      result = context[fn](...args)
    } else if (typeof args === 'undefined') {
      result = context[fn]()
    } else {
      throw new Error('传入的参数不是一个数组')
    }
  } finally {
    delete context[fn]
  }
  return result
}
/**
 * @description 这种方式实现bind，会在绑定的对象上保留一个Symbol属性方法，直到这个方法运行结束为止，
 *                definedProperty不可行，可以使用call/apply进行绑定。
 * @param {Object} context 
 * @param  {any} args 
 * @returns 返回调用方法的结果值
 */
Function.prototype.cjBind = function (context, ...args) {
  if (this === Function.prototype) throw new Error('不能直接调用cjCall')
  if (typeof this !== 'function') throw new Error('不是一个函数调用cjCall')
  context = context ?? window
  if (typeof context !== 'object') {
    context = {}
  }
  const fn = Symbol()
  context[fn] = this
  return function (...params) {
    params = typeof params === 'undefined' ? [] : params
    let result
    if(args.length === 0) {
      result = context[fn](...params)
    } else {
      result = context[fn](args, ...params)
    }
    delete context[fn]
    return result
  }
}
