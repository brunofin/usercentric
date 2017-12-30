(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserRepos', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/user/public-repos.tmpl.html',
        scope: {
          user: '='
        },
        controllerAs: 'reposCtrl',
        controller($scope) {
          this.currentNav = 'repos';

          this.navTo = (where) => {
            if (where === 'repos' || where === 'gists') {
              this.currentNav = where;
            }
          };

          this.isShowingRepos = () => this.currentNav === 'repos';
          this.isShowingGists = () => this.currentNav === 'gists';

          $scope.show = {
            forks: true,
            starred: true
          };

          GitHubDAO.getRepos($scope.user.login).then(({ data }) => {
            $scope.repos = data.filter(repo => !repo.fork);
            $scope.forked = data.filter(repo => repo.fork);
          });

          GitHubDAO.getStarredRepos($scope.user.login).then(({ data }) => {
            $scope.starred = data;
          });

          GitHubDAO.getGists($scope.user.login).then(({ data }) => {
            $scope.gists = data;
          });
        }
    };
  }]);

})(window.angular);
