// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

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

var biciLeggera = listaBici [0];
for (var i = 0; i < listaBici.length; i++){
    var biciCorrente = bici[i];

    if (biciCorrente.peso < biciLeggera.peso) {
        biciLeggera = biciCorrente;
    }
}

console.log(biciLeggera);