const buttonmenu = document.querySelector('#menubutton')

function toggleMenu() {
    const nav = document.querySelector('.menu')
    nav.classList.toggle('active')
}

function closeMenu(){
    const nav = document.querySelector('.menu')
    nav.classList.remove('active')
}