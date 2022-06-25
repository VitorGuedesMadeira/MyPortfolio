//  ----------------VARIABLES--------------------------------//

// variables of hamburger icon
const nav = document.querySelector('.menu');
const menubutton = document.querySelectorAll('#menubutton');
const iconsButtons = document.querySelectorAll('.menu-links');
const closeButtom = document.querySelectorAll('.close-buttom');
// variables of formulary (form - email - name)
const form = document.getElementById('form');
const email = document.getElementById('email');
// variables generating the dinamic modals
const newModal = document.getElementById('modalID');
// variables generating the dinamic cards
const dinamicProjects = document.querySelector('#dinamicProject');

//  -----------------Hamburger menu--------------------------//

function toggleMenu() {
  nav.classList.toggle('active');
}

function closeMenu() {
  nav.classList.remove('active');
}

menubutton.onclick = () => { toggleMenu(); };
iconsButtons.onclick = () => { closeMenu(); };

//  -------------------Modal functions OPEN/CLOSE-----------------//

function toggleModal(ID) {
  const modal = document.getElementById(ID);
  modal.classList.add('showUp');

  /*window.onclick = function (event) {
    if (event.target === modal || event.target.className === 'close-buttom') {
      modal.classList.remove('showUp');
    }
  };*/
}

//  -------------------DATA STORAGE (array of objects)----------------------//

//  CARDS DATA
const projects = [
  {
    projectID: 0,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 1,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    featuredImageBig: 'images/firstprojectbig.png',
    featuredImageSmall: 'images/backgroundprojects2.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 2,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 3,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 4,
    name: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 5,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    projectID: 6,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkLiveVersion: 'https://www.futureProjectLiveVersion.com',
    linkSource: 'https://github.com/VitorGuedesMadeira/MyPortfolio',
    modalDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
];

//  CARDS BEING GENERATED
for (let index = 1; index < projects.length; index += 1) {
  const project = projects[index];
  //  Div projects
  const divProject = document.createElement('div');
  divProject.setAttribute('class', 'projects');
  //  See project button
  const btnSeeProject = document.createElement('button');
  const btnText = document.createTextNode('See project');
  btnSeeProject.setAttribute('class', 'buttons neonText2');
  //  btnSeeProject.setAttribute("id", `btnSeeProject${project.projectID}`);
  btnSeeProject.setAttribute('id', project.projectID);
  btnSeeProject.appendChild(btnText);
  divProject.appendChild(btnSeeProject);
  //  Technologis ul
  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'skillsused');
  const techs = project.technologies;
  techs.forEach((tech) => {
    const liTech = document.createElement('li');
    const liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divProject.appendChild(techUl);
  });
  //  description
  const descriptionTag = document.createElement('p');
  const descriptionText = document.createTextNode(project.description);
  descriptionTag.appendChild(descriptionText);
  divProject.appendChild(descriptionTag);
  //  title
  const projectName = document.createElement('h2');
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  divProject.appendChild(projectName);

  //  Add div to dinamicProjects
  dinamicProjects.appendChild(divProject);
}

