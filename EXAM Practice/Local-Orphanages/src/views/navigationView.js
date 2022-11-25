import { html } from '../../node_modules/lit-html/lit-html.js';

//change templates
const userTemplate = () => html`
  <div id="user">
    <a href="/myposts">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
  </div>
`;

const guestTemplate = () => html`
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

export const navigationTemplate = isLogged => html`
  <!-- Navigation -->
  <h1><a href="/">Orphelp</a></h1>
  <nav>
    <a href="/catalog">Dashboard</a>
    <!-- Logged-in users -->
    ${isLogged ? userTemplate() : guestTemplate()}
  </nav>
`;