import { render, page, html } from './lib/lib.js';
import { showHomePage } from './views/home.js';
import { showCatalogPage } from './views/catalog.js';
import { showCreatePage } from './views/create.js';
import { showLoginPage } from './views/login.js';
import { showRegisterPage } from './views/register.js';
import { showDetailsPage } from './views/details.js';
import { logout } from './api/user.js';
import { showEditPage } from './views/edit.js';
import { showSearchPage } from './views/search.js';

const main = document.querySelector('main');

const userTemplate = (user, onLogout) => html`
  <div>
    <a href="/catalog">Dashboard</a>
    <a href="/search">Search</a>
  </div>
  ${user
    ? html` <div class="user">
        <a href="/create">Add Pair</a>
        <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
      </div>`
    : html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div> `}
`;

page(session);
page(setupContext);
page('/', showHomePage);
page('/catalog', showCatalogPage);
page('/create', showCreatePage);
page('/login', showLoginPage);
page('/register', showRegisterPage);
page('/details/:id', showDetailsPage);
page('/edit/:id', showEditPage);
page('/search/', showSearchPage);
page.start();

function setupContext(ctx, next) {
  // nav update
  render(userTemplate(ctx.user, onLogout), document.querySelector('nav'));
  ctx.render = content => render(content, main);
  next();
}

function session(ctx, next) {
  const user = JSON.parse(sessionStorage.getItem('userdata'));
  if (user) {
    ctx.user = user;
  }
  next();
}

async function onLogout() {
  await logout();
  page.redirect('/catalog');
}
