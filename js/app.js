var app = angular.module("app", ["ngRoute", "firebase"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	controller: 'MyCtrl as ctrl',
        templateUrl : "views/myctrl.html"
    });
});


app.controller("MyCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("customers");
  
  $scope.customers = $firebaseArray(ref);

});
