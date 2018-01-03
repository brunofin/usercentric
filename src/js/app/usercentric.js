(angular => {
  const app = angular.module('xyz.brunofinger.usercentric', [
    'ngRoute',
    'ngMessages',
    'ngAnimate',
    'ngMaterial',
    'md.data.table',
    'pascalprecht.translate',
    'leaflet-directive',
    'xyz.brunofinger.usercentric.github',
  ]);

  app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.registerAvailableLanguageKeys(['en_US', 'pt_BR'], {
      'en': 'en_US',
      'en-*': 'en_US',
      'pt': 'pt_BR',
      'pt-*': 'pt_BR',
    }).determinePreferredLanguage().fallbackLanguage('en_US');

    $translateProvider.useStaticFilesLoader({
        prefix: '/partials/translations/',
        suffix: '/strings.json'
    });
  }]);

  app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
     .when('/About', {
       templateUrl: '/partials/usercentric/about.tmpl.html',
       reloadOnSearch: false,
     })
     .otherwise({
       redirect: '/About'
     })
  }]);

})(window.angular);
