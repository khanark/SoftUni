const id = sessionStorage.getItem("topic-id");
const URL = "http://localhost:3030/jsonstore/collections/myboard/posts/";
const COMMENTS_URL = `http://localhost:3030/jsonstore/collections/myboard/comments/${id}`;
const commentSection = document.querySelector(".comment");

document.querySelector("form").addEventListener("submit", postComment);
document.querySelector("nav a").addEventListener("click", () => {
  window.location = "./index.html";
});

async function loadPost() {
  try {
    const res = await fetch(URL + id);
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    document.querySelector("h2").textContent = data.topicName;
    commentSection.appendChild(renderPost(data));
  } catch (error) {
    alert(error.message);
  }
}

// initially loading the posts
loadPost();
loadComments();

function renderPost(post) {
  const div = document.createElement("div");
  div.className = "header";
  const html = `<img src="./static/profile.png" alt="avatar">
  <p><span>${post.username}</span> posted on <time>${post.date}</time></p>
  <p class="post-content">${post.postText}</p>
  `;
  div.innerHTML = html;
  return div;
}

async function postComment(ev) {
  ev.preventDefault();
  const date = new Date();
  const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  const formData = new FormData(ev.target);
  const { postText, username } = Object.fromEntries(formData);
  try {
    const res = await fetch(COMMENTS_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postText, username, dateString }),
    });
    const data = await res.json();
    console.log(data);
    if (res.ok == false) {
      throw new Error(data.message);
    }
    commentSection.appendChild(renderComment(data));
    clearFields(ev);
  } catch (error) {
    alert(error.message);
  }
}

function renderComment(comment) {
  // finish this logic
  const div = document.createElement("div");
  div.className = "topic-name-wrapper";
  const html = `<div class="topic-name">
  <p>
    <strong>${comment.username}</strong> commented on
    <time>${comment.dateString}</time>
  </p>
  <div class="post-content">
    <p>
      ${comment.postText}
    </p>
  </div>
</div>`;
  div.innerHTML = html;
  return div;
}

async function loadComments() {
  try {
    const res = await fetch(COMMENTS_URL);
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    Object.values(data).forEach((el) =>
      commentSection.appendChild(renderComment(el))
    );
  } catch (error) {
    alert(error.message);
  }
}

function clearFields(ev) {
  Object.values(ev.target)
    .filter((el) => el.tagName != "BUTTON")
    .forEach((el) => (el.value = ""));
}
