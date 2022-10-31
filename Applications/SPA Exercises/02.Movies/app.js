import { endpoints, getUserData } from './scripts/common.js';
import { createPageView } from './views/create.js';
import { editPageView } from './views/edit.js';
import { homePageView } from './views/home.js';
import { loginPageView } from './views/login.js';
import { registerPageView } from './views/register.js';

const navEl = document.querySelector('nav');
const addBtn = document.getElementById('add-movie-button');
const movieList = document.getElementById('movies-list');

navEl.addEventListener('click', navigate);
addBtn.addEventListener('click', createPageView);
movieList.addEventListener('click', movieNav);

// initially load the homePage
homePageView();

const nav = {
  Login: loginPageView,
  Register: registerPageView,
  Movies: homePageView,
  Logout: logout,
};

const movieActions = {
  Edit: editPageView,
  Delete: onDelete,
};

function navigate(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'A') {
    return;
  }
  const view = nav[ev.target.textContent];
  view();
}

function movieNav(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'A') {
    return;
  }
  const click = movieActions[ev.target.textContent];
  click(ev);
}

async function logout() {
  const userData = getUserData();
  if (!userData) {
    return;
  }
  const { token } = userData;
  await fetch('http://localhost:3030/users/logout', {
    method: 'get',
    headers: {
      'X-authorization': token,
    },
  });
  sessionStorage.removeItem('userdata');
  homePageView();
}

async function onDelete(ev) {
  const { token } = getUserData();
  await fetch(endpoints.catalog(ev.target.dataset.movieid), {
    method: 'delete',
    headers: {
      'X-authorization': token,
    },
  });
  homePageView();
}
