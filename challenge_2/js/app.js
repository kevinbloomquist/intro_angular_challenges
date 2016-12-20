console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("exerciseController",exerciseController);

function WelcomeController(){
  this.full_name = "Dirty Mike and the Boys";
  this.age = 38;
  this.city = "Baltimore";
  this.state = "MD";

  // couldn't get either apporach to work
  this.shout = function(input){
  	var word = input.toUpperCase();
  	return word +"!";
  };
};
  
  // app.filter('shout',function(input){
  // 	input = input||'';
  // 	var shouted = input.toUppercase;
  // 	return shouted +"!";
  // });
  function daysLeft(){
    var today = new Date();
    var lastDay = new Date(today.getFullYear()+1,1,3);
    if(today.getMonth()==1&&today.getDate()>3) {
      lastDay.setFullYear(lastDay.getFullYear()+1);
    }
    var oneDay = 1000*60*60*24;
    return Math.ceil((lastDay.getTime()- today.getTime())/(oneDay)) + " days left";
  
  };

function exerciseController(){
	this.class_name = "BNCOZO";
	this.enrolled_students=10;
	this.start_date = "10/31/2016";
	this.end_date = "02/03/17";
	this.daysRemaining = daysLeft();

 

};

