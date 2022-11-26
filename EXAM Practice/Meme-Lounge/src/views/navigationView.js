import { html } from '../../node_modules/lit-html/lit-html.js';

const userTemplate = (user) => html`
  <div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
      <span>Welcome, ${user.email}</span>
      <a href="/myProfile">My Profile</a>
      <a href="/logout">Logout</a>
    </div>
  </div>
`;

const guestTemplate = () => html`
  <div class="guest">
    <div class="profile">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
  </div>
`;

export const navigationTemplate = user => html`
  <!-- *** render the nav -->
  <a href="/memes">All Memes</a>
  ${user ? userTemplate(user) : guestTemplate()}
`;
