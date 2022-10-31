const URL = 'http://localhost:3030/data';

export const endpoints = {
  base: URL + '/movies',
  catalog: id => URL + '/movies/' + id,
  getMovieLikes: movieId =>
    URL + `/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`,
};

export function showSection(section) {
  document
    .querySelectorAll('.view-section')
    .forEach(section => (section.style.display = 'none'));
  section.style.display = 'block';
}

export async function getMovieLikes(movieId) {
  const res = await fetch(endpoints.getMovieLikes(movieId));
  const count = await res.json();
  return count;
}

export function switchStyles(styleObj) {
  Object.keys(styleObj).forEach(key => {
    Array.from(document.getElementsByClassName(key)).forEach(
      el => (el.style.display = styleObj[key])
    );
  });
}

export function getUserData() {
  const userData = JSON.parse(sessionStorage.getItem('userdata'));
  return userData;
}

export function setUserData(data) {
  sessionStorage.setItem('userdata', JSON.stringify(data));
}
