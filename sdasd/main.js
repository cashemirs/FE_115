const ERRORS_CONFIG = {
    userName: {
        message: "Please type a valid userName"

    },

    userEmail:{
        message: "Please type a valid Email"
    },

    userPassword: {
        message: "Please type a valid password"
    },

    agree: {
        message: "Please check here"
    }

}

function showError(errorType) {
    const errorText = ERRORS_CONFIG[errorType];
    const errorWrapper = document.querySelector('.error')
    document.querySelector(".error").textContent = errorText;
    document.querySelector(".error").classList.add('active')

}

function submitForm() {
    const userName = document.querySelector('#userName')
    const userEmail = document.querySelector('#userEmail')

    const userPassword = document.querySelector('#userPassword')
    const agree = document.querySelector('#agree')
    if (!userName) {
        return false;
    }

}