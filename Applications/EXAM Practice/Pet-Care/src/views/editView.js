import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const editTemplate = (animal, submitHandler) => html`
  <section id="editPage">
    <form class="editForm" @submit=${submitHandler}>
      <img src=${animal.image} />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" value="Max" .value=${animal.name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" value="Shiba Inu" .value=${animal.breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" value="2 years" .value=${animal.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" value="5kg" .value=${animal.weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" value="./image/dog.jpeg" .value=${animal.image} />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;

export const editView = async ctx => {
  const animal = await dataService.getSingleAnimal(ctx.params.id);
  const onSubmit = async (data, form) => {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all the fields');
    }
    try {
      await dataService.updateAnimal(animal._id, data);
      ctx.page.redirect(`/details/${animal._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(editTemplate(animal, submitHandler(onSubmit)));
};
