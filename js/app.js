var app = angular.module("app", ["ngRoute", "firebase"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	controller: 'MyCtrl as ctrl',
        templateUrl : "views/myctrl.html"
    });
});

app.factory("Customer", ["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create a reference to the database node where we will store our data
      var randomRoomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/obj/full/" + randomRoomId);
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
]);

app.controller("MyCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("customers");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.customers = $firebaseArray(ref);

  $scope.saveCustomer = function() {
      $scope.customer.$save().then(function() {
        alert('Customer saved!');
      }).catch(function(error) {
        alert('Error!');
      });
    };
});
