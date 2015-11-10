'use strict';

module.exports = function(app) {
  app.config(['$locationProvider','$routeProvider',
    function($locationProvider, $routeProvider) {
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

      $locationProvider.html5Mode(true);

  }]);
};
