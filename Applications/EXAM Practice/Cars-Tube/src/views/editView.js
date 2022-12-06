import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { editCar } from '../api/dataService.js';
import { handleData, submitHandler } from '../utils/utils.js';

const editTemplate = (car, submitHandler) => html`
  <section id="edit-listing">
    <div class="container">
      <form id="edit-form" @submit=${submitHandler}>
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand} />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model} />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" .value=${car.description} />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year} />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl} />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price} />

        <hr />
        <input type="submit" class="registerbtn" value="Edit Listing" />
      </form>
    </div>
  </section>
`;

export const editView = ctx => {
  const id = ctx.params.id;
  const onSubmit = async (data, form) => {
    const { brand, model, description, year, imageUrl, price } = data;
    handleData({ brand, model, description, year: +year, imageUrl, price: +price }, editCar, id);
    ctx.page.redirect(`/details/${id}`);
    form.reset();
  };
  ctx.renderContent(editTemplate(ctx.data, submitHandler(onSubmit)));
};
