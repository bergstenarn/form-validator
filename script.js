const form = document.getElementById("form");
const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const signupAnotherBtn = document.getElementById("signup-another-btn");
const gotoSigninBtn = document.getElementById("goto-signin-btn");
const header = document.querySelector("h1");

let isFormValid = false;
let isPassword2Valid = false;
let passwordsMatch = false;

function validatePassword() {
  // Validate password using constraint API
  isPassword2Valid = password2Elem.checkValidity();
  passwordsMatch = password1Elem.value === password2Elem.value;
  if (isPassword2Valid && passwordsMatch) {
    password2Elem.style.borderColor = "limegreen";
  } else {
    password2Elem.style.borderColor = "red";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate form using constraint API
  isFormValid = form.checkValidity();
  validatePassword();
  if (isFormValid && passwordsMatch) {
    // Data is valid so submit
    message.textContent = "Successfully registered";
    message.style.color = "limegreen";
    messageContainer.style.borderColor = "limegreen";
    storeFormData();
    form.setAttribute("hidden", true);
    signupAnotherBtn.removeAttribute("hidden");
    gotoSigninBtn.removeAttribute("hidden");
    header.textContent = "Congratulations!";
  } else if (isFormValid && !passwordsMatch) {
    // Indicate that passwords don't match
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  } else {
    // Indicte that data other than password is incorrectly entered
    message.textContent = "Please fill out all fields correctly.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
}

function returnToSignup() {
  header.textContent = "Sign up today!";
  signupAnotherBtn.setAttribute("hidden", true);
  gotoSigninBtn.setAttribute("hidden", true);
  form.reset();
  validatePassword();
  message.textContent = "Don't hesitate!";
  message.style.color = "black";
  messageContainer.style.borderColor = "black";
  form.removeAttribute("hidden");
}

// Event listener
form.addEventListener("submit", processFormData);
password1Elem.addEventListener("input", validatePassword);
password2Elem.addEventListener("input", validatePassword);
