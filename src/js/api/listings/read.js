import { API_AUCTION_URL } from '../constants.js';
import displayMessage from '../../ui/components/displayMessage.js';

const action = '/listings';
const method = 'get';
const infos = '?_seller=true&_bids=true&sort=created';

export async function getListings() {
  try {
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
  } catch (error) {
    displayMessage('danger', error, '#message');
  }
}

//GET LISTING BY ID
export async function getListing(id) {
  try {
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
  } catch (error) {
    displayMessage('danger', error, '#message');
  }
}
