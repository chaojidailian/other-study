// 任务：深拷贝

/**
 * 深拷贝目的：解析浅拷贝对象内存地址相同的问题，实现拷贝出来的内部对象是独享状态而不是共享。
 *    应用：对象的复制，创建快照
 */

// function deepCopy(obj) {
//   if (typeof obj !== 'object') return obj
//   let result = Array.isArray(obj) ? [] : {}

//   if (Array.isArray(obj)) {
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         const value = obj[key]
//         if (value instanceof Date) {
//           console.log(value)
//           const timestamp = value.valueOf()
//           result[key] = new Date(timestamp)
//         } else if (typeof value === 'object') {
//           result.push(deepCopy(value))
//         } else {
//           result[key] = value
//         }
//       }
//     }
//   } else {
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         const value = obj[key];
//         if (value instanceof Date) {
//           console.log(value)
//           const timestamp = value.valueOf()
//           result[key] = new Date(timestamp)
//         } else if (typeof value === 'object') {
//           result[key] = (deepCopy(value))
//         } else {
//           result[key] = value
//         }
//       }
//     }
//   }
//   return result
// }

//map：作用：解决循环引用的问题 
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  debugger
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}

let person = {
  name: '小李',
  colors: ['red', 'blue', 'pink'],
  phone: {
    type: '手机',
    cpu: {
      type: '高通'
    },
    reg: new RegExp('^abc$','gi'),
    reg2: /.ts$/g,
    hold: ['小米', '华为', new Date()]
  },
  date: new Date()
}



var p2 = {
  name: '大p',
}

var p = {
  name: '小p',
  pFriend: p2,
  colors: ['a','b']
}
p2.a =  p

// const copyPerson = deepClone(person)
// person.name = '小花'
// person.colors.push('white')
// person.phone.cpu.type = '联发科'
// person.phone.hold = ['oppo', 'vivo']
// person.date = new Date(12345679)
// console.log(person)
// console.log(copyPerson)
const pcopu = deepClone(person)
console.log(pcopu)

