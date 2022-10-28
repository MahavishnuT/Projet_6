// DOM elements
const everyFormInputs = document.querySelectorAll("form input");
const modal = document.getElementById("contact_modal");
const form = document.querySelector("form");
const submitBtn = document.querySelector("form .contact_button");
const errorMsg = document.querySelector(".error-msg");
const modalTitle = document.querySelector(".photographer-presentation h2");
const formElement = document.querySelectorAll(".form-element");

// regex
const regexFirstLastName = /^[a-zA-Z\u00e0-\u00ff]+(([- ])?[a-zA-Z\u00e0-\u00ff])+$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// validation of inputs
everyFormInputs.forEach(input => {
    input.addEventListener("input", function() {
      inputValidation(input)})
  })

function inputValidation(input) {

    // creation of a boolean to check if there is
    // an error in at least one input
    let isErrorInInput = false;
  
    if(input.getAttribute("name") === "email") {
        if(regexEmail.test(input.value)) {
        console.log("email input.value :", input.value)
        }
        else {
        isErrorInInput = true;
        }
    }

    else if(input.getAttribute("type") === "text") {
        if(input.value.length >= 2 && regexFirstLastName.test(input.value)) {
            console.log("name, surname, text, input.value :", input.value)
        }
        else {
            isErrorInInput = true;
        }
    }

    return isErrorInInput;
}

/**
 *  * checks if there's an error in the form when sumit btn is clicked
 * and returns a boolean
 */
 function checkForm() {
    let isErrorInForm = false;
  
    everyFormInputs.forEach(input => {
      if(inputValidation(input)) {
        isErrorInForm = true;
        console.error("error on " , input)
      }
    })
    return isErrorInForm
  }

  form.addEventListener("submit", handleForm);

  /**
 * checks if there's still an error in form and displays the "thank you"
 * message if there's none
 */

function handleForm(e) {
    e.preventDefault();
    const isCheckFormErrors = checkForm();
  
    if(isCheckFormErrors) {
      console.log("button disabled");
      displayModal();
      errorMsg.style.display = "block";
    }
    else {
        form.reset();
        formElement.forEach(form => {
            form.style.display = "none";
        })
        modalTitle.textContent = "Message envoyé!";
        submitBtn.style.display = "none";
    }
  }