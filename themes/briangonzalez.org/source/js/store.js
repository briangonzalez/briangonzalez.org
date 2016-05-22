import Vue from 'vue';
import { EventEmitter } from 'events';
const store = new EventEmitter();

import 'whatwg-fetch';

store.state = { };
store.state.github = {};
store.state.github.repos = [];
store.state.github.topRepos = [];

store.on('toggleMenu', function() {
  Vue.set(this.state, 'menuShown', !this.state.menuShown);
});

store.on('hideMenu', function() {
  Vue.set(this.state, 'menuShown', false);
});

document.addEventListener('keydown', (event) => {
  if (event.which === 27) {
    Vue.set(store.state, 'menuShown', false);
  }
});

store.fetchTopGithubRepos = function(page) {
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

    repos = uniqueArray(repos.concat(store.state.github.topRepos));
    repos = repos.sort((a, b) => a.stargazers_count < b.stargazers_count);

    store.state.github.topRepos = repos;
  }).catch(function(ex) {
    store.state.github.topRepos = [ { name: 'Error.' } ];
    console.log('parsing failed', ex);
  });
};

export default store;
