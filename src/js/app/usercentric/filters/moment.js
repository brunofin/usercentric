(angular => {
  const app = angular.module('xyz.brunofinger.usercentric');

  app.filter('moment', () => {
    return (input, format="DD/MM/YYYY HH:mm:ss") => {
      try {
        return moment(input).format(format);
      } catch(e) {
        console.error(e);
        return input;
      }
    };
  });

})(window.angular);
