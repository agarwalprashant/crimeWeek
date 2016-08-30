angular.module('starter.services', [])

.factory('ArticleGetter', ["$firebaseObject","$firebaseArray",function($firebaseObject,$firebaseArray) {


var rootRef = firebase.database().ref();
// var badiNewsRef = rootRef.child('BadiKhabar');

    
  var allNews = $firebaseObject(rootRef);
 


function all() {
	
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
var articleRef = newsRef.child(chatId);
 return $firebaseObject(articleRef);
 
}


	 
  return {

  	all: all,
  	getDetailNews:getDetailNews,
  	getNews: getNews
   

  };
}]);
