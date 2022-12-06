import { html } from '../../node_modules/lit-html/lit-html.js';

export const userComponent = item => html`
  <div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl} />
    <a class="button" href="/details/${item._id}">Details</a>
  </div>
`;
