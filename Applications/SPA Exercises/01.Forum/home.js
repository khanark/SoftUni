const URL = "http://localhost:3030/jsonstore/collections/myboard/posts";
const topicContainer = document.querySelector(".topic-container");
const username = document.getElementById("username");
const topicName = document.getElementById("topicName");
const postText = document.getElementById("postText");
const elements = [username, topicName, postText];

document.querySelector(".public").addEventListener("submit", onPost);
document.querySelector(".cancel").addEventListener("submit", onCancel);

// initial load of the comments
(async function onLoad() {
  console.log("I am here");
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

function onCancel(ev) {
  ev.preventDefault();
  const elements = Object.values(form);
  elements
    .filter((el) => el.nodeName == "INPUT")
    .forEach((el) => (el.value = ""));
  elements
    .filter((el) => el.nodeName == "TEXTAREA")
    .forEach((el) => (el.value = ""));
}

async function onPost(ev) {
  ev.preventDefault();
  const d = new Date();
  const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  if (elements.some((el) => el.value == "")) {
    return;
  }
  const postData = {
    topicName: topicName.value,
    username: username.value,
    postText: postText.value,
    date,
  };
  try {
    const res = await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
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
  const div = document.createElement("div");
  div.className = "topic-name-wrapper";
  div.setAttribute("data-id", post._id);
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
  div.addEventListener("click", handleTopic);
  return div;
}

// this function handles the topic
function handleTopic(ev) {
  ev.preventDefault();
  sessionStorage.setItem("topic-id", ev.currentTarget.dataset.id);
  window.location = "./theme-content.html";
}
