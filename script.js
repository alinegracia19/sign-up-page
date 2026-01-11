const createAccountBtn = document.getElementById("sign-up");
const formContainer = document.getElementById("form-container");
const firstNameElement = document.getElementById("first-name");
const lastNameElement = document.getElementById("last-name");
const emailElement = document.getElementById("email");
const phoneNumberElement = document.getElementById("phone-number");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirm-pass");
const passContainer = document.getElementById("pass-container");
const passValidation = document.querySelector("ul");
const list1 = document.getElementById("li1");
const list2 = document.getElementById("li2");
const list3 = document.getElementById("li3");
const lastElement = document.getElementById("last");

const notif = document.createElement("p");
notif.classList.add("notif");
const confirm = document.createElement("p");
confirm.classList.add("notif");

let password = "";


passwordElement.addEventListener("input", e => {
    passValidation.style.display = "block";
    password = e.target.value;
    if (password.length >= 8) {
        list1.classList.add("valid");
    } else {
        list1.classList.remove("valid");
    }

    if (password.match(/\d+/g)) {
        list2.classList.add("valid");
    } else {
        list2.classList.remove("valid");
    }

    if (password.match(/\W/g)) {
        list3.classList.add("valid");
    } else {
        list3.classList.remove("valid");
    }
})

confirmPasswordElement.addEventListener("input", e => {
    let confirmPassword = e.target.value;
    if (confirmPassword !== password) {
        confirm.textContent = "The password is not match";
        lastElement.appendChild(confirm);
    } else {
        confirm.classList.remove("notif");
        confirm.classList.add("valid");
        confirm.textContent = "The password match";
    }
})

createAccountBtn.addEventListener("click", () => {
    if (!firstNameElement.checkValidity() || !lastNameElement.checkValidity() || !emailElement.checkValidity() || !phoneNumberElement.checkValidity() || !passwordElement.checkValidity() || !confirmPasswordElement.checkValidity()) {
        notif.textContent = "Please enter the correct data";
        formContainer.appendChild(notif);
    } else {
        alert("Thank you for joining us!");
    }
})
