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


// badi khabarein controllers  start 
.controller('BadiKhabareinCtrl', function($scope,ArticleGetter,$ionicModal,$firebaseArray) {
  $scope.allBadiNews = ArticleGetter.getNews('BadiKhabar');
  $scope.date = ((new Date()).toDateString());
  $scope.allImages = $scope.allBadiNews;
 
  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/image-popover.html');
  }
 
  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }
 
  
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };


})

.controller('BadiKhabareinDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.badiKhabareinId);
$scope.badiDetail = ArticleGetter.getDetailNews('BadiKhabar',$stateParams.badiKhabareinId);

})
// badi khabarein controllers end




// taza khabarein controllers
.controller('TazaKhabareinCtrl', function($scope,ArticleGetter) {
  $scope.allTazaNews = ArticleGetter.getNews('TazaKhabar');
  $scope.date = ((new Date()).toDateString());

})

.controller('TazaKhabareinDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.tazaKhabareinId);
$scope.TazaDetail = ArticleGetter.getDetailNews('TazaKhabar',$stateParams.tazaKhabareinId);

})
 //taza khabarein controllers end







//rajya news controllers start
.controller('RajyaCtrl', function($scope,ArticleGetter) {
  $scope.allRajyaNews = ArticleGetter.getNews('RajyaKhabar');
  $scope.date = ((new Date()).toDateString());
  
})

.controller('RajyaDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.rajyaId);
$scope.RajyaDetail = ArticleGetter.getDetailNews('RajyaKhabar',$stateParams.rajyaId);

})
//rajya news controllers end






//rashtriya news controllers begin
.controller('RashtriyaCtrl', function($scope,ArticleGetter) {
  $scope.allRashtriyaNews = ArticleGetter.getNews('RashtriyaKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('RashtriyaDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.rashtriyaId);
$scope.RashtriyaDetail = ArticleGetter.getDetailNews('RashtriyaKhabar',$stateParams.rashtriyaId);

})
//rashtriya news controllers end





//cricket news controllers begin
.controller('CricketCtrl', function($scope,ArticleGetter) {
  $scope.allCricketNews = ArticleGetter.getNews('CricketKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('CricketDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.cricketId);
$scope.CricketDetail = ArticleGetter.getDetailNews('CricketKhabar',$stateParams.cricketId);

})
//cricket news controllers end





//manoranjan news controllers begin
.controller('ManoranjanCtrl', function($scope,ArticleGetter) {
  $scope.allManoranjanNews = ArticleGetter.getNews('ManoranjanKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('ManoranjanDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.manoranjanId);
$scope.ManoranjanDetail = ArticleGetter.getDetailNews('ManoranjanKhabar',$stateParams.manoranjanId);

})
//manoranjan news controllers end






//duniya news controllers begin
.controller('DuniyaCtrl', function($scope,ArticleGetter) {
  $scope.allDuniyaNews = ArticleGetter.getNews('DuniyaKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('DuniyaDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.duniyaId);
$scope.DuniyaDetail = ArticleGetter.getDetailNews('DuniyaKhabar',$stateParams.duniyaId);

})
//duniya news controllers end





//techgyaan news controllers begin
.controller('TechGyaanCtrl', function($scope,ArticleGetter) {
  $scope.allTechNews = ArticleGetter.getNews('TechKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('TechDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.techId);
$scope.TechDetail = ArticleGetter.getDetailNews('TechKhabar',$stateParams.techId);

})
//techgyaan news controllers end






//kaarobar news controllers begin
.controller('KaarobarCtrl', function($scope,ArticleGetter) {
  $scope.allKarobaarNews = ArticleGetter.getNews('karobaarKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('KarobaarDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.karobaarId);
$scope.KarobaarDetail = ArticleGetter.getDetailNews('karobaarKhabar',$stateParams.karobaarId);

})
//kaarobar news controllers end





//auto news controllers begin
.controller('AutoCtrl', function($scope,ArticleGetter) {
   $scope.allAutoNews = ArticleGetter.getNews('AutoKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('AutoDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.autoId);
$scope.AutoDetail = ArticleGetter.getDetailNews('AutoKhabar',$stateParams.autoId);

})
//auto news controllers end




//khel news controllers begin
.controller('KhelCtrl', function($scope,ArticleGetter) {
   $scope.allKhelNews = ArticleGetter.getNews('KhelKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('KhelDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.khelId);
$scope.KhelDetail = ArticleGetter.getDetailNews('KhelKhabar',$stateParams.khelId);

})
//khel news controllers end





//zarahatke news controllers begin
.controller('ZaraHatkeCtrl', function($scope,ArticleGetter) {
  $scope.allZaraNews = ArticleGetter.getNews('ZaraKhabar');
  $scope.date = ((new Date()).toDateString());
})

.controller('HatkeDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.hatkeId);
$scope.HatkeDetail = ArticleGetter.getDetailNews('ZaraKhabar',$stateParams.hatkeId);

})
//zarahatke news controllers end






//fashion news controllers begin
.controller('FashionCtrl', function($scope,ArticleGetter) {
  $scope.allFashionNews = ArticleGetter.getNews('FashionKhabar');
  $scope.date = ((new Date()).toDateString());
})


.controller('FashionDetailCtrl', function($scope, $stateParams,ArticleGetter) {
   console.log("clicked on " + $stateParams.fashionId);
$scope.FashionDetail = ArticleGetter.getDetailNews('FashionKhabar',$stateParams.fashionId);

});
//fashion news controllers end




