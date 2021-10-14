/////////////////MAIL

//Chiedi all’utente la sua email

let userMail = prompt('Inserisci la tua mail');
console.log(userMail);

const approvedMails = ["prova1@gmail.com", "prova2@gmail.com", "prova3@gmail.com", "prova4@gmail.com"];

const negato = document.getElementById('negato');
const abilitato = document.getElementById('abilitato');


for (let index = 0; index < approvedMails.length; index++) {
    const approvedMail = approvedMails[index];

    if (userMail === approvedMail) {
        console.log('Accesso abilitato');
        abilitato.innerHTML = "Accesso abilitato";
        negato.style.display = "none";
    } else {
        console.log('Accesso negato');
        negato.innerHTML = "Accesso negato";
    }
}




//controlla che sia nella lista di chi può accedere

//stampa un messaggio appropriato sull’esito del controllo









/////////////////DADI

//Generare un numero random da 1 a 6,

//per il giocatore

//per il computer

//Stabilire il vincitore
  //in base a chi fa il punteggio più alto


