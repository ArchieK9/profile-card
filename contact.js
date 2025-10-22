"use strict";

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError("name-error", "Full name is required.");
    isValid = false;
  }

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (emailValue === "") {
    showError("email-error", "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    showError("email-error", "Please enter a valid email address.");
    isValid = false;
  }

  if (subjectInput.value.trim() === "") {
    showError("subject-error", "Subject is required.");
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    showError("message-error", "Message must be at least 10 characters long.");
    isValid = false;
  }

  if (isValid) {
    successMessage.hidden = false;t
    form.reset(); 

    setTimeout(() => {
      successMessage.hidden = true;
    }, 5000);
  } else {
    successMessage.hidden = true; 
  }
});

function showError(errorId, message) {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = message;
}

function clearErrors() {
  const allErrors = document.querySelectorAll(".error");
  allErrors.forEach((el) => (el.textContent = ""));
}
