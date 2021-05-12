// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// Array di oggetti contenente il nome delle bici ed il relativo peso
var listaBici = 
[
    {
        nome: "Graziella",
        peso: 14
    },

    {
        nome: "Rocker",
        peso: 11
    },

    {
        nome: "Mountain Bike",
        peso: 12
    },

    {
        nome: "VanRysel",
        peso: 7
    }
];

// Ciclo per identificare la bici dal peso minore / Destructuring
let biciLeggera = listaBici [0];
for (let i = 0; i < listaBici.length; i++){
    const biciCorrente = listaBici[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}

const { nome, peso } = biciLeggera;
// Stampa in console
console.log(
    `La bici più leggera è ${nome} con peso ${peso}.`
);