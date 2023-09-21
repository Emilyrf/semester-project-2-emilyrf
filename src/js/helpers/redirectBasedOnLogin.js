import { isLoggedIn } from './auth.js';

const authRoutes = ['/profile/register/', '/profile/login/'];
const protectedRoutes = ['/profile/edit/', '/profile/', '/listing/create/'];

export function redirectBasedOnLogin(path) {
  // if we are logged in, redirect from login and register (auth routes)
  if (isLoggedIn()) {
    if (authRoutes.includes(path)) {
      location.href = '/';
    }
  }
  // if we not logged in, redirect from dashboard, profile, etc (protected routes)
  else {
    if (protectedRoutes.includes(path)) {
      location.href = '/';
    }
  }
}
