angular.module('starter.services', [])

.factory('ArticleGetter', function($firebaseArray) {
var rootRef = firebase.database().ref();
    var badikhabarRef = rootRef.child('Badi Khabarein');
  var allBadiNews = $firebaseArray(badikhabarRef);
 


 
  
  return {
  	all: function() {
      return allBadiNews;
    },
   
    get: function(chatId) {
      for (var i = 0; i < allBadiNews.length; i++) {
        if (allBadiNews[i].$id === chatId) {
          return allBadiNews[i];
        }
      }
      return null;
    }
  };
});
