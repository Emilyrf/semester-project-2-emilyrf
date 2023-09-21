import { isLoggedIn } from '../../helpers/auth.js';
import * as listeners from '../../handlers/index.js';

export function createMenu(path) {
  console.log('chamou');
  const menu = document.querySelector('#menu');
  if (isLoggedIn()) {
    console.log('logado');
    menu.innerHTML = `<li class="nav-item">
                             <a class="nav-link ${
                               path === '/' ? 'active' : ''
                             }" href="/">Home</span>
                             </a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link ${
                               path === '/profile/' ? 'active' : ''
                             }" href="/profile/">My profile</a>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link ${
                               path === '/listing/create/' ? 'active' : ''
                             }" href="/listing/create/"">New listing</a>
                           </li>
                           <li class="nav-item">
                             <button type="button" class="btn btn-dark" id="logout">
                               Logout
                             </button>
                          </li>
                        `;
    listeners.logoutListener();
  } else {
    console.log('deslogado');
    menu.innerHTML = `<li>
                             <a class="nav-link ${
                               path === '/' ? 'active' : ''
                             }" href="/">Home</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link ${
                               path === '/profile/login/' ? 'active' : ''
                             }" aria-current="page" href="/profile/login/">Login</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link ${
                               path === '/profile/register/' ? 'active' : ''
                             }"" href="/profile/register/">Register</a>
                         </li>`;
  }
}
