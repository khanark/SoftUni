import { html } from '../../node_modules/lit-html/lit-html.js';

const userTemplate = () => html`
  <li><a href="/create">Create Postcard</a></li>
  <li><a href="/logout">Logout</a></li>
`;

const guestTemplate = () => html`
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>
`;

export const navigationTemplate = hasUser => html`
  <!-- *** render the nav -->
  <nav>
    <section class="logo">
      <img src="./images/logo.png" alt="logo" />
    </section>
    <ul>
      <!--Users and Guest-->
      <li><a href="/">Home</a></li>
      <li><a href="/catalog">Dashboard</a></li>
      ${hasUser ? userTemplate() : guestTemplate()}
    </ul>
  </nav>
`;
