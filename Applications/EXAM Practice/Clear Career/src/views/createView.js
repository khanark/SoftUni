import { html } from '../../node_modules/lit-html/lit-html.js';
import { createPost } from '../api/postsService.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const createTemplate = submitHandler => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
        <input type="text" name="category" id="job-category" placeholder="Category" />
        <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
        <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50"></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const createView = ctx => {
  const onSubmit = async (data, form) => {
    if (Object.values(Object.fromEntries(data)).some(val => val == '')) {
      return alert('please fill all empty fields');
    }
    try {
      await createPost(Object.fromEntries(data))
      ctx.page.redirect("/catalog")
    } catch (error) {
      alert(error.message)
    }
  };
  ctx.render(createTemplate(submitHandler(onSubmit)));
};
