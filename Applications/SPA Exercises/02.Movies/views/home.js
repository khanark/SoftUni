import {
  endpoints,
  getUserData,
  showSection,
  switchStyles,
} from '../scripts/common.js';

let userData = null;

export function homePageView() {
  showSection(document.getElementById('home-page'));
  getMovies();
  updateNav();
}

function updateNav() {
  userData = getUserData();
  if (userData !== null) {
    switchStyles({ guest: none, user: 'inline-block' });
    const greetElement = document.getElementById('welcome-msg');
    greetElement.textContent = `Welcome, ${userData.email}`;
  } else {
    switchStyles({ guest: 'inline-block', user: none });
  }
}

async function getMovies() {
  try {
    const res = await fetch(endpoints.base);
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    const movieList = document.getElementById('movies-list');
    movieList.replaceChildren(...data.map(listMovie));
  } catch (error) {
    alert(error.message);
  }
}

function listMovie(movie) {
  let isOwner = userData && movie._ownerId == userData.id;
  const checkOwner = () => (!isOwner ? 'style="display:none"' : '');
  const div = document.createElement('div');
  div.className = 'container';
  // !: FIX THE LIKES
  const html = `      
		<div class="row bg-light text-dark">
		<h1>Movie title: ${movie.title}</h1>
		<div class="col-md-8">
		<img
			class="img-thumbnail"
			src="${movie.img}"
			alt="Movie"
		/>
		</div>
		<div class="col-md-4 text-center">
		<h3 class="my-3">Movie Description</h3>
		<p>${movie.description}</p>
		<a class="btn btn-danger" href="#" ${checkOwner()} data-movieId="${
    movie._id
  }">Delete</a>
		<a class="btn btn-warning" href="#" ${checkOwner()} data-movieId="${
    movie._id
  }">Edit</a>
		<a class="btn btn-primary" href="#" ${
      isOwner || !userData ? 'style="display:none"' : ''
    } data-movieId="${movie._id}">Like</a>
		<span class="enrolled-span" ${checkOwner()}>Liked </span>
		</div>
		</div>`;
  div.innerHTML = html;
  return div;
}
