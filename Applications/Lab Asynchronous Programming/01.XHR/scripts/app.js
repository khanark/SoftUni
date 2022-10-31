function loadRepos() {
  const url = 'https://api.github.com/users/testnakov/repos';

  fetch(url)
    .then((response) => {
      if (response.status == 200) {
        return response.text();
      } else {
        throw new Error(response.status);
      }
    })
    .then((result) => (document.getElementById('res').textContent += result))
    .catch((err) => console.log(err.message));
}
