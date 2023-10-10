"use strict";

var ERRORS_CONFIG = {
  userName: {
    message: "Please type a valid userName"
  },
  userEmail: {
    message: "Please type a valid Email"
  },
  userPassword: {
    message: "Please type a valid password"
  },
  agree: {
    message: "Please check here"
  }
};

function showError(errorType) {
  var errorText = ERRORS_CONFIG[errorType];
  var errorWrapper = document.querySelector('.error');
  document.querySelector(".error").textContent = errorText;
  document.querySelector(".error").classList.add('active');
}

function submitForm() {
  var userName = document.querySelector('#userName');
  var userEmail = document.querySelector('#userEmail');
  var userPassword = document.querySelector('#userPassword');
  var agree = document.querySelector('#agree');

  if (!userName) {
    return false;
  }
}