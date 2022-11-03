const topicContainer = document.querySelector(".topic-container");
const URL = "http://localhost:3030/jsonstore/collections/myboard/posts";

// form event listener
document.querySelector("form").addEventListener("click", handleForm);

const actions = {
  Post: onPost,
  Cancel: onCancel,
};

function handleForm(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== "BUTTON") {
    return;
  }
  const action = actions[ev.target.textContent];
  action(ev);
}

// initially loading all the post
window.addEventListener("DOMContentLoaded", async () => {
  const data = await loadContent();
  topicContainer.replaceChildren(...Object.values(data).map(createPost));
});

async function loadContent() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    alert(error.message);
  }
}

function createPost(post) {
  const div = document.createElement("div");
  div.classList.add("topic-name-wrapper");
  const html = `<div class="topic-name">
      <a href="#" class="normal">
        <h2 data-id=${post._id}>${post.title}</h2>
      </a>
      <div class="columns">
        <div>
          <p>Date: <time>${post.date}</time></p>
          <div class="nick-name">
            <p>Username: <span>${post.username}</span></p>
          </div>
        </div>
      </div>
    </div>
  `;
  div.innerHTML = html;
  return div;
}

async function onPost(ev) {
  const d = new Date();
  const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  const formData = new FormData(ev.currentTarget);
  const { topicName, username, postText } = Object.fromEntries(formData);
  if (topicName == "" || username == "" || postText == "") {
    return alert("empty fields");
  }
  try {
    const res = await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: topicName,
        username,
        content: postText,
        date,
      }),
    });
    if (res.ok == false) {
      throw new Error(data.message);
    }
    const data = await res.json();
    topicContainer.appendChild(createPost(data));
    onCancel();
  } catch (error) {
    alert(error.message);
  }
}

function onCancel() {
  document.getElementById("topicName").value = "";
  document.getElementById("username").value = "";
  document.getElementById("postText").value = "";
}

topicContainer.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.nodeName !== "H2") {
    return;
  }
  const postInfo = {
    title: ev.target.textContent,
    id: ev.target.dataset.id,
  };
  console.log(postInfo);
  sessionStorage.setItem("topic", JSON.stringify(postInfo));
  window.location = "./theme-content.html";
});
