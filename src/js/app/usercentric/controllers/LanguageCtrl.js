(angular => {
  const app = angular.module('xyz.brunofinger.usercentric');

  app.controller('LanguageCtrl', ['$translate', function($translate) {
    return {
      lang: function() {
        return $translate.use.apply($translate, arguments);
      }
    };
  }]);

})(window.angular);
