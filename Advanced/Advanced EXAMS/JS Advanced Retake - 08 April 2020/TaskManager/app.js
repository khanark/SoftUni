function solve() {
  const task = document.getElementById('task');
  const description = document.getElementById('description');
  const date = document.getElementById('date');
  const addBtn = document.getElementById('add');
  const sections = Array.from(document.querySelectorAll('section'));

  const openSection = sections[1].children[1];
  const inprogressSection = sections[2].children[1];
  const completeSection = sections[3].children[1];

  debugger;

  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    const elements = [task, description, date];

    if (elements.every((element) => element.value != '')) {
      const article = createElement('article');
      const h3 = createElement('h3', task.value);
      const pDescription = createElement(
        'p',
        `Description: ${description.value}`
      );
      const pDate = createElement('p', `Due Date: ${date.value}`);
      const div = createElement('div', '', 'flex');
      const startBtn = createElement('button', 'Start', 'green');
      const deleteBtn = createElement('button', 'Delete', 'red');

      append(div, [startBtn, deleteBtn]);
      append(article, [h3, pDescription, pDate, div]);
      openSection.appendChild(article);

      deleteBtn.addEventListener('click', onDelete);
      startBtn.addEventListener('click', onStart);
    }
  }

  function onDelete(e) {
    e.target.parentNode.parentNode.remove();
  }

  function onStart(e) {
    inprogressSection.appendChild(e.target.parentNode.parentNode);
    const redBtn = e.target.parentNode.lastChild;
    const yellowBtn = e.target.parentNode.firstChild;

    e.target.parentNode.prepend(redBtn);
    yellowBtn.className = 'orange';
    yellowBtn.textContent = 'Finish';

    yellowBtn.removeEventListener('click', onStart);
    yellowBtn.addEventListener('click', onFinish);
  }

  function onFinish(e) {
    const article = e.target.parentNode.parentNode;
    completeSection.appendChild(article);
    article.lastChild.remove();
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;

    if (className) {
      element.className = className;
    }

    return element;
  }

  function append(parent, childElements) {
    childElements.forEach((element) => parent.appendChild(element));
  }
}
