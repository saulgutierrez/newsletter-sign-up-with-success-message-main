const button = document.querySelector('.btn');
let card2 = document.querySelector('.card-2');

card2.style.display = "none";

button.addEventListener('click', function (e) {
    e.preventDefault();

    let email = document.querySelector('.email-input');
    let emailValue = document.querySelector('.email-input').value;
    let alert = document.querySelector('.alert');
    let emailValidation = validateEmail(email.value);
    let card1 = document.querySelector('.card-1');
    let mainContainer = document.querySelector('.main-container');
    let replaceEmail = 'ash@loremcompany.com';

    if (emailValidation == false && email.value != "") {
        email.style.border = "1px solid red";
        email.style.backgroundColor = "hsl(5, 100%, 95%)";
        email.style.color = "hsl(1, 90%, 85%)";
        alert.innerHTML = "Valid email required";
    } else if (email.value == "") {
        email.style.border = "1px solid red";
        email.style.backgroundColor = "hsl(5, 100%, 95%)";
        email.style.color = "hsl(1, 90%, 85%)";
        alert.innerHTML = "Email cannot be empty";
    } else {
        card1.style.display = "none";
        card2.style.display = "flex";
        let textElement = document.querySelector('.text');
        let text = document.querySelector('.text').innerHTML;
        let updateText = text.replace(replaceEmail, emailValue);
        textElement.innerHTML = updateText;
        mainContainer.classList.add('success-screen');
    }
});

function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}