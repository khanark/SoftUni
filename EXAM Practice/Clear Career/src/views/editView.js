import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getSingle, updatePost } from '../api/postsService.js';
import { submitHandler } from '../utils/utils.js';

const editTemplate = (post, submitHandler) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="title" id="job-title" placeholder="Title" .value=${post.title} />
        <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${post.imageUrl} />
        <input type="text" name="category" id="job-category" placeholder="Category" .value=${post.category} />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
          .value=${post.description}
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
          .value=${post.requirements}
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${post.salary} />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const editView = async ctx => {
  const post = await getSingle(ctx.params.id);
  const onSbumit = async (data, form) => {
    if (Object.values(Object.fromEntries(data)).some(val => val == '')) {
      return alert('please fill all empty fields');
    }
    try {
      await updatePost(ctx.params.id, Object.fromEntries(data));
      ctx.page.redirect(`/details/${ctx.params.id}`);
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.render(editTemplate(post, submitHandler(onSbumit)));
};
