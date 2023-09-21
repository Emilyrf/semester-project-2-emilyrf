import * as storage from '../../helpers/storage.js';

export function logoutListener() {
  const logoutButton = document.querySelector('#logout');
  logoutButton.addEventListener('click', () => {
    storage.remove('token');
    storage.remove('profile');
    location.href = '/';
  });
}
