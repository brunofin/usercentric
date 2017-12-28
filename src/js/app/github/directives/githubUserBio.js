(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserBio', [() => {
    return {
        templateUrl: '/partials/github/user/bio.tmpl.html',
        scope: {
          user: '='
        }
    };
  }]);

})(window.angular);
