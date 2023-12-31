import { login } from '../../api/auth/login.js';
import displayMessage from '../../ui/components/displayMessage.js';
import * as storage from '../../helpers/storage.js';

export function setLoginFormListener() {
  const loginForm = document.querySelector('#loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const loginForm = event.target;
      const formData = new FormData(loginForm);
      const profile = Object.fromEntries(formData.entries());

      try {
        const { accessToken, ...userInfo } = await login(profile);

        storage.save('token', accessToken);
        storage.save('profile', userInfo);
        window.location.href = '/index.html';
      } catch (error) {
        displayMessage('danger', error, '#message');
      }
    });
  }
}
