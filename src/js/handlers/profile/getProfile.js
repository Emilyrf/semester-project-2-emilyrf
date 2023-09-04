import { getProfile } from '../../api/profile/index.js';
import { load } from '../../storage/index.js';

export async function displayProfileListener() {
  const profile = await getProfile();
  const { name } = load('profile');
  const user = await getProfile(name);

  document.querySelector('.profile-picture').src = profile.avatar;
  document.querySelector('.profile-name').textContent = profile.name;
  document.querySelector('.profile-credits').innerText += profile.credits;
  document.querySelector('.profile-email').textContent += profile.email;

  const profileAvatar = document.querySelector('#profileAvatar');

  if (!profile.avatar) {
    profileAvatar.src = '/images/user-icon-image-placeholder.jpg';
  } else {
    profileAvatar.src = user.avatar;
  }
}
