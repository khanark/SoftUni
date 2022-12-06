import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';

const detailsTemplate = (isOwner, animal, canDonate, donations, onDelete, onDonate) => html`
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src=${animal.image} />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${animal.name}</h1>
          <h3>Breed: ${animal.breed}</h3>
          <h4>Age: ${animal.age}</h4>
          <h4>Weight: ${animal.weight}</h4>
          <h4 class="donation">Donation: ${donations}$</h4>
        </div>
        <!-- if there is no registered user, do not display div-->
        ${isOwner
          ? html`<div class="actionBtn">
              <!-- Only for registered user and creator of the pets-->
              <a href="/edit/${animal._id}" class="edit">Edit</a>
              <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
            </div>`
          : nothing}
        ${canDonate
          ? html`<div class="actionBtn">
              <!--(Bonus Part) Only for no creator and user-->
              <a href="javascript:void(0)" class="donate" @click=${onDonate}>Donate</a>
            </div>`
          : nothing}
      </div>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const animal = await dataService.getSingleAnimal(ctx.params.id);
  const isOwner = ctx.user?._id == animal._ownerId;
  const alreadyDonated = await dataService.checkIfDonated(animal._id, ctx.user?._id);
  const donations = await dataService.getAllDonations(animal._id);
  const canDonate = !isOwner && Boolean(ctx.user) && !alreadyDonated;
  const onDelete = async () => {
    await dataService.deleteAnimal(animal._id);
    ctx.page.redirect('/');
  };
  const onDonate = async () => {
    await dataService.donate(animal._id);
    ctx.page.redirect(`/details/${animal._id}`);
  };
  ctx.renderContent(detailsTemplate(isOwner, animal, canDonate, +donations * 100, onDelete, onDonate));
};
