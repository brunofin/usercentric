(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github', [
    'xyz.brunofinger.usercentric.openstreetmap',
  ]);

  app.run(['$cacheFactory', $cacheFactory => {
    $cacheFactory('userCache');
  }]);

  app.config(['$routeProvider', ($routeProvider) => {
    const userResolve = ($route, $q, GitHubDAO) => {
      const deferred = $q.defer();

      GitHubDAO.user.getUser($route.current.params.user).then(({ data }) => {
        deferred.resolve(data);
      }, ({ status }) => {
        deferred.reject({ status });
      });

      return deferred.promise;
    };

    const orgResolve = ($route, $q, GitHubDAO) => {
      const deferred = $q.defer();

      GitHubDAO.orgs.getOrganization($route.current.params.org).then(({ data }) => {
        deferred.resolve(data);
      }, ({ status }) => {
        deferred.reject({ status });
      });

      return deferred.promise;
    };

    const reposResolve = ($route, $q, GitHubDAO) => {
      const deferred = $q.defer();

      GitHubDAO.orgs.getPublicRepositories($route.current.params.org)
       .then(({ data }) => {
         deferred.resolve(data);
       }, ({ status }) => {
         deferred.reject({ status });
       });

       return deferred.promise;
    };

    $routeProvider
     .when('/User/:user', {
       templateUrl: '/partials/github/user.tmpl.html',
       reloadOnSearch: false,
       resolve: {
         user: userResolve
       }
     })
     .when('/Organization/:org', {
       templateUrl: '/partials/github/organization.tmpl.html',
       reloadOnSearch: false,
       resolve: {
         org: orgResolve,
         repos: reposResolve
       }
     })
  }]);

})(window.angular);
