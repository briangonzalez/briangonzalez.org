var moment = require('moment');

module.exports = (hexo) => {
  return {

    calendarDate(date) {
      date = Date.parse(date.toString());
      console.log(date);
      return moment(date).calendar();
    },

    formatDate(date, format){
      date = Date.parse(date.toString());
      return moment(date).format(format);
    }

  };
};
