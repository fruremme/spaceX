document.addEventListener('DOMContentLoaded', (event) => {

    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');

    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    const success = document.getElementById('success');
    const submitbutton = document.getElementById('submit');

    const validate = (element, type) => {
        const lengthIsGreaterThan = (length) => {
            return element.value.trim().length > length;
        }

        const isValidEmail = () => {
            const emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(element.value);
        }

        if (type === 'name') {
            return lengthIsGreaterThan(1);
        }
        if (type === 'email') {
            return isValidEmail();
        }
        if (type === 'phone') {
            return lengthIsGreaterThan(7);
        }
        if (type === 'message') {
            return lengthIsGreaterThan(9);
        }
    }

    const validateForm = () => {
        let isValid = true;

        if (validate(firstName, 'name') === false) {
            console.log('invalid');
            isValid = false;
            firstNameError.classList.remove('hidden');
        } else {
            console.log('valid');
            firstNameError.classList.add('hidden');
        }

        if (validate(lastName, 'name') === false) {
            isValid = false;
            lastNameError.classList.remove('hidden');
        } else {
            lastNameError.classList.add('hidden');
        }

        if (validate(email, 'email') === false) {
            isValid = false;
            emailError.classList.remove('hidden');
        } else {
            emailError.classList.add('hidden');
        }

        if (validate(phone, 'phone') === false) {
            isValid = false;
            phoneError.classList.remove('hidden');
        } else {
            phoneError.classList.add('hidden');
        }

        if (validate(message, 'message') === false) {
            isValid = false;
            messageError.classList.remove('hidden');
        } else {
            messageError.classList.add('hidden');
        }

        return isValid;
    }

    const sendForm = () => {

        if (validateForm()) {
            success.classList.remove('hidden');
        } else {
            success.classList.add('hidden');
        }
    }

    submitbutton.addEventListener('click', () => {
        sendForm();
    })

});