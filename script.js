const form =  document.querySelector(".form");
const fname = document.querySelector(".firstName");
const lname = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const errorMesgFirst = document.querySelector('.error-message-first');
const errorIconFirst = document.querySelector('.error-icon-first')

const errorMesgLast = document.querySelector('.error-message-last');
const errorIconLast = document.querySelector('.error-icon-last')

const errorMesgEmail  = document.querySelector('.error-message-email');
const errorIconEmail = document.querySelector('.error-icon-email')

const errorMesgPassword  = document.querySelector('.error-message-password');
const errorIconPassword = document.querySelector('.error-icon-password')


handlesubmit = event => {
    event.preventDefault();
    
    const fnameInput = fname.value;
    if(fnameInput === '') {
        errorMesgFirst.classList.add("d-block");
        errorIconFirst.classList.add("d-block");
        fname.style.border = "2px solid #FF7979";
    } else {
        errorMesgFirst.classList.remove("d-block");
        errorIconFirst.classList.remove("d-block");
    }

    const lnameInput = lname.value;
    if(lnameInput === '') {
        errorMesgLast.classList.add("d-block");
        errorIconLast.classList.add("d-block");
    } else {
        errorMesgLast.classList.remove("d-block");
        errorIconLast.classList.remove("d-block");
    }

    const emailInput = email.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailInput.match(emailRegex)) {
        errorMesgEmail.classList.add("d-block");
        errorIconEmail.classList.add("d-block");
    } else {
        errorMesgEmail.classList.remove("d-block");
        errorIconEmail.classList.remove("d-block");
    }

    const passwordInput = password.value;
    if(passwordInput === '') {
        errorMesgPassword.classList.add("d-block");
        errorIconPassword.classList.add("d-block");
    } else {
        errorMesgPassword.classList.remove("d-block");
        errorIconPassword.classList.remove("d-block");
    }
}