import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const registerTemplate = submitHandler => html`
  <section id="register">
    <div class="form" @submit=${submitHandler}>
      <h2>Register</h2>
      <form class="login-form">
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    debugger;
    const email = data.get('email');
    const password = data.get('password');
    const repass = data.get('re-password');
    if (email == '' || password == '' || repass == '') {
      return alert('please full all empty fields');
    }
    if (repass !== password) {
      return alert('passwords missmatch');
    }
    try {
      await userService.register(email, password);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
      form.reset();
    }
  };
  ctx.render(registerTemplate(submitHandler(onSubmit)));
};
