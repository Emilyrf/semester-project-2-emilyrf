import { getProfile } from '../../api/profile/index.js';

export async function displayProfileListener() {
  const profile = await getProfile();

  document.querySelector('.profile-picture').src = profile.avatar;
  document.querySelector('.profile-name').textContent = profile.name;
  document.querySelector('.profile-credits').innerText += profile.credits;
  document.querySelector('.profile-email').textContent += profile.email;
}
