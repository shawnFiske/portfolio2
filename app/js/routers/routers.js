'use strict';

module.exports = function(app) {
  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/apps', {
          templateUrl: './templates/projects_list.html',
          controller: 'projectsController'
      }).
        when('/playground', {
          templateUrl: './templates/projects_list.html',
          controller: 'playgroundController'
        }).
        otherwise({
          redirectTo: '/apps'
        });
  }]);
};
