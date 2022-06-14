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

const mainProjButtom = document.querySelector('#mainprojectbuttom');
const closureButtom = document.querySelectorAll('.close-buttom');

function toggleModal(ID){
  const modal = document.getElementById(ID);
  modal.classList.add('showUp');

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('showUp');
    }
  }

  closureButtom.onclick = function(ID){
      modal.classList.remove('showUp');
  }
 }

 mainProjButtom.addEventListener('click', () => toggleModal('modal-containerID0'));

 //-----------------------------------------------------------------------//

 const modalObj = [
  {
    partner: 'Vanessa',
    number: 1,
    day: 'Thusday'
  },

  {
    partner: 'Aron',
    number: 1,
    day: 'Wednesday'
  },

  {
    partner: 'Rodrigo and Karla',
    number: 2,
    day: 'Friday'
  }
 ];

const newModal = document.getElementById('modalID');

modalObj.forEach((element, text) => { 
  let subTitle = document.createElement('h2');
  let subTitleText = document.createTextNode(element.partner);
  subTitle.appendChild(subTitleText);
  newModal.appendChild(subTitle)
})


