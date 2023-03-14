// 任务：解析url参数为对象
/**
 * 
 * 实现需要注意的点：1. encodeURIComponent会忽略保留字符和数字符号'#'以及非转义字符，
 *                        而encodeURI只会忽略非转义字符
 *                  2. 临界值
 */

/**
 * 
 * @param {String} url 
 * @returns 返回url请求参数的对象形式
 */
function urlParamsToObj(url) {
  if(typeof url !== 'string') throw new Error('参数不是一个字符串')
  const index = url.indexOf('?')
  if(index === -1) {
    return {}
  }
  const paramsArr = url.slice(index + 1).split('&')
  let result = {}
  paramsArr.forEach(params => {
    const param = params.split('=')
    result[param[0]] = decodeURIComponent(param[1])
  });
  return result
}
