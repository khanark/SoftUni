import { register } from '../api/user.js';
import { html } from '../lib/lib.js';
import { createSubmit } from '../util.js';

const registerTemplate = onSumbit => html`
  <section id="register">
    <div class="form" @submit=${onSumbit}>
      <h2>Register</h2>
      <form class="login-form">
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">login</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`;

export async function showRegisterPage(ctx) {
  ctx.render(registerTemplate(createSubmit(onSubmit)));
  async function onSubmit(data, form) {
    if(Object.values(data).some(val => val == "")) {
      return alert("please fill all empty fields")
    }
    const password = data.password;
    const repassword = data['re-password'];
    if (password !== repassword) {
      return alert('passwords are not matching');
    }
    try {
      await register(data.email, data.password);
      ctx.page.redirect('/catalog');
    } catch (error) {
      form.reset();
    }
  }
}
