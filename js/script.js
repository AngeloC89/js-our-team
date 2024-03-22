
const send = document.querySelector('.btn');//button send
const ulEl = document.getElementById('cards');//questo div contiene le cards con i singoli membri.
const newMemb = document.querySelectorAll('input');

let teaMembers = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: `wayne-barnett-founder-ceo.jpg`

    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: `angela-caroll-chief-editor.jpg`

    },
    {
        name: 'Walter',
        surname: ' Gordon',
        role: 'Office Manager',
        image: `walter-gordon-office-manager.jpg`

    },
    {
        name: 'Angela',
        surname: ' Lopez',
        role: 'Social Media Manager',
        image: `angela-lopez-social-media-manager.jpg`

    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: `scott-estrada-developer.jpg`

    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: `barbara-ramos-graphic-designer.jpg`

    },
];//array iniziale con dentro oggetti

//bottone send che carica i dati dal form.
send.addEventListener('click', function () {
    ulEl.innerHTML = '';
    const newMembers = newObject(newMemb, teaMembers);

makeCard(newMembers)
console.log(newMembers)

});

makeCard(teaMembers)



// **************** funzioni ****************//
function makeCard(array) {
   
    for (let i = 0; i < array.length; i++) {
        
        const divEl = document.createElement('div');
        divEl.classList.add('card', 'box', 'text-center', 'col-12', 'col-lg-3');

        divEl.innerHTML = `
       <img class="img-fluid" src="/img/${array[i].image}" alt="photo ${array[i].name} ${array[i].surname}">
     <h3 class="text-center my-2">${array[i].name} ${array[i].surname} </h3>
     
     <p class="text-center my-2">${array[i].role}</p>
    
    `;
        ulEl.appendChild(divEl)

    };
}
function newObject(inputs, array) {
    
    const objectNew = {

    };

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.name) {
            objectNew[input.name] = input.value;
        }
    }
    array.push(objectNew);
    return array;

}













