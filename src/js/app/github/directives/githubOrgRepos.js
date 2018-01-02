(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubOrgRepos', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/org/public_repos.tmpl.html',
        scope: {
          repos: '='
        }
    };
  }]);

})(window.angular);
