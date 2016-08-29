angular.module('starter.controllers', ['firebase'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('BadiKhabareinCtrl', function($scope,$firebaseArray,ArticleGetter) {
$scope.allBadiNews = ArticleGetter.all();
})

.controller('BadiKhabareinDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   // console.log($stateParams.badiKhabareinId);
   // debugger;
$scope.chat = ArticleGetter.get($stateParams.badiKhabareinId);

})

.controller('TazaKhabareinCtrl', function($scope,$firebaseArray,$firebaseObject) {
var rootRef = firebase.database().ref();
    var tazakhabarRef = rootRef.child('Taza Khabarein');

  $scope.allTazaNews = $firebaseArray(tazakhabarRef);
    
  
})


.controller('RajyaCtrl', function($scope, $stateParams) {
  // $scope.text1 = Articles.text;
})

.controller("RashtriyaCtrl",function($scope,$firebaseObject){
var rootRef = firebase.database().ref();
    var textRef = rootRef.child('notmainnews');
  $scope.data = $firebaseObject(textRef);
})

.controller('CricketCtrl', function($scope, $stateParams) {
})

.controller('ManoranjanCtrl', function($scope, $stateParams) {
})

.controller('DuniyaCtrl', function($scope, $stateParams) {
})

.controller('TechGyaanCtrl', function($scope, $stateParams) {
})

.controller('KaarobarCtrl', function($scope, $stateParams) {
})


.controller('AutoCtrl', function($scope, $stateParams) {
})

.controller('KhelCtrl', function($scope, $stateParams) {
})


.controller('ZaraHatkeCtrl', function($scope, $stateParams) {
})

.controller('FashionCtrl', function($scope,$firebaseArray) {
var rootRef = firebase.database().ref();
    var textRef = rootRef.child('MainNews');
  $scope.allNews = $firebaseArray(rootRef);
});



