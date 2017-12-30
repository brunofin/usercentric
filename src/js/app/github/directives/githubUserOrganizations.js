(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserOrganizations', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/user/orgs.tmpl.html',
        scope: {
          user: '='
        },
        controller($scope) {
          GitHubDAO.getOrganizations($scope.user.login).then(({ data }) => {
            $scope.orgs = data;
          });
        }
    };
  }]);

})(window.angular);
