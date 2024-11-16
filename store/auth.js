export const state = () => ({
    loggedIn: false, // Default: not logged in
  });
  
  export const mutations = {
    login(state) {
      state.loggedIn = true; // Set logged in state
    },
    logout(state) {
      state.loggedIn = false; // Clear logged in state
    },
  };
  
  export const actions = {
    login({ commit }) {
      commit('login'); // Call login mutation
    },
    logout({ commit }) {
      commit('logout'); // Call logout mutation
    },
  };
  