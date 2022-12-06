import { html } from '../../node_modules/lit-html/lit-html.js';

const userTemplate = (user) => html`
  <div id="user">
    <span>Welcome, ${user.email}</span>
    <a class="button" href="/myBooks">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="/logout">Logout</a>
  </div>
`;

const guestTemplate = () => html`
  <!-- Guest users -->
  <div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
  </div>
`;

export const navigationTemplate = user => html`
  <nav class="navbar">
    <section class="navbar-dashboard">
      <a href="/catalog">Dashboard</a>
      ${user ? userTemplate(user) : guestTemplate()}
    </section>
  </nav>
`;
