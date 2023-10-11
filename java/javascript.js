/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) */
let miodiv = document.getElementById('testo');

let km =parseInt(prompt('Quanti km devi percorrere?'))
console.log(km);

let age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

const minorenne = 16;
const over = 65;

let Prezzobiglietto = (km * 0.21);
console.log(Prezzobiglietto);


if(isNaN(km) || isNaN(age)){
    miodiv.innerHTML=`<p> Inserisci dei numeri <p>`
}
else if( age <= minorenne){
    Prezzobiglietto = Prezzobiglietto - (Prezzobiglietto * 20/100);
    Prezzobiglietto = Prezzobiglietto.toFixed(2);
    miodiv.innerHTML = `<p> Ciao il prezzo del tuo biglietto è ${Prezzobiglietto} euro<p>`
}else if ( age >= over){
    Prezzobiglietto = Prezzobiglietto - (Prezzobiglietto * 40/100);
    Prezzobiglietto = Prezzobiglietto.toFixed(2);
    miodiv.innerHTML = `<p> Ciao il prezzo del tuo biglietto è ${Prezzobiglietto} euro<p>`
}else{
    miodiv.innerHTML = `<p> Ciao il prezzo del tuo biglietto è ${Prezzobiglietto} euro<p>`
}
