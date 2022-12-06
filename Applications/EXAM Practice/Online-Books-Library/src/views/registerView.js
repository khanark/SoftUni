import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const registerTemplate = submitHandler => html`
  <!-- Register Page ( Only for Guest users ) -->
  <section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${submitHandler}>
      <fieldset>
        <legend>Register Form</legend>
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
        <p class="field">
          <label for="repeat-pass">Repeat Password</label>
          <span class="input">
            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
          </span>
        </p>
        <input class="button submit" type="submit" value="Register" />
      </fieldset>
    </form>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    if (data.password !== data['confirm-pass']) {
      return alert('password missmatch');
    }
    try {
      await userService.register(data.email, data.password);
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(registerTemplate(submitHandler(onSubmit)));
};
