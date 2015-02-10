'use strict';

angular.module('fakeProductionGeneratorSetupApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeStudents = [];

    $http.get('/api/students').success(function(awesomeStudents) {
      $scope.awesomeStudents = awesomeStudents;
      socket.syncUpdates('thing', $scope.awesomeStudents);
    });

    $scope.coursesInProgress = function(courses){
      var inProgressCourses = 0;
      for(var i = 0; i < courses.length; i++){
        if(courses[i].grade === "IP"){
          inProgressCourses += 1;
        }
      }
      return inProgressCourses;
    };

    $scope.coursesFailed = function(courses){
      var coursesFailed = 0;
      for(var i = 0; i < courses.length; i++){
        if(courses[i].grade === "F"){
          coursesFailed += 1;
        }
      }
      return coursesFailed;
    };

    $scope.isPassing = function(letter){
      switch(letter){
        case 'A': return true;
        case 'B': return true;
        case 'C': return true;
        case 'D': return true;
        default: return false;
      }
    };

    $scope.coursesPassed = function(courses){
      var coursesPassed = 0;
      for(var i = 0; i < courses.length; i++){
        if($scope.isPassing(courses[i].grade)){
          coursesPassed += 1;
        }
      }
      return coursesPassed;
    };


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
