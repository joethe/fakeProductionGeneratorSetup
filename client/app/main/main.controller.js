'use strict';

angular.module('fakeProductionGeneratorSetupApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeStudents = [];

    $http.get('/api/students').success(function(awesomeStudents) {
      $scope.awesomeStudents = awesomeStudents;
      socket.syncUpdates('thing', $scope.awesomeStudents);
    });

    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
