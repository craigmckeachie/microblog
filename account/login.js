/* Landing Page JavaScript */

"use strict";

//get html elements
const loginForm = document.querySelector("#loginForm");
const loginButton = document.querySelector("#loginButton");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");

//functions

function handleLoginButtonClick() {
  const loginData = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  // Disables the button after the form has been submitted already:
  loginButton.disabled = true;

  // Time to actually process the login using the function from auth.js!
  login(loginData);
}

//associate functions with events
loginButton.onclick = handleLoginButtonClick;

//page loading
