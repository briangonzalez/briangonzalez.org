
<template>
  <a class="menulink zag" v-on:click="showMenu">
    Menu
  </a>
</template>

<script>
  import store from '../store';

  export default {
    data () {
      return {
        state: store.state
      }
    },
    methods: {
      showMenu: function () {
        store.emit('toggleMenu');
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
