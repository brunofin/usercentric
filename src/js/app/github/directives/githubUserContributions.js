(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserContributions', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/user/contributions.tmpl.html',
        scope: {
          user: '='
        },
        controller($scope) {
          GitHubDAO.user.getPublicEvents($scope.user.login)
            .then(({ data }) => {
              $scope.contribs = data;
          });
        }
    };
  }]);

})(window.angular);
