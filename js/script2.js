// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const squadre = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Catania",
        puntiFatti: 0,
        falliSubiti: 0
    },
];

const secondoArray = []; 

for ( let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 60);

    let { nome, falliSubiti } = squadre[i];

    secondoArray.push({
        nome,
        falliSubiti
    });
}
console.log(squadre);
console.log(secondoArray);