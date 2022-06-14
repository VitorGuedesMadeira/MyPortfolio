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
const buttonProject1 = document.querySelector('#firstprojectbuttom');
const buttonProject2 = document.querySelector('#seconprojectbuttom');
const buttonProject3 = document.querySelector('#thirdprojectbuttom');
const buttonProject4 = document.querySelector('#fourtprojectbuttom');
const buttonProject5 = document.querySelector('#fifthprojectbuttom');
const buttonProject6 = document.querySelector('#sixthprojectbuttom');


function toggleModal(ID){
  const modal = document.getElementById(ID);
  modal.classList.add('showUp');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('showUp');
    }
  }
 }

 mainProjButtom.addEventListener('click', () => toggleModal('modal-containerID0'));
 buttonProject1.addEventListener('click', () => toggleModal('modal-containerID1'));
 buttonProject2.addEventListener('click', () => toggleModal('modal-containerID2'));
 buttonProject3.addEventListener('click', () => toggleModal('modal-containerID3'));
 buttonProject4.addEventListener('click', () => toggleModal('modal-containerID4'));
 buttonProject5.addEventListener('click', () => toggleModal('modal-containerID5'));
 buttonProject6.addEventListener('click', () => toggleModal('modal-containerID6'));

