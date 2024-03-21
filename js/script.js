/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
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
        image: `<img src="/img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett">`

    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: `<img src="/img/angela-caroll-chief-editor.jpg" alt="Angela Caroll">`

    },
    {
        name: 'Walter',
        surname: ' Gordon',
        role: 'Office Manager',
        image: `<img src="/img/walter-gordon-office-manager.jpg" alt="Walter Gordon">`

    },
    {
        name: 'Angela',
        surname: ' Lopez',
        role: 'Social Media Manager',
        image: `<img src="/img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez">`

    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: `<img src="/img/scott-estrada-developer.jpg" alt="Scott Estrada">`

    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: `<img src="/img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos">`

    },
];

for (let i = 0; i < teaMembers.length; i++) {
    console.log(`
    name: ${teaMembers[i].name}
    surname: ${teaMembers[i].surname} 
    role: ${teaMembers[i].role} 
    image: ${teaMembers[i].image}
    `);
}








