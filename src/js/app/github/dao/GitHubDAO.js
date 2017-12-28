(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.service('GitHubDAO', ['$http', $http => {
    const apiBase = 'https://api.github.com';

    return {
      getUser(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }`
        });
      },
      getFollowing(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/following`
        });
      },
      getFollowers(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/followers`
        });
      },
    };
  }]);
})(window.angular);
