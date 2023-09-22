import { API_AUCTION_URL } from '../constants.js';
import { authFetch } from '../authFetch.js';

const action = '/profiles';
const method = 'put';

export async function updateProfile(profileData) {
  if (!profileData.name) {
    throw new Error('Profile update requires a profile name');
  }
  const updateProfileUrl = `${API_AUCTION_URL}${action}/${profileData.name}/media`;

  const response = await authFetch(updateProfileUrl, {
    method,
    body: JSON.stringify(profileData),
  });
  if (response.ok) {
    console.log('Profile updated');
  } else {
    const json = await response.json();
    throw new Error(json.errors[0].message);
  }
}
