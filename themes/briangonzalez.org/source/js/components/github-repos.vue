
<template>
  <ul class="github-repos">
    <li v-for="repo of state.github.topRepos">
      <a href="{{repo.html_url}}">
        <h2>{{ repo.name }}</h2>
        <small>{{ repo.stargazers_count }} stars / {{ repo.forks }} forks</small>
      </a>
    </li>
  </ul>
</template>

<script>
  import store from '../store';

  export default {
    data () {
      return {
        state: store.state
      }
    },
    created: () => {

      [1,2,3,4,5].forEach((i) => {
        store.fetchTopGithubRepos(i)
      });

    },
    methods: {
    },
    components: {
    }
  }
</script>

<style>
</style>
