/*



BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! :muscolo:
DATI PER ESERCIZIO          
*/

const send = document.querySelector('.btn');//button send
const ulEl = document.getElementById('cards');//questo div contiene le cards con i singoli membri.
const newMemb = document.querySelectorAll('input');

let teaMembers = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: `<img class="img-fluid" src="/img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">`

    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: `<img class="img-fluid" src="/img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">`

    },
    {
        name: 'Walter',
        surname: ' Gordon',
        role: 'Office Manager',
        image: `<img class="img-fluid" src="/img/walter-gordon-office-manager.jpg" alt="Walter Gordon">`

    },
    {
        name: 'Angela',
        surname: ' Lopez',
        role: 'Social Media Manager',
        image: `<img class="img-fluid" src="/img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">`

    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: `<img class="img-fluid" src="/img/scott-estrada-developer.jpg" alt="Scott Estrada">`

    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: `<img class="img-fluid" src="/img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">`

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
        divEl.classList.add('card', 'box', 'text-center');

        divEl.innerHTML = `
        ${array[i].image}
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













