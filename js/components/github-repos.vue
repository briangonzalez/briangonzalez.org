
<template>
  <ul class="github-repos">
    <li v-for="repo of topRepos">
      <a href="{{repo.html_url}}">
        <h2>{{ repo.name }}</h2>
        <small>{{ repo.stargazers_count }} stars / {{ repo.forks }} forks</small>
      </a>
    </li>
  </ul>
</template>

<script>
  const fetchTopGithubRepos = function ({ dispatch, state }, page) {
    dispatch('FETCH_TOP_GITHUB_REPOS', page);
  };

  export default {
    vuex: {
      getters: {
        topRepos(state) {
          return state.github.topRepos;
        }
      },
      actions: {
        fetchTopGithubRepos
      }
    },
    created() {
      [1,2,3,4,5].forEach((i) => {
        this.fetchTopGithubRepos(i);
      });
    },
  };
</script>

<style>
</style>
