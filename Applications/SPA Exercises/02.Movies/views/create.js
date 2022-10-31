import { endpoints, getUserData, showSection } from '../scripts/common.js';
import { homePageView } from './home.js';

const form = document.getElementById('add-movie-form');

form.addEventListener('submit', handleForm);

export function createPageView(ev) {
  if (ev.target.nodeName !== 'A') {
    return;
  }
  ev.preventDefault();
  showSection(document.getElementById('add-movie'));
}

async function handleForm(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const { title, description, img } = Object.fromEntries(formData);
  if (title == '' || description == '' || img == '') {
    return alert('empty fields');
  }
  const { token } = getUserData();
  await fetch(endpoints.base, {
    method: 'post',
    headers: {
      'X-authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, img }),
  });
  homePageView();
}
