// 实现JSON.stringify方法

/**
 * JSON.stringify目的：将对象转换成可序列化对象
 *                  应用：网络数据传输格式
 * 
 * 实现需要注意的点：1. 临界值
 *                  2. 原生JSON.stringify处理undefined，function， Symbol类型直接忽视，
 *                        如果是出现在数组上则变为null
 *                  3. Date使用内部toJSON方法转成了string类型
 *                  4. RegExp对象转成空对象: {}
 *                  5. NaN和Infinity以及null都转成null
 */
function cjStringify(obj) {
  if(obj == null || typeof obj === 'function' || typeof obj === 'symbol') return null
  if(obj instanceof RegExp) return {}
  if(obj instanceof Date) return new Date(obj).toString()
  if(typeof obj !== 'object') return obj
  let result
  if(Array.isArray(obj)){
    result = []
    for (const of in obj) {
      const value = cjStringify(of)
      result.push(`"${value}"`)
    }
  }
  return result;
}

let obj = {
  name: 'aa',
  age: undefined,
  sym: Symbol(),
  Date: new Date(),
  reg: new RegExp('.ts$','gi'),
  colors: ['red', new Date(), Symbol(), undefined, function fn(){}],
  obj: {
    name: 'aa',
    sym: Symbol(),
    Date: new Date(),
    reg: new RegExp('.ts$','gi'),
    colors: ['red', new Date(), Symbol(), undefined, function fn(){}],
  }
}

const result = JSON.stringify(['a',9])
console.log(obj)
console.log(result)
console.log('****************')
const result2 = cjStringify(['a',9])
console.log(obj)
console.log(result2)