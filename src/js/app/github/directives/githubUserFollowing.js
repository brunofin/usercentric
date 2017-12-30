(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserPeople', ['GitHubDAO', (GitHubDAO) => {
    return {
        templateUrl: '/partials/github/user/people.tmpl.html',
        scope: {
          user: '='
        },
        controllerAs: 'peopleCtrl',
        controller($scope) {
          this.currentNav = 'following';

          this.navTo = (where) => {
            if (where === 'following' || where === 'followers') {
              this.currentNav = where;
            }
          };

          this.isShowingFollowing = () => this.currentNav === 'following';
          this.isShowingFollowers = () => this.currentNav === 'followers';

          GitHubDAO.user.getFollowing($scope.user.login).then(({ data }) => {
            $scope.following = data;
          });

          GitHubDAO.user.getFollowers($scope.user.login).then(({ data }) => {
            $scope.followers = data;
          });
        }
    };
  }]);

})(window.angular);
