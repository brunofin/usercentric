(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubRepositoryAbout', [() => {
    return {
        templateUrl: '/partials/github/repo/about.tmpl.html',
        scope: {
          repo: '='
        }
    };
  }]);

})(window.angular);
