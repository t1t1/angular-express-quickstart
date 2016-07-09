(function() {
'use strict';

    angular
        .module('todoApp')
        .config(function($routeProvider) {
            $routeProvider
                .when('/inbox', {
                    templateUrl: "javascripts/todo/todo.html",
                    contorller: "TodoCtrl"
                })
                .when('/project/:projectId/todos', {
                    templateUrl: "javascripts/todo/todo.html",
                    contorller: "TodoCtrl"
                })
                .otherwise({
                    redirectTo: "/inbox"
                })
                
        })
})();