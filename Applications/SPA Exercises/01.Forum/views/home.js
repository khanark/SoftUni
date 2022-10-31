import { clear } from '../scripts/clearFields.js';

const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const topicContainer = document.querySelector('.topic-container');

export async function onPost(ev) {
    const formData = new FormData(ev.currentTarget);
    const { topicName, username, postText } = Object.fromEntries(formData);
    console.log(topicName, username, postText);

    const date = new Date();

    if (topicName === '' || username === '' || postText === '') {
        alert('Empty fields!');
        return;
    }

    const topic = {
        topicName,
        username,
        postText,
        date: `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`,
    };

    try {
        const res = await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(topic),
        });

        const data = await res.json();

        if (res.ok == false) {
            throw new Error(data.message);
        }

        topicContainer.appendChild(createPost(data));

        clear();
    } catch (error) {
        alert(error.message);
    }
}

function createPost(post) {
    const { topicName, username, date, _id } = post;

    const div = document.createElement('div');
    div.className = 'topic-name-wrapper';

    const html = `
	<div class="topic-name" id=${_id}>
		<a href="#" class="normal">
			<h2>${topicName}</h2>
		</a>
		<div class="columns">
			<div>
				<p>Date: <time>${date}</time></p>
				<div class="nick-name">
					<p>Username: <span>${username}</span></p>
				</div>
			</div>
		</div>
	</div>`;

    div.innerHTML = html;
    return div;
}

export async function onHomeLoad() {
    // const loading = showLoading();
    // topicContainer.replaceChildren(loading);

    try {
        const res = await fetch(URL);
        const data = await res.json();

        if (res.ok == false) {
            throw new Error(data.message);
        }

        topicContainer.replaceChildren(...Object.values(data).map(createPost));
        sessionStorage.clear();
    } catch (error) {
        alert(error.message);
    }
}
