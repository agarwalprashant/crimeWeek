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


// badi khabarein controllers
.controller('BadiKhabareinCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');


})

.controller('BadiKhabareinDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.badiKhabareinId);
$scope.badiDetail = ArticleGetter.getDetailNews('BadiKhabar',$stateParams.badiKhabareinId);

})


// taza khabarein controllers


.controller('TazaKhabareinCtrl', function($scope,ArticleGetter) {
  $scope.allTazaNews = ArticleGetter.getNews('TazaKhabar');
})

.controller('TazaKhabareinDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.tazaKhabareinId);
$scope.TazaDetail = ArticleGetter.getDetailNews('TazaKhabar',$stateParams.tazaKhabareinId);

})


//rajya news controllers

.controller('RajyaCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})


.controller('RashtriyaCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})




.controller('CricketCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})

.controller('ManoranjanCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})



.controller('DuniyaCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})

.controller('TechGyaanCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})




.controller('KaarobarCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})

.controller('AutoCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})

.controller('KhelCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})


.controller('ZaraHatkeCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
})

.controller('FashionCtrl', function($scope,ArticleGetter) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
});






