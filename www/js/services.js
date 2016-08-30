angular.module('starter.services', [])

.factory('ArticleGetter', ["$firebaseObject","$firebaseArray",function($firebaseObject,$firebaseArray) {


var rootRef = firebase.database().ref();
// var badiNewsRef = rootRef.child('BadiKhabar');

    
  var allNews = $firebaseObject(rootRef);
 


function all() {
	// debugger;
	console.log(allNews);
      return allNews;
    }

function getNews(menuNews){
var rootRef = firebase.database().ref();
var newsRef = rootRef.child(menuNews);
 return $firebaseArray(newsRef);


}


function getDetailNews(menuNews,chatId){
	// debugger;
var rootRef = firebase.database().ref();
var newsRef = rootRef.child(menuNews);
 var dabbu = $firebaseArray(newsRef);
 console.log(dabbu);
 // console.log(chatId);


for (var i = 0; i < dabbu.length; i++) {
	    if (dabbu[i].$id === chatId) {
	      return dabbu[i];
	    }
	}
  return null;


}


	// function getBadiDetail(chatId){
			
	// for (var i = 0; i < allBadiNews.length; i++) {
	//     if (allBadiNews[i].$id === chatId) {
	//       return allBadiNews[i];
	//     }
	// }
 //  return null;
	// 	}
      
    
  
  return {
  	all: all,
  	
  	getDetailNews:getDetailNews,
  	getNews: getNews
   

  };
}]);
