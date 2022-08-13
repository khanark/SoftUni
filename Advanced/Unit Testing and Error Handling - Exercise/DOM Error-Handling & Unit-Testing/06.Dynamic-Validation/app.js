function validate() {
    // get the email dom element
    const email = document.querySelector('#email');

    // create valid regex for the email validation
    const validEmail = /[a-z0-9]+@[a-z0-9]+.[a-z0-9]+/g;

    // add or remove "error" class depending on the email validation status
    email.addEventListener('change', () => {
        if (validEmail.test(email.value) == false) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    });
}
