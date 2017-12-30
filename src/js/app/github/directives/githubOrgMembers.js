(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubOrgMembers', ['GitHubDAO', '$cacheFactory', (GitHubDAO, $cacheFactory) => {
    return {
        templateUrl: '/partials/github/org/members.tmpl.html',
        scope: {
          org: '='
        },
        controllerAs: 'peopleCtrl',
        controller($scope) {
          $scope.members = undefined;
          $scope.memberDetails = $cacheFactory.get('userCache');

          GitHubDAO.orgs.getPublicMembers($scope.org.login).then(({ data }) => {
            $scope.members = data;

            data.forEach(member => {
              // forced the user details to be cached in the userCache
              GitHubDAO.user.getUser(member.login);
            })
          });

        }
    };
  }]);

})(window.angular);
