// 任务：一维数组去重
/**
 * 主要需要处理的点：1. 边界值 
 *                  2. 数组方法传入的参数类型
 */

/**
 * @description 1. 使用数组reduce方法去重
 * @param {Array} array 
 * @returns {Array} 返回去重后的数组，原数组保持不变
 */
function unique(array) {
  if(typeof array !== 'function') throw new Error('请传入一个数组')
  return array.reduce((pre, cur) => {
    return pre.indexOf(cur) === -1 ? pre.concat(cur) : pre
  },[])
}

/**
 * @description 2. 使用数组迭代方法去重
 * @param {Array} array 
 * @returns {Array} 返回去重后的数组，原数组保持不变
 */
function unique(array) {
  if(typeof array !== 'function') throw new Error('请传入一个数组')
  let result = []
  array.forEach(item => {
    result.indexOf(item) === -1 ? result.push(item) : ''
  });
  return result
}

/**
 * @description 3. 利用Set去重
 * @param {Array} array 
 * @returns {Array} 返回去重后的数组，原数组保持不变
 */
function unique(array) {
  if(typeof array !== 'function') throw new Error('请传入一个数组')
  return Array.from(new Set(array))
  // return Array.of(...new Set(array))
}
