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

function toggleModal(ID) {
  const modal = document.getElementById(ID);
  modal.classList.add('showUp');

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove('showUp');
    }
  }

  closureButtom.onclick = function (ID) {
    modal.classList.remove('showUp');
  }
}

mainProjButtom.addEventListener('click', () => toggleModal('modal-containerID0'));

//-----------------------------------------------------------------------//

const projects = [
  {
    projectID:0,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:1,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:2,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:3,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:4,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:5,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
  {
    projectID:6,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com'
  },
];

const dinamicProjects = document.querySelector('#dinamicProject');

projects.forEach( (project, index)=> {
  //Div projects
  let divProject=document.createElement('div');
  divProject.setAttribute("class","projects");
  divProject.setAttribute("style","background:red");
  //See project button
   let btnSeeProject = document.createElement('button');
   let btnText = document.createTextNode('See project');
   btnSeeProject.setAttribute("class", "buttons neonText2"); 
   btnSeeProject.appendChild(btnText);
   divProject.appendChild(btnSeeProject);
   //Technologis ul
   let techUl = document.createElement('ul');
   techUl.setAttribute("class","skillsused");
   let techs = project.technologies;
   techs.forEach((tech)=>{
    let liTech = document.createElement('li');
    let liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divProject.appendChild(techUl);
   }
   );
   //Add div to dinamicProjects
   dinamicProjects.appendChild(divProject);
})



/*const newModal = document.getElementById('modalID');

modalObj.forEach((element, text) => { 
  let subTitle = document.createElement('h2');
  let subTitleText = document.createTextNode(element.partner);
  subTitle.appendChild(subTitleText);
  newModal.appendChild(subTitle)
})*/

/*function showName(ID) {
  const element = modalObj[ID];
  let subTitle = document.createElement('h2');
  let subTitleText = document.createTextNode(element.partner);
  subTitle.appendChild(subTitleText);
  newModal.appendChild(subTitle);
}*/


