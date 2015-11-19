'use strict';

module.exports = function(app) {
  app.controller('projectsController', ['$scope', '$http', function($scope, $http) {
    $scope.projects = [];

    $scope.hover = function(project) {
        // Shows/hides the delete button on hover
        return project.showInfo = ! project.showInfo;
    };

    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data.data;
    });

  }]);
}
