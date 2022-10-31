import { endpoints, getUserData, showSection } from '../scripts/common.js';
import { homePageView } from './home.js';

const form = document.querySelector('#edit-movie > form');
let movieInfo;

form.addEventListener('submit', handleForm);

export function editPageView(ev) {
  movieInfo = {
    title: ev.target.parentNode.parentNode
      .querySelector('h1')
      .textContent.replace('Movie title: ', ''),
    img: ev.target.parentNode.parentNode.querySelector('img').src,
    description: ev.target.parentNode.parentNode.querySelector('p').textContent,
    id: ev.target.dataset.movieid,
  };
  const [title, description, img] = Object.values(
    document.querySelector('#edit-movie > form')
  );
  title.value = movieInfo.title;
  description.value = movieInfo.description;
  img.value = movieInfo.img;
  showSection(document.getElementById('edit-movie'));
}

async function handleForm(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const { title, description, img } = Object.fromEntries(formData);
  if (title == '' || description == '' || img == '') {
    return alert('empty fields');
  }
  const { token } = getUserData();
  await fetch(endpoints.catalog(movieInfo.id), {
    method: 'put',
    headers: {
      'X-authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description, img }),
  });
  homePageView();
}
