// 任务：实现数组填充fill方法
/** 
 * 主要需要处理的点： 1. start是负数或者大于数组长度
 *                  2. end是负数或者大于数组长度
 *                  3. start大于end
 *                  4. start和end不是数字类型
 * 
*/
/**
 * 原生数组fill语法：fill(value, start? = 0, end? = arr.length)          
 */
/**
 * 
 * @param {Object} value 
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Array} 返回填充后的数组 
 */
Array.prototype.cjFill = function (value, start, end) {
  const arrLength = this.length // 7
  debugger;
  start  = Number.parseInt(start) ? start : 0
  end  = Number.parseInt(end) ? end : arrLength
  if (start < 0) {
    start += arrLength
    if (start < 0) {
      start = 0
    }
  }
  if (end < 0) {
    end += arrLength
  }else if(end > arrLength) {
    end = arrLength
  }
  if(end <= start) {
    return this
  }
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}