// 寄生组合式继承

function extendsFn(target, proto) {
  target.prototype = Object.create(proto.prototype)
  target.prototype.constructor = target
}

function Shape(name) {
  this.name = name
  this.sayName = function() {
    console.log(this.name)
  }
}

function Circle(name, r) {
  Shape.call(this, name)
  this.r = r
  this.sayR = function() {
    console.log(this.r)
  }
}

extendsFn(Circle, Shape)
const circle = new Circle('圆形', 90)
circle.sayR()
circle.sayName()
console.log(circle)