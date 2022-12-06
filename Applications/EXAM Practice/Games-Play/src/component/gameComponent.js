import { html } from '../../node_modules/lit-html/lit-html.js';

export const gameComponent = game => html`
  <div class="game">
    <div class="image-wrap">
      <img src=${game.imageUrl} />
    </div>
    <h3>${game.title}</h3>
    <div class="rating"><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
    <div class="data-buttons">
      <a href="/details/${game._id}" class="btn details-btn">Details</a>
    </div>
  </div>
`;
