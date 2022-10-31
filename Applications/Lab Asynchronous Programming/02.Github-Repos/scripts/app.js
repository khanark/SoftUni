function loadRepos() {
  const inputField = document.getElementById('username');
  const repoList = document.getElementById('repos');
  const baseUrl = 'https://api.github.com/users/';

  fetch(`${baseUrl}${inputField.value}/repos`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((result) => {
      result.forEach((repo) => {
        const li = document.createElement('li');
        const linkItem = document.createElement('a');

        linkItem.href = repo.html_url;
        linkItem.textContent = repo.full_name;

        li.appendChild(linkItem);
        repoList.appendChild(li);
      });
    })
    .catch((err) => {
      repoList.innerHTML = '';

      const li = document.createElement('li');
      li.textContent = err;

      repoList.appendChild(li);
    });
}
