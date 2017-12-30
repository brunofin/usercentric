(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.directive('githubUserAbout', [() => {
    return {
        templateUrl: '/partials/github/user/about.tmpl.html',
        scope: {
          user: '='
        },
        controllerAs: 'ctrl',
        controller() {
          this.trimAt = org => {
            if(org.charAt(0) == '@') {
              return org.split('').slice(1).join('');
            } else {
              return org;
            }
          };
        }
    };
  }]);

})(window.angular);
