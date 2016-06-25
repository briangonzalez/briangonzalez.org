
<template>
  <div class="menu-close"
    @click="closeMenu"
    v-bind:class="{ 'shown': state.menuShown }"></div>

  <section class="menu" v-bind:class="{ 'shown': state.menuShown }">
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
  import store from '../store';

  export default {
    data () {
      return {
        state: store.state
      }
    },
    methods: {
      closeMenu: function () {
        store.emit('toggleMenu');
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
