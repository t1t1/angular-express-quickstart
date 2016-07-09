angular.module("todoApp")
    .controller("ShellCtrl", function($scope) {
        $scope.projectList = [
            {id: 1, name: "one"},
            {id: 2, name: "two"},
            {id: 3, name: "three"}
        ];
    });