


function toggleMenu() {
    const nav = document.querySelector('.menu')
    nav.classList.toggle('active');
    nav.classList.toggle('activeimage')
}

function closeMenu(){
    const nav = document.querySelector('.menu')
    nav.classList.remove('active')
}