'use strict';

module.exports = function(app) {
	app.controller('playgroundController', ['$scope', '$http', function($scope, $http) {
		$scope.projects = [];
    $http.get('data/playground.json').success(function(data) {
      $scope.projects = data.data;
    });
	}]);
};
