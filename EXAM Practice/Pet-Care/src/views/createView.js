import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const createTemplate = submitHandler => html`
  <section id="createPage">
    <form class="createForm" @submit=${submitHandler}>
      <img src="./images/cat-create.jpg" />
      <div>
        <h2>Create PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" placeholder="Max" />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" placeholder="2 years" />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" placeholder="5kg" />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" placeholder="./image/dog.jpeg" />
        </div>
        <button class="btn" type="submit">Create Pet</button>
      </div>
    </form>
  </section>
`;

export const createView = ctx => {
  const onSubmit = async (data, form) => {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all the fields');
    }
    try {
      await dataService.createAnimal(data);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(createTemplate(submitHandler(onSubmit)));
};
