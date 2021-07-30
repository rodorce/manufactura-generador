document.querySelector('.template-body').innerHTML = localStorage.input
let matBtn1 = document.querySelector('.materialBtn1')
let matBtn2 = document.querySelector('.materialBtn2')
let matBtn3 = document.querySelector('.materialBtn3')
let matDesc1 = document.querySelector('.matDesc1')
let matDesc2 = document.querySelector('.matDesc2')
let matDesc3 = document.querySelector('.matDesc3')
matBtn1.addEventListener('click', () => {
    matDesc1.style.display = "block"
    matDesc2.style.display = "none"
    matDesc3.style.display = "none"
})
matBtn2.addEventListener('click', () => {
    matDesc1.style.display = "none"
    matDesc2.style.display = "block"
    matDesc3.style.display = "none"
})
matBtn3.addEventListener('click', () => {
    matDesc1.style.display = "none"
    matDesc2.style.display = "none"
    matDesc3.style.display = "block"
})