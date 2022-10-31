import { showSection } from './dom.js';
import { showHomePage } from './home.js';

const section = document.getElementById('registerSection');
section.remove();

export function showRegisterPage() {
    showSection(section);
}

section.querySelector('form').addEventListener('submit', async ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const { email, password, repass } = Object.fromEntries(formData);

    if (email == '' || password == '' || repass == '') {
        alert('Empty email field');
        return;
    }

    if (password !== repass) {
        alert('Incorrect password');
        return;
    }

    try {
        debugger;
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const response = await res.json();
        if (res.ok !== true) {
            throw new Error(response.message);
        }
        const { accessToken } = response;
        sessionStorage.setItem(
            'userdata',
            JSON.stringify({ email, accessToken })
        );
        showHomePage();
    } catch (error) {
        alert(error.message);
    }
});
