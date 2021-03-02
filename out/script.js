// const buttons = document.querySelectorAll('#button')
const panel = document.querySelectorAll('.panel')

// for (const b of buttons) {
//   b.addEventListener('click', () => {
//     para.forEach((p) => {
//       p.classList.toggle('hidden')
//     })
//   })
// }
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     para.forEach((p) => {
//       p.classList.toggle('hidden')
//     })
//   })
// })

// const buttons = document.getElementById('button')
// let i

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     this.classList.toggle('hidden')
//     var p = this.nextElementSibling
//     if (p.style.display === 'block') {
//       p.style.display = 'none'
//     } else {
//       p.style.display = 'block'
//     }
//   })
// }

var acc = document.getElementsByClassName('button')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    var panel = this.nextElementSibling
    panel.classList.toggle('hidden')
  })
}
