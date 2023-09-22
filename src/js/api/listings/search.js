import { API_AUCTION_URL } from '../constants.js';

const action = '/listings';

export async function search(tag) {
  const url = `${API_AUCTION_URL}${action}?_tag=${tag}`;

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Search failed');
}
