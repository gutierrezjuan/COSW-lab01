'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View1Ctrl3'
  });
}])

.controller('View1Ctrl3', ['$scope', function($scope) {
    $scope.listado=[
                      {"descripcion":"tarea1","prioridad":6},
                      {"descripcion":"tarea2","prioridad":10},
                      {"descripcion":"tarea3","prioridad":5}
                  ];

}]);

