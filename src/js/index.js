import * as listeners from './handlers/index.js';

const path = location.pathname;

switch (path) {
  case '/':
    console.log('home');
    listeners.displayListings();
    break;
  case '/profile/login/':
    listeners.setLoginFormListener();
    break;
  case '/profile/register/':
    listeners.setRegisterFormListener();
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
    //   listeners.setCreateCommentFormListener();
    //   break;
    // case '/profile/edit/':
    //   listeners.setUpdateProfileFormListener();
    break;
  case '/profile/':
    listeners.displayProfileListener();
    break;
}

listeners.logoutListener();
