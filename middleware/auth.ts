import { Context } from '@nuxt/types'

export default function ({ store, redirect, route }: Context) {
  const isAuthenticated = store.state.auth.loggedIn;

  // Example: Redirect to login if the user is not authenticated
  if (!isAuthenticated && route.path !== '/login') {
    return redirect('/login');
  }

  // Prevent authenticated users from accessing login page
  if (isAuthenticated && route.path === '/login') {
    return redirect('/');
  }
}
