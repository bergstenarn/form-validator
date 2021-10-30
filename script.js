const form = document.getElementById("form");
const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if passwords match
  if (password1Elem.value === password2Elem.value) {
    passwordsMatch = true;
    password1Elem.style.borderColor = "lightgreen";
    password2Elem.style.borderColor = "lightgreen";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1Elem.style.borderColor = "red";
    password2Elem.style.borderColor = "red";
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully registered";
    message.style.color = "lightgreen";
    messageContainer.style.borderColor = "lightgreen";
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
  // Validate form
  validateForm();
  // Submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event listener
form.addEventListener("submit", processFormData);
