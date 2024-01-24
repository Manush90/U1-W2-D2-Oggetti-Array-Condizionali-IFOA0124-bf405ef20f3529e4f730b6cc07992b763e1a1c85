/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 10;
const numero2 = 5;

if (numero1 > numero2) {
  console.log("numero 1 è maggiore:  " + numero1);
} else if (numero2 > numero1) {
  console.log("numero 2 è maggiore:  " + numero2);
} else {
  console.log("i numeri hanno lo stesso valore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
// Chiedi all'utente di inserire un numero intero

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 4;

if (numero !== 5) {
  console.log("not equal");
} else {
  console.log("Il numero è uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = 15;

if (number % 5 === 0) {
  console.log("divisibile per 5: " + number);
} else {
  console.log(number + " non è divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore = 8;
const valore2 = 0;

if (valore === 8 || valore2 === 8) {
  console.log("Uno dei numeri è 8.");
} else if (valore + valore2 === 8 || valore - valore2 === 8) {
  console.log("L'addizione o la sottrazione dei numeri è uguale a 8.");
} else {
  console.log("Nessun numero, somma o sottrazione ha come valore 8");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 125;
let shippingCost = 10;

if (totalShoppingCart >= 50) {
  shippingCost = 0;
} else if (totalShoppingCart < 50) {
  shippingCost = 10;
}

let totaleCarrello = totalShoppingCart + shippingCost;

console.log("Totale carrello: " + totalShoppingCart + "€");
console.log("Costo spedizione: " + shippingCost + "€");
console.log("Totale da pagare: " + totaleCarrello + "€");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalearticoli = 125;

const costoSpedizione = 10;

const scontoPercentuale = 20;
const sconto = (scontoPercentuale / 100) * totalearticoli;
const totaleConSconto = totalearticoli - sconto;

let totaleAddebitato;
if (totaleConSconto > 50) {
  totaleAddebitato = totaleConSconto;
  console.log("Costo spedizione 0€");
} else {
  totaleAddebitato = totaleConSconto + costoSpedizione;
  console.log("Spese di spedizione10€");
}

console.log("Totale: " + totalearticoli + "€");
console.log("Totale scontato: " + totaleAddebitato + "€");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valoreprova = 10;

console.log(typeof valoreprova);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function verificaParioDispari(numero) {
  if (15 % 2 === 0) {
    console.log(15 + " è un numero pari.");
  } else {
    console.log(15 + " è un numero dispari.");
  }
}
verificaParioDispari();

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Creazione di un array vuoto
let numeriArray = [];

for (let i = 1; i <= 10; i++) {
  numeriArray.push(i);
}

console.log(numeriArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numeriArray[numeriArray.length - 1] = 100;
console.log(numeriArray);
