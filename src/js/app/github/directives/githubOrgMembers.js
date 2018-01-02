(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubOrgMembers', ['GitHubDAO', '$cacheFactory', '$q', (GitHubDAO, $cacheFactory, $q) => {
    return {
      templateUrl: '/partials/github/org/members.tmpl.html',
      scope: {
        org: '=',
        repos: '='
      },
      controllerAs: 'peopleCtrl',
      controller($scope) {
        $scope.contributors = [];

        this.$onInit = function() {
          $scope.repos.forEach(repo => {
            GitHubDAO.repos.getRepoContributors(repo.full_name).then(({
              data
            }) => {
              data.forEach(contributor => {
                try {
                  $scope.contributors
                    .find(c => c.login === contributor.login)
                    .contributions += contributor.contributions;
                } catch (e) {
                  $scope.contributors.push(contributor);
                  GitHubDAO.user.getUser(contributor.login)
                    .then(({
                      data: {
                        followers,
                        public_repos,
                        public_gists,
                        avatar_url
                      }
                    }) => {
                      angular.merge(contributor, {
                        followers,
                        public_repos,
                        public_gists,
                        avatar_url
                      });
                    });
                }
              });
            })
          });
        };

        $scope.filterChanged = () => {
          $scope.query.page = 1;
        };

        $scope.limitOptions = [5, 10, 15];

        $scope.options = {
          rowSelection: true,
          multiSelect: true,
          autoSelect: true,
          decapitate: false,
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        $scope.query = {
          order: '-contributions',
          limit: 5,
          page: 1
        };
      }
    };
  }]);

})(window.angular);
