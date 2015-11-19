'use strict';

module.exports = function(app) {
  app.directive('descriptionArea', function() {
    return {
      restrict: 'CA',
      replace: true,
      templateUrl: './../../../templates/description.html'
    }
  });
};
