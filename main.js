//-----------------Hamburger menu--------------------------//
const nav = document.querySelector('.menu');
const menubutton = document.querySelectorAll('#menubutton');
const iconsButtons = document.querySelectorAll('.menu-links');

function toggleMenu() {
  nav.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('active');
}

menubutton.onclick = function () { toggleMenu(); };
iconsButtons.onclick = function () { closeMenu(); };

//-------------------Modal functions OPEN/CLOSE-----------------//

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

//-------------------DATA STORAGE (array of objects)------------------------//
//CARDS
const projects = [
  {
    projectID:0,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:1,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:1,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:2,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:3,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:4,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:5,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  },
  {
    projectID:6,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies:['html', 'bootstrap', 'Ruby'],
    linkLiveVersion:'www.google.com',
    linkSource:'www.github.com',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.'
  }
];

const dinamicProjects = document.querySelector('#dinamicProject');
//for(let i=1 ; i<object.length; i++)
projects.forEach( (project, index)=> {
  //Div projects
  let divProject=document.createElement('div');
  divProject.setAttribute("class","projects");
  //See project button
   let btnSeeProject = document.createElement('button');
   let btnText = document.createTextNode('See project');
   btnSeeProject.setAttribute("class", "buttons neonText2"); 
   //btnSeeProject.setAttribute("id", `btnSeeProject${project.projectID}`);
   btnSeeProject.setAttribute("id", project.projectID);
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
   });
     //description
     let descriptionTag = document.createElement('p');
     let descriptionText = document.createTextNode(project.description);
     descriptionTag.appendChild(descriptionText);
     divProject.appendChild(descriptionTag);
     //title
     let projectName = document.createElement('h2');
     let projectNameText = document.createTextNode(project.name);
     projectName.appendChild(projectNameText);
     divProject.appendChild(projectName);
      //Add div to dinamicProjects
      dinamicProjects.appendChild(divProject);
});

const newModal = document.getElementById('modalID');

function fillModal(ID) {
    const element = projects[ID];
    let subTitle = document.createElement('h2');
    let subTitleText = document.createTextNode(element.name);
    subTitle.appendChild(subTitleText);
    newModal.appendChild(subTitle);
        //Modal Technologies ul
        let techUl = document.createElement('ul');
        techUl.setAttribute("class","skillsused");
        let techs = element.technologies;
        techs.forEach((tech)=>{
        let liTech = document.createElement('li');
        let liText = document.createTextNode(tech);
        liTech.appendChild(liText);
        techUl.appendChild(liTech);
        newModal.appendChild(techUl);
        });
            //Div modal (image + description + links)
            let divModal = document.createElement('div');
            divModal.setAttribute("class","displayFlexModal");
            newModal.appendChild(divModal);
              //Modal Image
              let imgModal = document.createElement('img');
              imgModal.setAttribute("src", "images/imageModalBig.png");
              divModal.appendChild(imgModal);
                //Modal description
                let modalDescription = document.createElement('p');
                let modalDescriptionText = document.createTextNode(element.modalDescription);
                modalDescription.appendChild(modalDescriptionText);
                divModal.appendChild(modalDescription);
                  //Modal Links
                  let modalLinkLiveVersion = document.createElement('a');
                  let modalLinkLiveVersionText = document.createTextNode('See Live');
                  modalLinkLiveVersion.setAttribute('href', element.linkLiveVersion);
                  modalLinkLiveVersion.setAttribute('class', 'link-live');
                  let modalLinkSource = document.createElement('a');
                  let modalLinkSourceText = document.createTextNode('See Source');
                  modalLinkSource.setAttribute('href', element.linkSource);
                  modalLinkSource.setAttribute('class', 'link-source');
                  modalLinkLiveVersion.appendChild(modalLinkLiveVersionText);
                  modalLinkSource.appendChild(modalLinkSourceText);
                  divModal.appendChild(modalLinkLiveVersion);
                  divModal.appendChild(modalLinkSource);
}

function clearModal(ID) {
  var div = document.getElementById(ID);
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}

dinamicProjects.addEventListener('click', function (e) {
  let elementId = e.target.id;
  // But only alert for elements that have an buttons class
  if (e.target.classList.contains('buttons')) {
    clearModal(newModal.id);
    fillModal(elementId);
    toggleModal('modal-containerID0');
  }
});

let btnShowProject=document.querySelector('.buttons');

/*btnShowProject.addEventListener('click', () => showModal(btnShowProject.id));*/