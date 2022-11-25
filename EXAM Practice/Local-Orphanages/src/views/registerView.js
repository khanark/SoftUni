import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../utils/utils.js';
import * as userService from '../api/userService.js';

// change template before every
const registerTemplate = submitHandler => html`
  <section id="register-page" class="auth">
    <form id="register" @submit=${submitHandler}>
      <h1 class="title">Register</h1>

      <article class="input-group">
        <label for="register-email">Email: </label>
        <input type="email" id="register-email" name="email" />
      </article>

      <article class="input-group">
        <label for="register-password">Password: </label>
        <input type="password" id="register-password" name="password" />
      </article>

      <article class="input-group">
        <label for="repeat-password">Repeat Password: </label>
        <input type="password" id="repeat-password" name="repeatPassword" />
      </article>

      <input type="submit" class="btn submit-btn" value="Register" />
    </form>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all empty fields');
    }
    if (data.password !== data.repeatPassword) {
      return alert('passwords missmatch');
    }
    try {
      await userService.register(data.email, data.password);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
    form.reset();
  };
  ctx.render(registerTemplate(submitHandler(onSubmit)));
};
