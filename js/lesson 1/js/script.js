let value = 5;
let degree = 3;
let result = Math.pow(5, 3);

console.log(result);


// ADDITIONAL TASK
const credentials = {
    login: 'admin',
    password: 'qwerty',
};

const userField = document.getElementById('user_field');
const passwordField = document.getElementById('password_field');
const formStatus = document.getElementById('form_status');

function myFunction() {
    console.log(userField.value);
    if (userField.value.length === 0 || passwordField.value.length === 0) {
        formStatus.innerText = 'Поля мають бути заповнені';
        formStatus.classList.replace('no-status', 'warning');
        formStatus.classList.replace('access', 'warning');
        return;
    }

    if (credentials.login !== userField.value || credentials.password !== passwordField.value) {
        formStatus.innerText = 'Неправильний логін або пароль';
        formStatus.classList.replace('no-status', 'warning');
        formStatus.classList.replace('access', 'warning');
        return;
    }

    formStatus.innerText = 'Вітаємо в нас';
    formStatus.classList.replace('no-status', 'access');
    formStatus.classList.replace('warning', 'access');
}

document.querySelector('button').addEventListener('click', myFunction);