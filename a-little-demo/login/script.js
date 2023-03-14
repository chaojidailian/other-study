const box = document.querySelector('.login-box')

let isIn = true
let isOut = false
let animateSpan

box.addEventListener('mouseenter',(e) => {
  if(isIn) {
    console.log(e)
    console.log({box})
  }
  
})