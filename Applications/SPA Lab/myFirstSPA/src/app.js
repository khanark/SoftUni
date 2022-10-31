import { showCatalogPage } from './catalog.js';
import { showAboutPage, showHomePage } from './home.js';
import { showLoginPage } from './login.js';
import { showRegisterPage } from './register.js';

document.getElementById('logoutBtn').addEventListener('click', onLogout);
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    homeBtn: showHomePage,
    aboutBtn: showAboutPage,
    catalogBtn: showCatalogPage,
    loginBtn: showLoginPage,
    registerBtn: showRegisterPage,
};

//initiate with the homepage
showHomePage();

function onNavigate(ev) {
    if (ev.target.nodeName !== 'A') {
        return;
    }
    const view = sections[ev.target.id];
    if (typeof view == 'function') {
        ev.preventDefault();
        view();
    }
}

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userdata'));
    if (userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
    // document.querySelector('nav').addEventListener('click', onNavigate);
}

async function onLogout(ev) {
    ev.stopImmediatePropagation();
    const { accessToken } = JSON.parse(sessionStorage.getItem('userdata'));
    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-authorization': { accessToken },
        },
    });
    sessionStorage.clear();
    showHomePage();
}
