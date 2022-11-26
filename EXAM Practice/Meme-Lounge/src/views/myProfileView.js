import { html } from '../../node_modules/lit-html/lit-html.js';
import { userMemes } from '../api/dataService.js';
import { userComponent } from '../component/userComponent.js';

const myProfileTemplate = (user, memes) => html`
  <!-- Profile Page ( Only for logged users ) -->
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender == "male" ? "male.png" : "female.png"}" />
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      <!-- Display : All created memes by this user (If any) -->
      ${!memes.length ? html`
      <p class="no-memes">No memes in database.</p>
      ` : memes.map(userComponent)}
    </div>
  </section>
`;

export const profileView = async (ctx) => {
  const memes = await userMemes(ctx.user?._id)
  console.log(ctx.user)
  ctx.renderContent(myProfileTemplate(ctx.user, memes))
}