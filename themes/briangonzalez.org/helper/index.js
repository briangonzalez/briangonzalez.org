var moment = require('moment');

module.exports = function(hexo) {
  return {

    foo: function(posts) {
      return posts.data.map(function (document) {
        return document.title;
      });
    },

    calendarDate: function(date) {
      date = Date.parse(date.toString());
      return moment(date).calendar();
    },

  };
};
