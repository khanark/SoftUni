import { page, render } from '/lib.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logout } from './api/users.js';

const main = document.querySelector('.container');

page(decorateContext);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);

page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
  logout();
  page.redirect('/');
});

function updateUserNav() {
  const userData = JSON.parse(sessionStorage.getItem('userdata'));
  const user = document.getElementById('user');
  const guest = document.getElementById('guest');
  if (userData) {
    guest.style.display = 'none';
    user.style.display = 'inline-block';
  } else {
    guest.style.display = 'inline-block';
    user.style.display = 'none';
  }
}

function decorateContext(ctx, next) {
  ctx.render = content => render(content, main);
  ctx.updateUserNav = updateUserNav;
  next();
}
