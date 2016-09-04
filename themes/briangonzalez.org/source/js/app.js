
import hljs from './highlight';
hljs.configure({});
hljs.initHighlightingOnLoad();
window.hljs = hljs;

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

import store from './store';
import Menulink from '!vue!./components/menulink.vue';
import Menu from '!vue!./components/menu.vue';
import GithubRepos from '!vue!./components/github-repos.vue';

import 'whatwg-fetch';

const components = { Menulink, Menu, GithubRepos, };

//
// Root Component.
//
const App = Vue.extend({
  components,
  store,
  el: () => 'body',
});

//
// Setup Router.
//
var router = new VueRouter({
  history: true
});

router.map({});

var routerMap = {};
var initialLoad = true;

router.beforeEach((transition) => {

  var path = transition.to.path;

  if (!initialLoad && !(path in routerMap)) {
    fetch(transition.to.path)
    .then((response) => response.text())
    .then((body) => {

      // Clear current main.
      var main = document.getElementsByTagName('main')[0];
      main.innerHTML = '';
      main.classList.add('hidden');

      // Create template.
      var wrapper = document.createElement('div');
      wrapper.innerHTML= body;
      const div = wrapper.firstChild;
      const template = wrapper.getElementsByTagName('main')[0];

      // Associate dynamically loaded component.
      routerMap[path] = {
        component: {
          template: template.outerHTML,
          ready: () => {
            hljs.initHighlighting.called = false;
            hljs.initHighlighting();
          },
          components,
        }
      };

      router.on(path, routerMap[path]);

      // Restart router.
      transition.abort();
      router.stop();
      router.start();
      router.go(path);
    })
    .catch((e) => {
      console.log(e);
    });

  } else {
    initialLoad = false;
    transition.next();          // Default action for already loaded content.
  }

});

router.afterEach(() => {
  store.dispatch('HIDE_MENU');
  window.updateBodyURL();
  window.scrollTo(0,0);
});

router.start(App, 'body');
