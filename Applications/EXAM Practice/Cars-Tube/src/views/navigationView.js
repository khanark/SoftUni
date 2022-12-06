import { html } from '../../node_modules/lit-html/lit-html.js';

const userTemplate = user => html`
  <div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/my-listings">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="/logout">Logout</a>
  </div>
`;

const guestTemplate = () => html`
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

export const navigationTemplate = user => html`
  <!-- Navigation -->
  <nav>
    <a class="active" href="/">Home</a>
    <a href="/catalog">All Listings</a>
    <a href="/by-year">By Year</a>
    ${user ? userTemplate(user) : guestTemplate()}
  </nav>
`;
