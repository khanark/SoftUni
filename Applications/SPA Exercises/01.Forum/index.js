import { clear } from './scripts/clearFields.js';
import { onHomeLoad, onPost } from './views/home.js';

// initially loads all the topics
onHomeLoad();

document.querySelector('form').addEventListener('click', handleForm);
document
    .querySelector('.topic-container')
    .addEventListener('click', handleTopic);

const formActions = {
    public: onPost,
    cancel: clear,
};

function handleForm(ev) {
    ev.preventDefault();
    if (ev.target.nodeName !== 'BUTTON') {
        return;
    }
    const click = formActions[ev.target.className];
    click(ev);
}

function handleTopic(ev) {
    ev.preventDefault();
    if (ev.target.nodeName !== 'H2') {
        return;
    }
    const id = ev.target.parentNode.parentNode.id;
    sessionStorage.setItem('topic-id', id);
    window.location = './theme-content.html';
}
