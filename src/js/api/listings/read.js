import { API_AUCTION_URL } from '../constants.js';
import { getName } from '../../helpers/storage.js';
import { authFetch } from '../authFetch.js';

const action = '/listings';
const method = 'get';
const infos = '?_seller=true&_bids=true&sort=created';

export async function getListings() {
  const response = await fetch(`${API_AUCTION_URL}${action}${infos}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }

}

export async function getListing(id) {

  if (!id) {
    throw new Error('Get requires a listing ID');
  }

  const response = await fetch(
    `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
    },
  );

  if (response.ok) {
    return await response.json();
  }

}

export async function getMyListings() {
  const username = getName();
  const endpoint = `/profiles/${username}`;
  const userPostsUrl = `${API_AUCTION_URL}${endpoint}${action}`;

  const response = await authFetch(userPostsUrl);
  return await response.json();
}
