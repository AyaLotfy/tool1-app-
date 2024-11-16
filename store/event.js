// store/event.js
export const state = () => ({
    selectedEvent: null, // Initially null, will store event object here
  });
  
  export const mutations = {
    setEvent(state, event) {
      state.selectedEvent = event; // Store the event object in Vuex
    },
  };
  
  export const actions = {
    selectEvent({ commit }, event) {
      commit('setEvent', event); // Commit the event object to the mutation
    },
  };
  