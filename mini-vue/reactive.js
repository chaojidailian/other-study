class Dep {
  constructor() {
    this.subscribe = new Set()
  }
  depend() {
    if(holdEffect) {
      this.subscribe.add(holdEffect)
    }
  }
  notify() {
    this.subscribe.forEach(effect => {
      effect()
    });
  }
}
let holdEffect = null
let rawWeakMap = new WeakMap()
function watchEffect(effect) {
  holdEffect = effect
  effect()
  holdEffect = null
}
function getDep(raw,key) {
  let rawMap = rawWeakMap.get(raw)
  if(!rawMap) {
    rawWeakMap.set(raw,new Map())
    rawMap = rawWeakMap.get(raw)
  }
  let dep = rawMap.get(key)
  if(!dep) {
    rawMap.set(key,new Dep())
    dep = rawMap.get(key)
  }
  return dep
}
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key, receiver){
      const dep = getDep(target, key)
      dep.depend()
      return Reflect.get(target,key,receiver)
    },
    set(target, key, newValue,receiver){
      const dep = getDep(target, key)
      const result = Reflect.set(target,key,newValue,receiver)
      dep.notify()
      return result
    }
  })
}
// defineProperty实现
// function reactive(raw) {
//   for (const key in raw) {
//     if (Object.hasOwnProperty.call(raw, key)) {
//       let _value = raw[key]
//       Object.defineProperty(raw, key, {
//         get() {
//           const dep = getDep(raw,key)
//           dep.depend()
//           return _value
//         },
//         set(newValue) {
//           const dep = getDep(raw,key)
//           _value = newValue
//           dep.notify()
//         }
//       })
//     }
//   }
//   return raw
// }

// const obj = reactive({count: 0})
// watchEffect(() => {
//   console.log(obj.count)
// })
// setTimeout(() => {
//   obj.count += 1
// }, 2000);
