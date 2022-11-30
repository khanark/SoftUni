import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const registerTemplate = submitHandler => html`
  <!-- Register Page ( Only for Guest users ) -->
  <section id="register-page" class="content auth">
    <form id="register" @submit=${submitHandler}>
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com" />

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password" />

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <input class="btn submit" type="submit" value="Register" />

        <p class="field">
          <span>If you already have profile click <a href="/login">here</a></span>
        </p>
      </div>
    </form>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    if (data.password !== data['confirm-password']) {
      return alert('password missmatch');
    }
    try {
      await userService.register(data.email, data.password);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(registerTemplate(submitHandler(onSubmit)));
};
