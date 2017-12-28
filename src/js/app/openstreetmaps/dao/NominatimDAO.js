(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.openstreetmap');

  app.service('NominatimDAO', ['$http', ($http) => {
    return {
      geolocate(query) {
        return $http({
          method: 'GET',
          url: `http://nominatim.openstreetmap.org/search?q=${ query }&format=json`
        });
      }
    }
  }]);

})(window.angular);
