// store/course.js
export const state = () => ({
    selectedCourse: null, // Initially null, will store course object here
  });
  
  export const mutations = {
    setCourse(state, course) {
      state.selectedCourse = course; // Store the course object in Vuex
    },
  };
  
  export const actions = {
    selectCourse({ commit }, course) {
      commit('setCourse', course); // Commit the course object to the mutation
    },
  };
  