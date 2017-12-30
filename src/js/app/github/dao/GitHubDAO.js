(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.service('GitHubDAO', ['$http', $http => {
    const apiBase = 'https://api.github.com';
    const params = {
      client_id: '11228b35bd5b4b443524',
      client_secret: '71c00312bbc192bf505a3a8e3d70c38ad4504c35'
    };

    return {
      getUser(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }`,
          params
        });
      },
      getFollowing(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/following`,
          params
        });
      },
      getFollowers(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/followers`,
          params
        });
      },
      getOrganizations(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/orgs`,
          params
        });
      },
      getRepos(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/repos`,
          params
        });
      },
      getStarredRepos(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/starred`,
          params
        });
      },
      getGists(username) {
        return $http({
          method: 'GET',
          url: `${ apiBase }/users/${ username }/gists`,
          params
        });
      },
    };
  }]);
})(window.angular);
