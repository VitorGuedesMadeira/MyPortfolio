
function toggleMenu() {
    const nav = document.querySelector('.menu');
    const menubuttom = document.querySelector('#menubuttom');
    nav.classList.toggle('active');
    menubuttom.classList.toggle('active');
}

function closeMenu(){
    const nav = document.querySelector('.menu')
    nav.classList.remove('active')
}