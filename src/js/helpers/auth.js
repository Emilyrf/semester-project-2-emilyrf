import { load, getName } from './storage.js';

export function isLoggedIn() {
  return load('token') !== null;
}

export function displayUserName() {
  const loggedUserName = document.querySelector('#loggedUserName');
  loggedUserName.innerHTML = getName();
  console.log('pegou get');
}
