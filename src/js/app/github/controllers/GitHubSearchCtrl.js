(angular => {
  const app = angular.module('xyz.brunofinger.usercentric.github');

  app.controller('GitHubSearchController', ['GitHubDAO', '$location', function(GitHubDAO, $location) {
    this.query = '';
    this.search = query => {
      return GitHubDAO.search.usersAndOrganizations(query)
        .then(response => {
          return response.data.items;
        });
    }
    this.selectedItemChange = item => {
      if (item) {
        $location.path(`${ item.type }/${ item.login }`);
      }
    }
  }]);

})(window.angular);
