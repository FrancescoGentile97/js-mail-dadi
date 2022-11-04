const allowedUsers = ["pippo@gmail.com", "mario.rossi@gmail.com", "anna@gmail.com", "roberto@gmail.com"];
const containerEl = document.getElementById("container");
const emailEl = document.getElementById("email");
const confirmBtnEl = document.querySelector(".btn");
const allowedText = "Utente autorizzato.";
const errorText = "Utente non autorizzato."
const resultEl = document.getElementById('result');
const answerEl = document.getElementById('answer');
const resultBtnEl = document.getElementById('result-btn');

let email;

confirmBtnEl.addEventListener("click", function () {

    email = emailEl.value;
    let check = false;

    if (email === "") {
        alert("Inserisci il tuo indirizzo email.")
    } else {
        resultEl.classList.replace('d-none', 'd-block');
        containerEl.classList.replace('d-block', 'd-none');

        for (let i = 0; i < allowedUsers.length; i++) {
            if (email == allowedUsers[i]) {
                check = true;
            }

            if (check === true) {
                answerEl.innerHTML = allowedText;
                answerEl.classList.replace('text-danger', 'text-white');
                resultBtnEl.innerHTML = 'Esci';
            } else {
                answerEl.innerHTML = errorText;
                answerEl.classList.replace('text-white', 'text-danger');
                resultBtnEl.innerHTML = 'Riprova';
            };

        }
    }
});
resultBtnEl.addEventListener('click', function () {
    containerEl.classList.replace('d-none', 'd-block');
    resultEl.classList.replace('d-block', 'd-none');
    emailEl.value = '';
});