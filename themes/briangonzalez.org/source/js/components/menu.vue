
<template>
  <div class="menu-close"
    @click="closeMenu"
    v-bind:class="{ 'shown': menuShown }"></div>

  <section class="menu" v-bind:class="{ 'shown': menuShown }">
    <ul class="links">
      <li><a v-link="{ path: '/' }">Home</a></li>
      <li><a v-link="{ path: '/posts' }">Posts</a></li>
      <li><a v-link="{ path: '/github' }">Github</a></li>
      <li><a href="https://twitter.com/brianmgonzalez">Twitter</a></li>
      <li><a v-link="{ path: '/about' }">About</a></li>
    </ul>
  </section>
</template>

<script>
  const toggleMenu = function ({ dispatch, state }) {
    dispatch('TOGGLE_MENU');
  };

  export default {
    vuex: {
      getters: {
        menuShown: (state)  => {
          return state.menuShown;
        }
      },
      actions: {
        closeMenu: toggleMenu
      }
    },
  }
</script>

<style>
</style>
