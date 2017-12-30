(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github', [
    'xyz.brunofinger.usercentric.openstreetmap',
  ]);

  app.config(['$routeProvider', ($routeProvider) => {
    const userResolve = ($route, $q, GitHubDAO) => {
      const deferred = $q.defer();

      GitHubDAO.getUser($route.current.params.user).then(({ data }) => {
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
       controller: 'GitHubUserController',
       resolve: {
         user: userResolve
       }
     })
  }]);

})(window.angular);
