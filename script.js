const form = document.getElementById("form");
const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
}

// Event listener
form.addEventListener("submit", processFormData);
