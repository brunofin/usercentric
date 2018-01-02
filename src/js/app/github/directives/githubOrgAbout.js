(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubOrgAbout', [() => {
    return {
        templateUrl: '/partials/github/org/about.tmpl.html',
        scope: {
          org: '='
        }
    };
  }]);

})(window.angular);
