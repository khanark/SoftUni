import { setUserData, showSection } from '../scripts/common.js';
import { homePageView } from './home.js';

document.getElementById('register-form').addEventListener('submit', handleForm);

export function registerPageView() {
  showSection(document.getElementById('form-sign-up'));
}

async function handleForm(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const { email, password, repeatPassword } = Object.fromEntries(formData);
  if (email == '' || password == '' || repeatPassword == '') {
    return alert('empty fields');
  }
  if (password !== repeatPassword) {
    return alert('passwords not matching');
  }
  try {
    const res = await fetch('http://localhost:3030/users/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    setUserData({ email: data.email, token: data.accessToken, id: data._id });
    homePageView();
  } catch (error) {
    alert(error.message);
  }
}
