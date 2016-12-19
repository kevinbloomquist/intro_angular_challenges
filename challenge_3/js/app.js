console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
 app.controller("infoController", infoController)
 app.controller("loanController",loanController)

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

function loanController(){
	
}