import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const loginTemplate = submitHandler => html`
  <!-- Login Page ( Only for Guest users ) -->
  <section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${submitHandler}>
      <fieldset>
        <legend>Login Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input type="text" name="email" id="email" placeholder="Email" />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input type="password" name="password" id="password" placeholder="Password" />
          </span>
        </p>
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
    </form>
  </section>
`;

export const loginView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    try {
      await userService.login(data.email, data.password);
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(loginTemplate(submitHandler(onSubmit)));
};
