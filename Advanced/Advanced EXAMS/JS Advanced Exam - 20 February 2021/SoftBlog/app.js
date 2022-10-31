function solve() {
  const creator = document.getElementById('creator');
  const title = document.getElementById('title');
  const category = document.getElementById('category');
  const content = document.getElementById('content');
  const createBtn = document.querySelector('.create');
  const posts = document.querySelector('.site-content>main>section');
  const archives = document.querySelector('.archive-section ol');

  createBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const article = createArticle();
    posts.appendChild(article);

    article.addEventListener('click', function (event) {
      if (event.target.nodeName !== 'BUTTON') {
        return;
      }

      const button = event.target.className;

      if (button == 'btn delete') {
        article.remove();
      } else if (button == 'btn archive') {
        archives.appendChild(
          createElement('li', article.firstChild.textContent)
        );

        Array.from(archives.children)
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach((li) => archives.appendChild(li));
      }
    });
  });

  function createArticle() {
    const article = createElement('article');
    const h1 = createElement('h1', title.value);
    const categoryP = createElement('p', `Category: `);
    const pCategoryStrong = createElement('strong', category.value);
    const creatorP = createElement('p', 'Creator: ');
    const pCreatorStrong = createElement('strong', creator.value);
    const contentP = createElement('p', content.value);
    const div = createElement('div', '', 'buttons');
    const deleteBtn = createElement('button', 'Delete', 'btn delete');
    const archiveBtn = createElement('button', 'Archive', 'btn archive');

    const buttons = [deleteBtn, archiveBtn];
    const elements = [h1, categoryP, creatorP, contentP, div];

    appendItems(categoryP, [pCategoryStrong]);
    appendItems(creatorP, [pCreatorStrong]);
    appendItems(div, buttons);
    appendItems(article, elements);

    return article;
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;

    if (className) {
      element.className = className;
    }

    return element;
  }

  function appendItems(parentElement, items) {
    items.forEach((item) => parentElement.appendChild(item));
  }
}

// Unexpected error: expected '<h2>Archive</h2><ol><li>MyArticle</li><li>Arrays</li></ol>' to equal '<h2>Archive</h2><ol><li>Arrays</li><li>MyArticle</li></ol>'
