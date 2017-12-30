(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.service('GitHubDAO', ['$http', '$cacheFactory', '$q', ($http, $cacheFactory, $q) => {
    const apiBase = 'https://api.github.com';
    const params = {
      client_id: '11228b35bd5b4b443524',
      client_secret: '71c00312bbc192bf505a3a8e3d70c38ad4504c35'
    };

    const userCache = $cacheFactory.get('userCache');

    return {
      user: {
        getUser(username) {
          const deferred = $q.defer();
          const user = userCache.get(username);

          if (!user) {
            $http({
              method: 'GET',
              url: `${ apiBase }/users/${ username }`,
              params
            }).then(response => {
              userCache.put(username, response.data);
              deferred.resolve(response);
            }, response => {
              deferred.reject(response);
            });
          } else {
            deferred.resolve({
              data: user
            });
          }

          return deferred.promise;
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
      },
      orgs: {
        getOrganization(org) {
          return $http({
            method: 'GET',
            url: `${ apiBase }/orgs/${ org }`,
            params
          });
        },
        getPublicMembers(org) {
          return $http({
            method: 'GET',
            url: `${ apiBase }/orgs/${ org }/members`,
            params
          });
        }
      }
    };
  }]);
})(window.angular);
