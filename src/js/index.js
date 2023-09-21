import * as listeners from './handlers/index.js';
import hideSearchOnDocumentClick from './handlers/listings/hideSearchOnDocumentClick.js';
import searchListings from './handlers/listings/searchListing.js';
import { createMenu } from './ui/common/createMenu.js';

function router() {
  const path = location.pathname;
  createMenu(path);

  switch (path) {
    case '/':
    case '/index.html':
      if (listeners.isLoggedIn()) {
        document.querySelector('#hero').style.display = 'none';
        listeners.displayUserName();
      } else {
        document.querySelector('#welcomeUser').style.display = 'none';
      }

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
      listeners.setUpdateProfileFormListener();
      break;
    case '/profile/':
      listeners.displayProfileListener();
      listeners.displayMyListings();
      break;
    case '/listing/':
      if (!listeners.isLoggedIn()) {
        location.href = '/profile/login/';
        return false;
      }
      listeners.getListingtById();
      listeners.setCreateBidListener();
      break;
    case '/listing/create/':
      console.log('new listing');
      listeners.setCreateListingFormListener();
  }
}
router();
