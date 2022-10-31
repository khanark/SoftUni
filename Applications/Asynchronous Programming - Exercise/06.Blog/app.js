function attachEvents() {
  const loadBtn = document.getElementById("btnLoadPosts");
  const viewBtn = document.getElementById("btnViewPost");
  const postsSection = document.getElementById("posts");
  const postTitle = document.getElementById("post-title");
  const bodyPost = document.getElementById("post-body");
  const commentsSection = document.getElementById("post-comments");

  loadBtn.addEventListener("click", getPosts);
  viewBtn.addEventListener("click", getPostDetails);

  const postBody = [];

  async function getPosts() {
    const url = "http://localhost:3030/jsonstore/blog/posts";

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach((entry) => {
      const { body, id, title } = entry;
      postBody.push({ id, body });

      const option = document.createElement("option");
      option.value = id;
      option.textContent = title;

      postsSection.appendChild(option);
    });
  }

  async function getPostDetails() {
    const selectedPost = Array.from(postsSection.children).filter(
      (post) => post.selected
    )[0];

    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const response = await fetch(url);
    const data = await response.json();

    const postComments = Object.values(data).filter(
      (post) => post.postId == selectedPost.value
    );

    const currentPostBody = postBody.find(
      (post) => post.id == selectedPost.value
    );

    postTitle.textContent = selectedPost.textContent;
    bodyPost.textContent = currentPostBody.body;

    postComments.forEach((comment) => {
      const li = document.createElement("li");
      li.textContent = comment.text;
      commentsSection.appendChild(li);
    });
  }
}

attachEvents();
