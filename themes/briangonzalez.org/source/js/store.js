import Vue from 'vue'
import Vuex from 'vuex'
import 'whatwg-fetch';

// Make vue aware of Vuex
Vue.use(Vuex);

// Create an object to hold the initial state when
// the app starts up
const state = {};
state.menuShown = false;
state.github = {};
state.github.repos = [];
state.github.topRepos = [];

// Create an object storing various mutations. We will write the mutation
const mutations = {
  TOGGLE_MENU(state) {
    state.menuShown = !state.menuShown;
  },
  FETCH_TOP_GITHUB_REPOS(state, page) {
    fetch(`https://api.github.com/users/briangonzalez/repos?page=${page}`)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let repos = json.filter((r) => r.stargazers_count > 90);

      let uniqueArray = function(arrArg) {
        return arrArg.filter(function(elem, pos,arr) {
          return arr.indexOf(elem) === pos;
        });
      };

      repos = uniqueArray(repos.concat(state.github.topRepos));
      repos = repos.sort((a, b) => a.stargazers_count < b.stargazers_count);

      state.github.topRepos = repos;
    }).catch(function(ex) {
      state.github.topRepos = [ { name: 'Error.' } ];
      console.log('parsing failed', ex);
    });
  }
};

document.addEventListener('keydown', (event) => {
  if (event.which === 27) {
    mutations.TOGGLE_MENU(state);
  }
});

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
