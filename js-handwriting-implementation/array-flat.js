//任务：数组扁平化
/**
 * 主要需要处理的点：1. 如何迭代数组
 *                  2. 调用数组方法是否会改变原数组
 * 
 */
/**
 * @description 1. 使用数组的reduce方法实现
 * @param {Array} array 
 * @returns {Array} 返回扁平化的数组
 */
function cjFlat(array) {
  if(!Array.isArray(array)) throw new Error('请传入一个数组')
  return array.reduce((pre, cur) => {
    return Array.isArray(cur) ?
      pre.concat(flat(cur)) : pre.concat(cur)
  }, [])
}

/**
 * @description 2. 迭代数组方法实现
 * @param {Array} array 
 * @returns {Array} 返回扁平化的数组
 */
function cjFlat(array) {
  if(!Array.isArray(array)) throw new Error('请传入一个数组')
  let result = []
  array.forEach(item => {
    if(Array.isArray(item)) {
      result.push(...cjFlat(item))
    }else {
      result.push(item)
    }
  })
  return result
}

// 3. 数组原生方法实现，传入一个deep深度变量
Array.prototype.flat
