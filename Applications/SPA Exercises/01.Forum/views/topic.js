import { clear } from '../scripts/clearFields.js';

const id = sessionStorage.getItem('topic-id');
const themePost = document.querySelector('.comment');

export async function loadTopic() {
    const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts/';

    const res = await fetch(URL + `/${id}`);
    const data = await res.json();

    document.querySelector('.theme-name h2').textContent = data.topicName;
    themePost.replaceChildren(showPost(data));
}

function showPost(topic) {
    const div = document.createElement('div');
    div.className = 'header';

    const html = `<img src="./static/profile.png" alt="avatar" />
	<p>
		<span>${topic.username}</span> posted on
		<time>${topic.date.replace(topic.date.slice(-3), '')}</time>
	</p>

	<p class="post-content">
		${topic.postText}
	</p>`;

    div.innerHTML = html;
    return div;
}

export async function showComments() {
    const res = await fetch(
        `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`
    );
    const data = await res.json();
    Object.values(data).forEach(comment =>
        themePost.appendChild(createComment(comment))
    );
}

export async function onPost(ev) {
    ev.preventDefault();

    if (ev.target.nodeName !== 'BUTTON') {
        return;
    }

    const formData = new FormData(ev.currentTarget);
    const { postText, username } = Object.fromEntries(formData);

    if (postText == '' || username == '') {
        alert('Empty fields!');
        return;
    }

    const date = new Date();

    const post = {
        postText,
        username,
        date: `${date.toLocaleDateString()},${date.toLocaleTimeString()}`,
    };

    const res = await fetch(
        `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        }
    );

    const data = await res.json();
    themePost.appendChild(createComment(data));
    clear();
}

function createComment(comment) {
    const div = document.createElement('div');
    div.className = 'user-comment';
    const { username, date, postText } = comment;

    const html = `<div class="topic-name-wrapper">
	<div class="topic-name">
		<p><strong>${username}</strong> commented on <time>${date}</time></p>
		<div class="post-content">
			<p>${postText}</p>
		</div>
	</div>
	</div>`;

    div.innerHTML = html;
    return div;
}
