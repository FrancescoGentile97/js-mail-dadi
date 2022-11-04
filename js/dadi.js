const throwContainerEl = document.querySelector("div.d-flex");
const resultContainerEl = document.querySelector("div.text-white");
const throwBtnEl = document.getElementById("throw-btn");
const answerEl = document.querySelector("h1");
const userResultEl = document.getElementById("human");
const iaResultEl = document.getElementById("ia");
const resultBtnEl = document.getElementById('result-btn');

let userValue;
let iaValue;

// creare un event click che crei dei numeri random da 1-6
throwBtnEl.addEventListener(`click`, function () {
    // il +1 per raggiungere le 6 facce del dado e togliere lo 0
    userValue = Math.floor(Math.random() * 6) + 1;
    iaValue = Math.floor(Math.random() * 6) + 1;


    throwContainerEl.classList.replace('d-flex', 'd-none');
    resultContainerEl.classList.replace('d-none', 'd-flex');

    // aggiungere un messaggio in caso di vittoria,sconffitta,pareggio
    if(userValue > iaValue){
        answerEl.innerHTML = "Complimenti hai vinto";
    }else if(userValue < iaValue){
        answerEl.innerHTML = "Ritenta sarai più fortunato";
    }else{
        answerEl.innerHTML = "Pareggio,tira ancora";
    };

    // stampare un piccolo messaggio che indichi il valore lanciato da player e l'ia
    userResultEl.innerHTML = `Il tuo punteggio è: ${userValue}`;
    iaResultEl.innerHTML = `Il punteggio del computer è: ${iaValue}`;

});


//  creare la funzione del bottone che riporta l'html alla base
resultBtnEl.addEventListener("click", function(){
    resultContainerEl.classList.replace('d-flex', 'd-none');
    throwContainerEl.classList.replace('d-none', 'd-flex');
});

