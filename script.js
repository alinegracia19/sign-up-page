const createAccountBtn = document.getElementById("sign-up");
const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const emailElement = document.getElementById("email");
const phoneNumberElement = document.getElementById("phone-number");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirm-pass");
const formContainer = document.getElementById("form-container");

const notif = document.createElement("p");
notif.classList.add("notif");

// let firstName = "";
// let lastname = "";
// let email = "";
// let phoneNumber = "";
// let password = "";
// let confirmPass = "";

createAccountBtn.addEventListener("click", () => {
    if (!firstNameElement.checkValidity() || !lastNameElement.checkValidity() || !emailElement.checkValidity() || !phoneNumberElement.checkValidity() || !passwordElement.checkValidity() || !confirmPasswordElement.checkValidity()) {
        notif.textContent = "Please enter the correct data";
        formContainer.appendChild(notif);
    }
})