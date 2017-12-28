(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserFollowing', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/user/following.tmpl.html',
        scope: {
          user: '='
        },
        controller($scope) {
          GitHubDAO.getFollowing($scope.user.login).then(({ data }) => {
            $scope.following = data;
          });
        }
    };
  }]);

})(window.angular);
