/////////////////MAIL

//Chiedi all’utente la sua email

/* 
let userMail = prompt('Inserisci la tua mail');
console.log(userMail);

const approvedMails = ["prova1@gmail.com", "prova2@gmail.com", "prova3@gmail.com", "prova4@gmail.com"];

const negato = document.getElementById('negato');
const abilitato = document.getElementById('abilitato');


//controlla che sia nella lista di chi può accedere
for (let index = 0; index < approvedMails.length; index++) {
    const approvedMail = approvedMails[index];

    //stampa un messaggio appropriato sull’esito del controllo
    if (userMail === approvedMail) {
        console.log('Accesso abilitato');
        abilitato.innerHTML = "Accesso abilitato";
        negato.style.display = "none";
    } else {
        console.log('Accesso negato');
        negato.innerHTML = "Accesso negato";
    }
}
 */






/////////////////DADI

//Generare un numero random da 1 a 6,


const user = document.getElementById("user_play")
const pc = document.getElementById("pc_play")
const risultato = document.getElementById("risultato")

//per il giocatore
var userPlay = Math.floor((Math.random() * 6) + 1);
console.log("il tuo numero: ", userPlay);

user.insertAdjacentHTML("beforeend", userPlay);



//per il computer
var pcPlay = Math.floor((Math.random() * 6) + 1);
console.log("il numero del pc: ", pcPlay);

pc.insertAdjacentHTML("beforeend", pcPlay);


//Stabilire il vincitore
//in base a chi fa il punteggio più alto
if (userPlay > pcPlay) {
    console.log("hai vinto");
    risultato.innerHTML = "HAI VINTO!!"
} else if (userPlay < pcPlay) {
    console.log("il pc ha vinto");
    risultato.innerHTML = "Hai perso"
} else {
    console.log("pareggio");
    risultato.innerHTML = "Pareggio"
}





