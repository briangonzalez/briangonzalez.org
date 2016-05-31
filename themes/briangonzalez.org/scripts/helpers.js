
var postsToLi = function (posts) {
  return posts.sort(function (postA, postB) {
    return new Date(postB.date) > new Date(postA.date);
  })
  .map(function(post) {
    return `
      <li>
        <a v-link="{ path: '/${post.path}' }" href="/${post.path}">
          <h2>${post.title}</h2>
          <date>Published ${post.date}</date>
        </a>
      <li>
    `
  })
  .join('');
};

hexo.extend.helper.register("postsByYear", function () {
  var title = this.page.title;

  //var postList =
  var posts = this.site.posts.map;

  var postsByYear = {};

  this.site.posts.forEach(function (post) {
    var date = new Date(post.date);
    var year = date.getFullYear();
    if (!postsByYear[year]) { postsByYear[year] = []; }
    postsByYear[year].push(post);
  });

  var html = [];

  Object.keys(postsByYear)
  .sort(function (a, b) { return b > a; })
  .forEach(function (year) {
    html.push(`<h3>${year}</h3>`)
    html.push(`<ul class="posts">${postsToLi(postsByYear[year])}</ul>`);
  });

  return html.join('');

});
