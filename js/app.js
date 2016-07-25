var app = angular.module("app", ["ngRoute", "firebase"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	controller: 'MyCtrl as ctrl',
        templateUrl : "views/myctrl.html"
    });
})
app.controller("MyCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("customers");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.customers = $firebaseArray(ref);
});
