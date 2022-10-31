import { showSection } from './dom.js';
import { showHomePage } from './home.js';

const section = document.getElementById('loginSection');
section.remove();

export function showLoginPage() {
    showSection(section);
}

section.querySelector('form').addEventListener('submit', async ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { email, password } = Object.fromEntries(formData);

    if (email == '' || password == '') {
        alert('empty fields');
        return;
    }

    const userData = {
        email,
        password,
    };

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const response = await res.json();
        if (res.ok !== true) {
            throw new Error(response.message);
        }
        const { email, accessToken } = response;
        sessionStorage.setItem(
            'userdata',
            JSON.stringify({ email, accessToken })
        );
        debugger;
        showHomePage();
    } catch (error) {
        alert(error.message);
    }
});
