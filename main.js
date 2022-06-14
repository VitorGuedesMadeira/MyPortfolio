const nav = document.querySelector('.menu');

function toggleMenu() {
  nav.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('active');
}

nav.onclick = function () { toggleMenu(); };
nav.onclick = function () { closeMenu(); };
