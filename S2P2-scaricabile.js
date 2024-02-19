// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: true,
}

let prices = [50, 5, 2] //Lista degli oggetti attualmente nel proggetto
const shippingCost = 50 //Costo fisso per le spedizioni
let utenteCheEffettuaLAcquisto = amy //Utente che effetua l'acquisto



function costototale(users,prices) {
  let totalcost=0;// costo del carello inziale
  for  (i=0; i<prices.length; i++){
    totalcost=totalcost + prices[i];
  }
  let totalcostscontato= totalcost - (totalcost*0.3) // costo del carrello scontato
  let totalcostsenzaspedizione= totalcost - shippingCost;// costo del carrello scontato e senza spedizione
  if(users.isAmbassador){
    console.log("Il costo totale è " + totalcostscontato)
  } else if(totalcost>100 || totalcostscontato>100){
    console.log("Il costo totale è " + totalcostsenzaspedizione)
  }
    else{
    console.log(totalcost)
  } // calcolo del costo totale
}
costototale(amy,prices)

   let utenti = [];
   utenti.push(marco);
   utenti.push(paul);
   utenti.push(amy);
   
   for (let i = 0; i < utenti.length; i++) {
     if (utenti[i].isAmbassador) {
       console.log(utenti[i].name + " è un ambassador");
     } else {
       console.log(utenti[i].name + " non è un ambassador");
     }
   }


  let ambassador = [];
for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    ambassador.push(utenti[i].name); // Aggiungi solo l'utente corrente, non l'intero array utenti
  }
}
console.log("gli ambassadors sono: " + ambassador.join(", "));