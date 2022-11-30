import { html } from '../../node_modules/lit-html/lit-html.js';

const userTemplate = () => html`
  <div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
  </div>
`;

const guestTemplate = () => html`
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

export const navigationTemplate = hasUser => html`
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/catalog">All games</a>
    <!-- Logged-in users -->
    ${hasUser ? userTemplate() : guestTemplate()} 
  </nav>
`;