//  GENERATING MODALS
function fillModal(ID) {
  const element = projects[ID];
  //  div for Title and techonolgies
  const divTitle = document.createElement('div');
  divTitle.setAttribute('class', 'divTitle');
  newModal.appendChild(divTitle);
  const subTitle = document.createElement('h2');
  const subTitleText = document.createTextNode(element.name);
  subTitle.appendChild(subTitleText);
  divTitle.appendChild(subTitle);
  //  Modal Technologies ul
  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'skillsused');
  const techs = element.technologies;
  techs.forEach((tech) => {
    const liTech = document.createElement('li');
    const liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divTitle.appendChild(techUl);
  });
  //  Div modal (image + description + links)
  const divModal = document.createElement('div');
  divModal.setAttribute('class', 'displayFlexModal');
  newModal.appendChild(divModal);
  //  Modal Image
  const imgModal = document.createElement('img');
  imgModal.setAttribute('src', 'images/imageModalBig.png');
  divModal.appendChild(imgModal);
  //  div for p and div(links)
  const divInner = document.createElement('div');
  divInner.setAttribute('class', 'displayFlexModal2');
  divModal.appendChild(divInner);
  //  Modal description
  const modalDescription = document.createElement('p');
  const modalDescriptionText = document.createTextNode(element.modalDescription);
  modalDescription.appendChild(modalDescriptionText);
  divInner.appendChild(modalDescription);
  //  div for links
  const divLinks = document.createElement('div');
  divLinks.setAttribute('class', 'divLinks');
  divInner.appendChild(divLinks);
  //  Modal Links
  const modalLinkLiveVersion = document.createElement('a');
  const modalLinkLiveVersionText = document.createTextNode('See Live');
  const linkIcon1 = document.createElement('div');
  linkIcon1.setAttribute('class', 'image-icon1');
  modalLinkLiveVersion.setAttribute('href', element.linkLiveVersion);
  modalLinkLiveVersion.setAttribute('class', 'link-live');
  const linkIcon2 = document.createElement('div');
  linkIcon2.setAttribute('class', 'image-icon2');
  const modalLinkSource = document.createElement('a');
  const modalLinkSourceText = document.createTextNode('See Source');
  modalLinkSource.setAttribute('href', element.linkSource);
  modalLinkSource.setAttribute('class', 'link-source');
  modalLinkLiveVersion.appendChild(modalLinkLiveVersionText);
  modalLinkSource.appendChild(modalLinkSourceText);
  modalLinkLiveVersion.appendChild(linkIcon1);
  modalLinkSource.appendChild(linkIcon2);
  divLinks.appendChild(modalLinkLiveVersion);
  divLinks.appendChild(modalLinkSource);
  //  close buttom for modals
  const closureButtom = document.createElement('button');
  const closureButtomX = document.createTextNode('X');
  closureButtom.setAttribute('id', 'x-button');
  closureButtom.setAttribute('class', 'close-buttom');
  closureButtom.appendChild(closureButtomX);
  newModal.appendChild(closureButtom);
}

function clearModal(ID) {
  const div = document.getElementById(ID);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function showModal(ID) {
  clearModal(newModal.id);
  fillModal(ID);
  toggleModal('modal-containerID0');
}

// ---------------------------------------------------------------//

// set error classes
const setError = (email, message) => {
  const emailBorder = document.querySelector('.emailBorder');
  const inputControl = document.querySelector('.input-control');
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  emailBorder.classList.remove('colorsuccess');
  emailBorder.classList.add('colorerror');
};
// set success classes
const setSuccess = () => {
  const emailBorder = document.querySelector('.emailBorder');
  const inputControl = document.querySelector('.input-control');
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '✔';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  emailBorder.classList.add('colorsuccess');
  emailBorder.classList.remove('colorerror');
};
// check for valid email signs
const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};
// check if email is lowercase
const checkLowerCase = (emailValueCheck) => {
  if (emailValueCheck === emailValueCheck.toLowerCase()) {
    return true;
  }
  return false;
};
// Validate all values in the inputs (user inputs)
const validateInputs = () => {
  const emailValue = email.value.trim(); // Removes the white spaces
  // (email)
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email adress');
  } else if (!checkLowerCase(emailValue)) {
    setError(email, 'Use lower case');
  } else {
    setSuccess(email);
    form.submit();
  }
};

// ---------------EVENT LISTENERS---------------------------//

// eventListener for submit buttom on formulary
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateInputs();
});

// eventListener for dinamic cards
dinamicProjects.addEventListener('click', (event) => {
  const elementId = event.target.id;
  // But only alert for elements that have an buttons class
  if (event.target.classList.contains('buttons')) {
    showModal(elementId);
  }
});

window.addEventListener('click', (event) => {
  const modal = document.querySelector('#modal-containerID0');
  if (event.target === modal || event.target.className === 'close-buttom') {
    modal.classList.remove('showUp');
  }
});
