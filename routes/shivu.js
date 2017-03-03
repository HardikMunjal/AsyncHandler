'use strict';
var request = require('request');
var ejs = require('ejs');
var fs = require('fs');
var shivika_message='null hai bhai';



var qlik = {


  parallelAsyncFunction: function(req, res, next) {

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
  },

  nestedAsyncFunction: function(req, res, next){

    setTimeout(function(){

      var shivika_message = 'messaged is passed from timeout1'; 
      console.log('i love you shivika');
      setTimeout(function(){
        console.log(shivika_message);
        console.log('i love you too hardik');
        setTimeout(function(){
          console.log(shivika_message);
          console.log('lets marry');
          },5000)
      },6000)
    },2000)

  },

  callbackStylePattern: function(req, res, next){
   
   var days = req.query.days;
   qlik.rainForecastor(days, function(err,result){

   })
  },

  rainForecastor: function(days,cb){
    if(days>0){
      cb(null,"rain will come on thursday");
    }
    else{
      cb(new Error("Something bad happened"));
    }


  }
};
module.exports = qlik;