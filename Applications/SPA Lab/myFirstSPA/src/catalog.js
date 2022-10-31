import { showSection } from './dom.js';
import { e } from './dom.js';

const section = document.getElementById('catalogSection');
section.remove();

export function showCatalogPage() {
    showSection(section);
}

(async function getMovies() {
    section.querySelector('ul').replaceChildren(e('p', {}, 'Loading...'));
    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();
    section.querySelector('ul').replaceChildren(...movies.map(listMovies));
})();

function listMovies(movie) {
    return e('li', {}, movie.title);
}
