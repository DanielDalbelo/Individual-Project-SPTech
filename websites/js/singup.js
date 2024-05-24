const singupButton = document.querySelector("#button_singup");
const indexButton = document.querySelector("#button_index");

function singup() {
    const user = input_user.value
    const email = input_email.value
    const password = input_password.value
    const passwordConfirm = input_password_confirmation.value
    let hasNumber = false;
    let errorList = ``;
    let hasError = false;



    if (user != "" && email != "" && password != "" && passwordConfirm != "") {

        if (user.length < 3 || user.length > 25) {
            errorList += `<p><span><span style="color: white;">&bull;&nbsp;</span>Digite um nome válido, entre 3-25 caracteres</p>`
            hasError = true;
        }

        if (email.indexOf('@') <= 0 || email.indexOf('.') <= 0) {
            errorList += `<p ><span style="color: white;">&bull;&nbsp;</span>O endereço de Email é invalido!</p>`
            hasError = true;
        }

        if (password.length >= 8 && password.length <= 16) {
            for (let i = 1; i <= password.length; i++) {
                if (!isNaN(parseInt(password[i]))) {
                    hasNumber = true;
                    break;
                }
            }
            if (hasNumber) {
                if (password != passwordConfirm) {
                    errorList += `<p ><span style="color: white;">&bull;&nbsp;</span>As senhas não se coincidem!</p>`
                    hasError = true
                }
            } else {
                errorList += `<p ><span style="color: white;">&bull;&nbsp;</span>Sua senha deve possuir pelo menos 1 caracter numérico!</p>`
                hasError = true
            }
        } else {

            errorList += `<p ><span style="color: white;">&bull;&nbsp;</span>Digite uma senha entre 8-16 caracteres</p>`
            hasError = true

        }
    } else {
        hasError = true;
        errorList += `<p ><span style="color: white;">&bull;&nbsp;</span>Preencha todos os campos</p>`
    }

    if (hasError == true) {
        div_errors.innerHTML = errorList;
        unsuccessful();
    } else {
        div_errors.innerHTML = ``;
        successful();
        /*



        Adicionar a webdatavizaqui!!



        */
    }
}

function returnIndex() {
    window.location.assign('index.html');
}

function unsuccessful() {
    span_gif.innerHTML = `<img class="gif" src="img/singupUnsuccessful.gif" alt="Sad-pikachu">`
    setTimeout(() => {
        span_gif.innerHTML = `<img class="gif" src="img/pikachu.gif" alt="Pikachu">`
    }, 2000);
}

function successful() {
    span_gif.innerHTML = `<img class="gif" src="img/singup.gif" alt="Happy-pikachu">`
    setTimeout(() => {
        window.location.assign('index.html');
    }, 2000);
}

indexButton.addEventListener("click", returnIndex);
singupButton.addEventListener("click", singup);