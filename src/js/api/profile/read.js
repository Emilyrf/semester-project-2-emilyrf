import { API_AUCTION_URL } from '../constants.js';
import { authFetch } from '../authFetch.js';
import { getName } from '../../helpers/storage.js';

const action = '/profiles';

export async function getProfile(name) {
  if (!name) {
    name = getName();
  }
  const getProfileUrl = `${API_AUCTION_URL}${action}/${name}`;
  const response = await authFetch(getProfileUrl);
  if (response.ok) {
    return await response.json();
  } else {
    const json = await response.json();
    throw new Error(json.errors[0].message);
  }
}
