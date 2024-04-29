// reset js
'use strict'

console.log("Ciao mondo")

// Salvo l'elemento paragrafo all'interno di una variabile
let currentElement = document.getElementById('prezzo');

// riciclo il valore iniziale della variabile
let currentText = currentElement.innerHTML;

// Prende come input il numero di chilometri da percorrere e l'età dell'utente tramite i prompts.

const ChilometriDaPercorrere = Number()

const UserAge = Number();

// Calcola il prezzo di partenza basato sui chilometri inseriti.

const StartingPrice = ChilometriDaPercorrere * 0.21;
let sconto

// Istruzioni condizionali : applica uno sconto del 20% se l'utente ha meno di 18 anni, o del 40% se ha più di 65 anni.

if(UserAge < 18) {
    
    sconto = StartingPrice * (20 / 100);
    console.log ("Applicato lo sconto del 20%, il prezzo del biglietto è:");


}else if(UserAge > 65) {
    
    sconto = StartingPrice * (40 / 100);
    console.log ("Applicato lo sconto del 40%, il prezzo del biglietto è:");

}else {
    sconto = 0;
    console.log ("Non è stato applicato alcuno sconto, il prezzo del biglietto è:");
}

// Calcolo del prezzo finale del biglietto sottraendo lo sconto dal prezzo di partenza.

const PrezzoFinale = StartingPrice - sconto

// Stampa il prezzo finale nel log della console del browser.
console.log (PrezzoFinale.toFixed(2))

// Stampa il prezzo del biglietto all'interno della pagina html.

currentElement.innerHTML = "Il prezzo del biglietto è: " + PrezzoFinale.toFixed(2) + " euro";