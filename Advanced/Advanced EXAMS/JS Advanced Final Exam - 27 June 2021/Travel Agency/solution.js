window.addEventListener('load', solution);

function solution() {
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const code = document.getElementById('code');
    const btnSubmit = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBTN = document.getElementById('continueBTN');
    const infoPreview = document.getElementById('infoPreview');
    const block = document.getElementById('block');

    const elements = [fname, email, phone, address, code];

    const createElement = function (type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    };
    let currentInputValues;

    btnSubmit.addEventListener('click', (e) => {
        if (fname.value != '' && email.value != '') {
            btnSubmit.setAttribute('disabled', '');
            editBtn.removeAttribute('disabled');
            continueBTN.removeAttribute('disabled');

            const fullNameLi = createElement('li', `Full Name: ${fname.value}`);
            const emailLi = createElement('li', `Email: ${email.value}`);
            const phoneLi = createElement('li', `Phone Number: ${phone.value}`);
            const addressLi = createElement('li', `Address: ${address.value}`);
            const postalCodeLi = createElement('li', `Postal Code: ${code.value}`);

            const liElements = [fullNameLi, emailLi, phoneLi, addressLi, postalCodeLi];

            currentInputValues = elements.map((el) => el.value);
            liElements.forEach((el) => infoPreview.appendChild(el));
            elements.forEach((el) => (el.value = ''));
        }
    });

    editBtn.addEventListener('click', () => {
        elements.forEach((el, index) => {
            el.value = currentInputValues[index];
        });
        Array.from(infoPreview.children).forEach((child) => child.remove());
        editBtn.setAttribute('disabled', '');
        continueBTN.setAttribute('disabled', '');
        btnSubmit.removeAttribute('disabled');
    });

    continueBTN.addEventListener('click', (e) => {
        block.innerHTML = '';
        block.appendChild(createElement('h3', 'Thank you for your reservation!'));
    });
}
