const id = sessionStorage.getItem("topicid");
const URL = "http://localhost:3030/jsonstore/collections/myboard/comments";
const commentSection = document.querySelector(".comment");

// form event
document.querySelector("form").addEventListener("submit", handleForm);

// initial load
window.addEventListener("DOMContentLoaded", async () => {
  const post = await getPost();
  const comments = await getComments();
  document.querySelector("h2").textContent = post.title;
  commentSection.appendChild(createPost(post));
  Object.values(comments).forEach((com) =>
    commentSection.appendChild(createComment(com))
  );
});

// initially load all the comments
async function getComments() {
  const res = await fetch(URL + `/${id}`);
  if (res.status !== 200) {
    return;
  }
  const data = await res.json();
  return data;
}

async function getPost() {
  try {
    const res = await fetch(
      `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`
    );
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
  div.classList.add("header");
  const html = `<img src="./static/profile.png" alt="avatar" />
  <p><span>${post.username}</span> posted on <time>${post.date}</time></p>
  <p class="post-content">${post.content}</p>`;
  div.innerHTML = html;
  return div;
}

function createComment(comment) {
  const div = document.createElement("div");
  div.classList.add("user-comment");
  const html = `<div class="topic-name-wrapper">
    <div class="topic-name">
      <p>
        <strong>${comment.username}</strong> commented on
        <time>${comment.date}</time>
      </p>
      <div class="post-content">
        <p>${comment.content}</p>
      </div>
    </div>
  </div>`;
  div.innerHTML = html;
  return div;
}

async function handleForm(ev) {
  ev.preventDefault();
  const d = new Date();
  const date = `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  const formData = new FormData(ev.target);
  const { postText, username } = Object.fromEntries(formData);
  if (postText == "" || username == "") {
    return alert("empty fields");
  }
  try {
    const res = await fetch(URL + `/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: postText, username, date }),
    });
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    document.querySelector(".comment").appendChild(createComment(data));
  } catch (error) {}
}
