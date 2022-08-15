function validate() {
    const user = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const checkbox = document.querySelector('#company');
    const submit = document.querySelector('#submit');
    const div = document.querySelector('#valid');
    const companyInfo = document.querySelector('#companyInfo');
    const companyNumber = document.querySelector('#companyNumber');

    checkbox.addEventListener('change', e => {
        e.preventDefault();
        if (checkbox.checked) {
            div.style = 'display: none';
            companyInfo.style = 'display: block;';
            if (!/^[\d]{4}$/.test(companyNumber.value)) {
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            }
        } else {
            companyInfo.style = 'display: none;';
        }
    });

    submit.addEventListener('click', e => {
        e.preventDefault();
        const invalidElements = [];

        // username validation
        if (!/^[a-zA-Z0-9]{3,20}$/.test(user.value)) {
            invalidElements.push(user);
        }

        // password validation
        if (
            !/^[\w]{5,15}$/.test(password.value) ||
            password.value != confirmPassword.value
        ) {
            invalidElements.push(password);
        }

        // confirmPassword validation
        if (
            !/^[\w]{5,15}$/.test(confirmPassword.value) ||
            password.value != confirmPassword.value
        ) {
            invalidElements.push(confirmPassword);
        }

        // email validation
        if (!/.*[@].*[.]{1,}.*/.test(email.value)) {
            invalidElements.push(email);
        }

        if (checkbox.checked) {
            div.style = 'display: none';
            companyInfo.style = 'display: block;';
            if (!/^[\d]{4}$/.test(companyNumber.value)) {
                invalidElements.push(companyNumber);
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            }
        }

        invalidElements.forEach(element => (element.style.borderColor = 'red'));
        invalidElements.length == 0
            ? (div.style = 'display: block')
            : (div.style = 'display: none');
    });
}
