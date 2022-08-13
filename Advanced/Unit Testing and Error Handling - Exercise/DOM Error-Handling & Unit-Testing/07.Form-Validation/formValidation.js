function validate() {
    // get the required DOM elements
    const user = document.querySelector('#username');
    const password = document.querySelector('#password');
    const email = document.querySelector('#email');
    const confirmPassword = document.querySelector('#confirm-password');
    const btn = document.querySelector('#submit');
    const div = document.querySelector('#valid');
    const companyCheckbox = document.querySelector('[type="checkbox"]');
    const companyInfo = document.querySelector('#companyInfo');
    const companyNumber = document.querySelector('#companyNumber');

    // validation regExps
    const validUserName = /^[a-zA-Z0-9]{3,20}$/;
    const validPassword = /^\w{5,15}$/;
    const validEmail = /.*([@]).*([.]{1,}).*/;
    const validNumber = /^\d{4}$/;

    // validate all the fields
    btn.addEventListener('click', event => {
        event.preventDefault();
        let isValid = true;

        // username validation
        if (!validUserName.test(user.value)) {
            isValid = false;
            user.style.borderColor = 'red';
        } else {
            user.style.border = 'none';
        }

        // password validation
        if (!validPassword.test(password.value)) {
            isValid = false;
            password.style.borderColor = 'red';
        } else {
            password.style.border = 'none';
        }

        // email validation
        if (!validEmail.test(email.value)) {
            isValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.border = 'none';
        }

        // confirmPassword validation
        if (
            password.value != confirmPassword.value ||
            confirmPassword.value.length == 0
        ) {
            isValid = false;
            confirmPassword.style.borderColor = 'red';
        } else {
            confirmPassword.style.border = 'none';
        }

        // company checkbox opens if checked
        if (companyCheckbox.checked) {
            companyInfo.style = 'display: block;';
            // company number validation
            if (!validNumber.test(companyNumber.value)) {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        } else {
            companyInfo.style = 'display: none;';
        }

        // if everything is valid the div turn green else the div disappears
        if (isValid) {
            div.style = 'display: block';
        } else {
            div.style = 'display: none';
        }
    });
}
