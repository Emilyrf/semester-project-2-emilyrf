import { API_AUCTION_URL } from '../constants.js';
import { authFetch } from '../authFetch.js';
import { getName } from '../../helpers/storage.js';

const action = '/profiles';

// const profile = JSON.parse(localStorage.getItem('profile'));

export async function getProfile(name) {
  if (!name) {
    name = getName();
  }
  const getProfileUrl = `${API_AUCTION_URL}${action}/${name}`;
  const response = await authFetch(getProfileUrl);
  return await response.json();
}
