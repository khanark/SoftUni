import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const loginTemplate = submitHandler => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${submitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </section>
`;

export const loginView = async ctx => {
  const onSubmit = async (data, form) => {
    const email = data.get('email');
    const password = data.get('password');
    if (email == '' || password == '') {
      return alert('please full all empty fields');
    }
    try {
      await userService.login(email, password);
      ctx.page.redirect("/")
    } catch (error) {
      alert(error.message);
      form.reset()
    }
  };
  ctx.render(loginTemplate(submitHandler(onSubmit)))
};
