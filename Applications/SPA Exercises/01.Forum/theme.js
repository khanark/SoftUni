import { loadTopic, onPost, showComments } from './views/topic.js';

// initial show of the topic
loadTopic();
showComments();

document.querySelector('form').addEventListener('click', onPost);
