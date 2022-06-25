
const newModal = document.querySelector('.modal-container');

window.addEventListener('click', (event) => {

    if(event.target === newModal){
        newModal.classList.remove('show');
    }  
})

const objeto = [
    {
        id: 0,
        name: 'vitor',
        text: 'hahaha',
    },
    {
        id: 1,
        name: 'alex',
        text: 'hahaha',
    },
    {
        id: 2,
        name: 'beta',
        text: 'hahaha',
    },
]

const modalInside = document.querySelector('.modal');

function fillInside(ID) {
    const objects = objeto[ID];

    const title = document.createElement('h1');
    const titletext = document.createTextNode(objects.name);
    title.appendChild(titletext);

    const text = document.createElement('p');
    const texttext = document.createTextNode(objects.text);
    text.appendChild(texttext);

        modalInside.appendChild(title);
        modalInside.appendChild(text);
}

function clearModalInside(ID) {
    document.getElementById(ID).innerHTML = "";
};

window.addEventListener('click', (event) => {
    const buttonId = event.target.id;
    
    if(event.target.classList.contains('buttons')){
        clearModalInside("modal");
        fillInside(buttonId);
        newModal.classList.add('show');
    }
});

