/*
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
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
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'

    },
    {
        name: 'Walter',
        surname: ' Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'

    },
    {
        name: 'Angela',
        surname: ' Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'

    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'

    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'

    },
];


const ulEl = document.querySelector('ul');


for (let i = 0; i < teaMembers.length; i++) {
    console.log(`
    name: ${teaMembers[i].name}
    surname: ${teaMembers[i].surname} 
    role: ${teaMembers[i].role} 
    image: ${teaMembers[i].image}
    `);
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');


    liEl.innerHTML = `
name: ${teaMembers[i].name}
surname: ${teaMembers[i].surname} 
role: ${teaMembers[i].role} 
image: ${teaMembers[i].image}
`;
    ulEl.appendChild(liEl)

};










