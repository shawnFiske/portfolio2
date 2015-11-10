'use strict';

require('angular/angular');
//require('angular-animate');
require('angular-route');

var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//controllers
require('./js/controllers/projects_controller.js')(portfolioApp);
require('./js/controllers/playground_controller.js')(portfolioApp);

//Router
require('./js/routers/routers.js')(portfolioApp);

//directives
//require('./js/directives/project_list_directive.js')(portfolioApp);