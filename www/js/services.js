angular.module('starter.services', [])

.factory('ArticleGetter', ["$firebaseObject","$firebaseArray",function($firebaseObject,$firebaseArray) {


var rootRef = firebase.database().ref();
var badiNewsRef = rootRef.child('BadiKhabar');

    // var badikhabarRef = rootRef.child('Badi Khabarein');
  var allNews = $firebaseObject(rootRef);
 var allBadiNews = $firebaseArray(badiNewsRef);


function all() {
	// debugger;
	console.log(allNews);
      return allNews;
    }

 function getBadiNews() {
 	console.log(allBadiNews);
 	return allBadiNews;
 	}

 		function get(chatId){
 			for (var i = 0; i < allBadiNews.length; i++) {
        if (allBadiNews[i].$id === chatId) {
          return allBadiNews[i];
        }
      }
      return null;
 		}
      
    
  
  return {
  	all: all,
  	getBadiNews: getBadiNews,
  	get:get
   

  };
}]);
