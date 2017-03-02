'use strict';
var request = require('request');
var ejs = require('ejs');
var fs = require('fs');
var shivika_message='null';



var qlik = {


  callbackPatternStyle: function(req, res, next) {

    setTimeout(function(){

      var shivika_message = 'messaged is passed from timeout1'; 
      console.log('i love you shivika');
    },2000)

    setTimeout(function(){
      console.log(shivika_message);
      console.log('i love you too hardik');
    },6000)

    setTimeout(function(){
      console.log(shivika_message);
      console.log('lets marry');
    },5000)
  }
};
module.exports = qlik;