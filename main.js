<<<<<<< HEAD



function toggleMenu() {
    const nav = document.querySelector('.menu')
    nav.classList.toggle('active');
    nav.classList.toggle('activeimage')
=======
const buttonmenu = document.getElementById('menubutton')

function toggleMenu() {
    const nav = document.querySelector('.menu')
    nav.classList.toggle('active')
    buttonmenu.classList.toggle('active')
>>>>>>> aa7e22313595b6cfbdda95d9ebff3368ea5f52a2
}

function closeMenu(){
    const nav = document.querySelector('.menu')
    nav.classList.remove('active')
}