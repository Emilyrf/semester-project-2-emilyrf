import { API_AUCTION_URL } from '../constants.js';
import { authFetch } from '../authFetch.js';
import displayMessage from '../../ui/components/displayMessage.js';

const action = '/listings';
const method = 'post';

// Function to create a new listing with proper data
export async function createListing(listingData) {
  // Generate an ISO 8601 date string for endsAt
  listingData.endsAt = new Date(listingData.endsAt).toISOString();

  // Check if media is an array and contains valid URLs
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
    console.error('Error creating listing:', error);
    displayMessage('danger', error, '#message');
  }
}

// Function to check if a string is a valid URL
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

// import { API_AUCTION_URL } from "../constants.js";
// import { authFetch } from "../authFetch.js";

// const action = "/listings";
// const method = "post";

// export async function createListing(listingData) {
//     const createListingUrl = API_AUCTION_URL + action;

//     const response = await authFetch(createListingUrl, {
//         method,
//         body: JSON.stringify(listingData)
//     })
//     const listing = await response.json();

//     if (response.ok) {
//         console.log(response);

//     }
//     // throw new Error(json.errors[0].message);
//     console.log("error");
// }

// export async function createListing(listingData) {
//     try {
//         const createListingUrl = API_AUCTION_URL + action;

//         const endsAtDate = new Date(listingData.endsAt);
//         const endsAtISOString = endsAtDate.toISOString();
//         listingData.endsAt = endsAtISOString;

//         const response = await authFetch(createListingUrl, {
//             method,
//             body: JSON.stringify(listingData)
//         });

//         const listing = await response.json();
//         console.log(response);

//         if (response.ok) {

//             console.log(response);
//         }

//     } catch (error) {

//         console.log(error);
//     }
// }

// export async function createComment(commentData) {
//     const queryString = document.location.search;
//     const params = new URLSearchParams(queryString);
//     let id = params.get("id");
//     const createCommentUrl = `${API_AUCTION_URL}${action}/${id}/comment`;

//     const response = await authFetch(createCommentUrl, {
//         method,
//         body: JSON.stringify(commentData)
//     })
//     const comment = await response.json();
//     if (response.ok) {
//         window.location.reload();

//     }
//     throw new Error(json.errors[0].message);
// }
