import * as listeners from './handlers/index.js';

import hideSearchOnDocumentClick from './handlers/listings/hideSearchOnDocumentClick.js';
import searchListings from './handlers/listings/searchListing.js';

const path = location.pathname;

switch (path) {
  case '/':
  case '/index.html':
    console.log('home');
    listeners.displayListings();
    searchListings();
    hideSearchOnDocumentClick();
    break;
  case '/profile/login/':
    listeners.setLoginFormListener();
    break;
  case '/profile/register/':
    listeners.setRegisterFormListener();
    break;
  case '/profile/edit/':
    console.log('update profile');
    listeners.setUpdateProfileFormListener();
    break;
  case '/profile/':
    listeners.displayProfileListener();
    listeners.displayMyListings();
    break;
  // case '/post/edit/':
  //   listeners.setUpdatePostFormListener();
  //   break;
  // case '/posts/':
  //   listeners.setCreatePostFormListener();
  //   listeners.getPosts();
  //   listeners.filterListener();
  //   listeners.searchListener();
  //   break;
  case '/listing/':
    listeners.getListingtById();
    break;
  case '/listing/create/':
    console.log('new listing');
    listeners.setCreateListingFormListener();
}

listeners.logoutListener();
