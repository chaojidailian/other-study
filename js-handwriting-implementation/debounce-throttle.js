// 任务：防抖-节流

/**
 * 防抖节流目的是：优化浏览器高频率操作，降低执行次数
 * 防抖：n秒后执行回调函数，若n秒内再次触发，则重新计时
 *    应用：鼠标移动事件，窗口resize事件，搜索框输入提示
 * 节流：n秒内无论触发多少次，都会只执行一次
 *    应用：鼠标移动事件，按钮点击事件，鼠标滚动加载
 * 
 * 实现需要注意的点：1. 临界值
 *                  2. this值
 *                  3. 参数传递
 */

/**
 * 
 * @param {Function} fn 
 * @param {Number} delay 
 * @param {Boolean} immediate 
 * @returns 返回一个delay的防抖函数
 */
function debounce(fn, delay = 1000, immediate = false) {
  let timer = null
  return function (...args) {
    if (immediate) {
      fn.apply(this, args)
      immediate = false
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, e)
      immediate = true
    }, delay);
  }
}

/**
 * 
 * @param {Function} fn 
 * @param {Number} delay 
 * @returns 返回一个n秒的节流函数
 */
function throttle(fn, delay = 1000) {
  let timer = null
  return function (...args) {
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

/**
 * 
 * @param {Function} fn 
 * @param {Number} delay 
 * @returns 返回一个n秒的节流函数
 */
function throttle(fn, delay = 1000) {
  let startTime = Date.now()
  return function (...args) {
    let curTime = Date.now()
    if(curTime - startTime >= delay) {
      fn.apply(this, args)
      startTime = Date.now()
    }
  }
}

/**
 * 
 * @param {Function} fn 
 * @param {Number} delay 
 * @returns 返回一个n秒的节流函数
 */
function throttle(fn, delay = 1000) {
  let startTime = Date.now()
  let timer = null
  return function (...args) {
    let curTime = Date.now()
    clearTimeout(timer)
    if(curTime - startTime >= delay) {
      fn.apply(this, args)
      startTime = Date.now()
    }else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay);
    }
  }
}