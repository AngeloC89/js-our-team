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
];


const ulEl = document.getElementById('cards');
const send = document.querySelector('.btn');


for (let i = 0; i < teaMembers.length; i++) {
    console.log(`
    name: ${teaMembers[i].name}
    surname: ${teaMembers[i].surname} 
    role: ${teaMembers[i].role} 
    image: ${teaMembers[i].image}
    `);
    const divEl = document.createElement('div');
    divEl.classList.add('card', 'box', 'text-center');

    divEl.innerHTML = `
    ${teaMembers[i].image}
 <h3 class="text-center my-2">${teaMembers[i].name} ${teaMembers[i].surname} </h3>
 
 <p class="text-center my-2">${teaMembers[i].role}</p>

`;
    ulEl.appendChild(divEl)

};

send.addEventListener('click', function () {
    const inputs = document.querySelectorAll('input');


    for (let i = 0; i < inputs.length; i++) {
        const nam = (inputs[i].value);
        if (isNaN(nam)) {
            teaMembers.push(nam);
        }
    }
    console.log(teaMembers)
});












