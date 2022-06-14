const nav = document.querySelector('.menu');
const menubutton = document.querySelectorAll('#menubutton');
const iconsButtons = document.querySelectorAll('.menu-links');

function toggleMenu() {
  nav.classList.toggle('active');
  menubutton.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('active');
}

menubutton.onclick = function () { toggleMenu(); };
iconsButtons.onclick = function () { closeMenu(); };

//----------------------------------------------------------//


