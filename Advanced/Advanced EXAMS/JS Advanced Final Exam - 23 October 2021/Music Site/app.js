window.addEventListener('load', solve);

function solve() {
  const genre = document.getElementById('genre');
  const name = document.getElementById('name');
  const author = document.getElementById('author');
  const date = document.getElementById('date');
  const addBtn = document.getElementById('add-btn');
  const totalLikesParagraph = document.querySelector('.likes p');
  const savedContainer = document.querySelector('.saved-container');

  const allHitsContainer = document.querySelector('.all-hits-container');

  const elements = [genre, name, author, date];

  const createElement = function (type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }

    return element;
  };

  const append = function (parent, items) {
    items.forEach(item => parent.appendChild(item));
  };

  // global variable to store the total likes for all the songs
  let likes = 0;

  addBtn.addEventListener('click', e => {
    e.preventDefault();

    // validation check
    if (elements.every(el => el.value !== '')) {
      const div = createElement('div', '', 'hits-info');

      const img = createElement('img');
      img.src = './static/img/img.png';

      const h2Genre = createElement('h2', `Genre: ${genre.value}`);
      const h2Name = createElement('h2', `Name: ${name.value}`);
      const h2Author = createElement('h2', `Author: ${author.value}`);
      const h3Date = createElement('h3', `Date: ${date.value}`);

      const saveBtn = createElement('button', 'Save song', 'save-btn');
      const likeBtn = createElement('button', 'Like song', 'like-btn');
      const deleteBtn = createElement('button', 'Delete', 'delete-btn');

      const items = [
        img,
        h2Genre,
        h2Name,
        h2Author,
        h3Date,
        saveBtn,
        likeBtn,
        deleteBtn,
      ];

      append(div, items);
      allHitsContainer.appendChild(div);

      // clear the inputs
      elements.forEach(el => (el.value = ''));

      // when the like btn is clicked
      likeBtn.addEventListener('click', e => {
        likes++;
        totalLikesParagraph.textContent = `Total Likes: ${likes}`;
        e.srcElement.setAttribute('disabled', '');
      });

      // when the save song btn is clicked
      saveBtn.addEventListener('click', e => {
        savedContainer.appendChild(div);
        div.removeChild(saveBtn);
        div.removeChild(likeBtn);
      });

      // when the delete btn is clicked
      deleteBtn.addEventListener('click', e => {
        div.remove();
      });
    }
  });
}