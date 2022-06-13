const nav = document.querySelector('.menu');
const menubuttom = document.querySelector('#menubuttom');

function toggleMenu() {
  nav.classList.toggle('active');
  menubuttom.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('active');
}
