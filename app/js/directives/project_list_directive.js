'use strict';

module.exports = function(app) {
  app.directive('projectsList', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../templates/projects_list.html',
    }
  });
};
