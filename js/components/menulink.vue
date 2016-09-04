
<template>
  <a class="menulink zag" v-on:click="showMenu">
    Menu
  </a>
</template>

<script>

  const toggleMenu = function ({ dispatch, state }) {
    dispatch('TOGGLE_MENU');
  };

  export default {
    vuex: {
      actions: {
        showMenu: toggleMenu
      }
    },
  }
</script>

<style>
</style>
