(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserLocation', ['NominatimDAO', (NominatimDAO) => {
    return {
        templateUrl: '/partials/github/user/location.tmpl.html',
        scope: {
          user: '='
        },
        controller($scope) {
          NominatimDAO.geolocate($scope.user.location).then(({ data: [{ lat, lon: lng }] }) => {
            lat = parseFloat(lat);
            lng = parseFloat(lng);

            angular.extend($scope, {
              userLocation: {
                lat,
                lng,
                zoom: 11
              }
            });
          }).catch(e => console.error(e));
        }
    };
  }]);

})(window.angular);
