window.addEventListener('load', solve);

function solve() {
  // dom elements
  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  const list = document.getElementById('review-list');
  const published = document.getElementById('published-list');
  const elements = [title, category, content];

  const createElementWithClass = function (type, className, content) {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = content;
    return element;
  };

  const createElementContent = function (type, content) {
    const element = document.createElement(type);
    if (content.id.includes('category')) {
      element.textContent = 'Category: ';
    } else if (content.id.includes('content')) {
      element.textContent = 'Content: ';
    } else {
      element.textContent = '';
    }
    element.textContent += `${content.value}`;
    return element;
  };

  const createArticle = function () {
    const article = document.createElement('article');
    const h4 = createElementContent('h4', title);
    const pCategory = createElementContent('p', category);
    const pContent = createElementContent('p', content);
    const articleElements = [h4, pCategory, pContent];
    articleElements.forEach(el => article.appendChild(el));
    return { article, articleElements };
  };

  // publish button logic
  publishBtn.addEventListener('click', e => {
    e.preventDefault();

    if (elements.every(el => el.value.length > 0)) {
      const li = createElementWithClass('li', 'rpost');
      const info = createArticle();
      const article = info.article;
      const editBtn = createElementWithClass(
        'button',
        'action-btn edit',
        'Edit'
      );
      const approveBtn = createElementWithClass(
        'button',
        'action-btn approve',
        'Approve'
      );

      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(approveBtn);
      list.appendChild(li);

      // store the previous input
      const elementsInfo = elements.map(el => el.value);
      console.log(elementsInfo);
      elements.forEach(el => (el.value = ''));

      // edit button logic
      editBtn.addEventListener('click', e => {
        e.target.parentNode.remove();
        elements.forEach((el, i) => (el.value = elementsInfo[i]));
      });

      // approve btn logic
      approveBtn.addEventListener('click', e => {
        e.target.parentNode.remove();
        li.removeChild(editBtn);
        li.removeChild(approveBtn);
        published.appendChild(li);
      });
    }
  });

  // clear btn logic
  clearBtn.addEventListener('click', () => {
    Array.from(published.children).forEach(el => el.remove());
  });
}

