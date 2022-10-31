const form = document.querySelector('form');
const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const topicContainer = document.querySelector('.topic-container');

// events
form.addEventListener('click', handleForm);

const actions = {
  Post: onPost,
  Cancel: onCancel,
};

function handleForm(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }
  const onClick = actions[ev.target.textContent];
  onClick(ev);
}

function onCancel() {
  const elements = Object.values(form);
  elements.filter(el => el.nodeName == 'INPUT').forEach(el => (el.value = ''));
  elements
    .filter(el => el.nodeName == 'TEXTAREA')
    .forEach(el => (el.value = ''));
}

async function onPost(ev) {
  const d = new Date();
  const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  const formData = new FormData(ev.currentTarget);
  const { topicName, username, postText } = Object.fromEntries(formData);
  if (topicName == '' || username == '' || postText == '') {
    return alert('empty fields');
  }
  try {
    const res = await fetch(URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topicName, username, postText, date }),
    });
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    topicContainer.appendChild(createPost(data));
    onCancel();
  } catch (error) {
    alert(error.message);
  }
}



function createPost(post) {
  const div = document.createElement('div');
  div.className = 'topic-name-wrapper';
  div.setAttribute('data-id', post._id);
  const html = `<div class="topic-name">
  <a href="#" class="normal">
      <h2>${post.topicName}</h2>
  </a>
  <div class="columns">
      <div>
          <p>Date: <time>${post.date}</time></p>
          <div class="nick-name">
              <p>Username: <span>${post.username}</span></p>
          </div>
      </div>
  </div>
  </div>`;
  div.innerHTML = html;
  div.addEventListener('click', handleTopic);
  return div;
}

(async function onLoad() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    topicContainer.replaceChildren(...Object.values(data).map(createPost));
  } catch (error) {
    alert(error.message);
  }
})();

// this function handles the topic 
function handleTopic(ev) {
  ev.preventDefault();
  sessionStorage.setItem('topic-id', ev.currentTarget.dataset.id);
  window.location = './theme-content.html';
}
