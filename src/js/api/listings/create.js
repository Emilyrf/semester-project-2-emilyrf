import { API_AUCTION_URL } from '../constants.js';
import { authFetch } from '../authFetch.js';
import displayMessage from '../../ui/components/displayMessage.js';

const action = '/listings';
const method = 'post';

// Function to check if a string is a valid URL
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

//Function to create a new listing
export async function createListing(listingData) {
  listingData.endsAt = new Date(listingData.endsAt).toISOString();

  if (!Array.isArray(listingData.media)) {
    listingData.media = [];
  } else {
    listingData.media = listingData.media.filter((url) => isValidURL(url));
  }

  const createListingUrl = API_AUCTION_URL + action;

  try {
    const response = await authFetch(createListingUrl, {
      method,
      body: JSON.stringify(listingData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const listing = await response.json();
      console.log('Listing created:', listing);
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.errors[0].message);
    }
  } catch (error) {
    displayMessage('danger', error, '#message');
  }
}

//Function to create a new listing
export async function createBid(bid) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  let id = params.get('id');

  const createBidUrl = `${API_AUCTION_URL}${action}/${id}/bids`;
  if (!id) {
    throw new Error('Bid requires a listing id');
  }

  const response = await authFetch(createBidUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bid),
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.errors[0].message;
    throw new Error(errorMessage);
  }
}
