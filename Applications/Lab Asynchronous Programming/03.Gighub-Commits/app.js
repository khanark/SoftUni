function loadCommits() {
  const username = document.getElementById('username').value;
  const repo = document.getElementById('repo').value;
  const commitList = document.getElementById('commits');
  const baseUrl = 'https://api.github.com/repos/';

  fetch(`${baseUrl}${username}/${repo}/commits`)
    .then((res) => {
      if (res.status == 404) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then((result) => {
      result.forEach((commit) => {
        const authorName = commit.commit.author.name;
        const commitMessage = commit.commit.message;

        const li = document.createElement('li');
        li.textContent = `${authorName}: ${commitMessage}`;

        commitList.appendChild(li);
      });
    })
    .catch((err) => {
      commitList.innerHTML = '';
      const li = document.createElement('li');
      li.textContent = `Error: ${err.message} (Not Found)`;
      commitList.appendChild(li);
    });
}
