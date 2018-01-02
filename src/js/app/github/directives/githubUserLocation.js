(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserLocation', ['NominatimDAO', (NominatimDAO) => {
    return {
        templateUrl: '/partials/github/user/location.tmpl.html',
        scope: {
          user: '='
        },
        controller($scope) {
            NominatimDAO.geolocate($scope.user.location).then(({ data }) => {
              if (data.length > 0) {
                const result = data[0];

                const lat = parseFloat(result.lat);
                const lng = parseFloat(result.lon);

                angular.extend($scope, {
                  userLocation: {
                    lat,
                    lng,
                    zoom: 11
                  }
                });
              }
            }, e => {
              $scope.notGeolocated = true;
            });
        }
    };
  }]);

})(window.angular);
