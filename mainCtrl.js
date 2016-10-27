angular.module("firebaseParty")
.controller("mainCtrl", function($scope, $firebaseArray){
  var partyRef = new Firebase('https://lesson-819d8.firebaseio.com/thingstodo');
  //add the url of the database to the parameters and add on the name of the Collection to the end

$scope.thingstodo = $firebaseArray(partyRef);
  //get - "$firebaseArray" is an injectable

$scope.addNewThing = function(newthing){
  $scope.thingstodo.$add(newthing);
};
  //post

$scope.editThing = function(editedthing){
  $scope.thingstodo.$save(editedthing);
};
  //put

  $scope.deleteThing = function(thingtodelete){
    $scope.thingstodo.$remove(thingtodelete);
  };
  //delete

});
