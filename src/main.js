import './style.css'

const btnMenu = document.getElementById('btnMenu')
const header = document.getElementById('header')
const open = document.getElementById('open')
const close = document.getElementById('close')

/* console.log(open);
console.log(close);
console.log(btnMenu); */
btnMenu.addEventListener('click', () => {
    header.classList.toggle('-translate-x-full')
    btnMenu.classList.toggle('bg-texto')
    btnMenu.classList.toggle('bg-hover')
    open.classList.toggle('hidden')
    close.classList.toggle('hidden')
})