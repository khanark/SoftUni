import { html } from '../../node_modules/lit-html/lit-html.js';
import { catalog } from '../api/dataService.js';
import { gameComponent } from '../component/gameComponent.js';

const homeTemplate = games => html`
  <!--Home Page-->
  <section id="welcome-world">
    <div class="welcome-message">
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero" />
    <div id="home-page">
      <h1>Latest Games</h1>
      ${!games.length ? html`<p class="no-articles">No games yet</p>` : games.map(gameComponent)}
    </div>
  </section>
`;

export const homeView = async ctx => {
  const games = await catalog();
  ctx.renderContent(homeTemplate(games));
};
