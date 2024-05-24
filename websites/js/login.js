const loginButton = document.querySelector("#button_login");
const indexButton = document.querySelector("#button_index");

function chkLogin() {
    const loginBox = document.querySelector(".login-box");
    const username = input_username.value;
    const senha = input_senha.value;
    let approved = false;


    if (username == ''){
        user_error.innerHTML = `Digite o nome de usuário ***`
        approved = false
    }
    if(senha == '') {
        password_error.innerHTML = `Digite a senha ***`
        approved = false
    } 
    if(!approved){
        unsuccessful();
    }
        /*
       
       
       
       
        Adicionar aqui a webdataviz
       



       
        */

    if (approved) {
        alert('Autenticado com sucesso!');
        successful();
    }
}

function unsuccessful() {
    span_gif.innerHTML = `<img class="img-ryu" src="img/loginUnsuccessful.gif" alt="Ryu">`
    setTimeout(() => {
        span_gif.innerHTML = `<img class="img-ryu" src="img/ryu.gif" alt="Ryu">`
    }, 2000);
}

function successful() {
    span_gif.innerHTML = `<img class="img-ryu" src="img/loginSuccessful.gif" alt="Ryu">`
    setTimeout(() => {
        window.location.assign('dashboard.html');
    }, 2000);
}

function returnIndex(){
    window.location.assign('index.html');
}

loginButton.addEventListener("click", chkLogin);
indexButton.addEventListener("click", returnIndex);