(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserAbout', [() => {
    return {
        templateUrl: '/partials/github/user/about.tmpl.html',
        scope: {
          user: '='
        }
    };
  }]);

})(window.angular);
