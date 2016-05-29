(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "80bf4b5409bb6cb199e732b8d1d7cd098615482f";

},{}],2:[function(require,module,exports){


var apiKey = require('./../.env').apiKey;


exports.getRepos = function(user){
  // The $.get() method loads data from the server using a HTTP GET request.
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(repo){
    //^^this follows the standards from the codeReview page. Utilizes the elements within the api link.
    for(var i=0; i < repo.length; i++){
      //for loop runs through the length of repo. this reaches down to the bottom of the repository library and returns the list.
      if (repo[i].description.length !== 0)
      //if there is NOT a missing description. Then run the following code. The following code adds the information within the API elements to the link and then returns it.
      $('#githubUser').append("<h4><a href='https://github.com/daneden/" + repo[i].name + "'>" + repo[i].name + "</a></h4><p id='repo'><h3 id='repo' >Description: </h3>" + repo[i].description + "</p><p id='repo'><h3>Created: </h3>" + moment(repo[i].created_at).format('lll') + "</p><hr>");
      //moment() uses the repo[i] which is the variable that circulates through the loop, and finds the created_at api method and returns the date the users github was created with format('lll'). Formate lll uses the [month, day, year, time] method.
    }
  });

//retrieves the users github info as requested through the input form.
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    // $('#githubUser').show();
    $('#githubUser').append("<p><a href='https://github.com/" + response.login + "'></a></p><img id='image' src=" + response.avatar_url + "</img><h1 id='name'>" + response.name + "</h1><p id='date'><h2>Joined: </h2>" + moment(response.created_at).format("lll") + "</p><br>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
//retrieves and links information between the js pages and api page in the project directory
var user = require('./../js/user.js');
var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#search').click(function(){
    $('#githubUser').empty();
    var userSearch = $('#input').val();
    return  user.getRepos(userSearch);
  });
});

$('.githubUser').click(function(){
  getRepos(input);
});



var apiKey = require('./../.env').apiKey;


exports.getRepos = function(user){
  // The $.get() method loads data from the server using a HTTP GET request.
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(repo){
    //^^this follows the standards from the codeReview page. Utilizes the elements within the api link.
    for(var i=0; i < repo.length; i++){
      //for loop runs through the length of repo. this reaches down to the bottom of the repository library and returns the list.
      if (repo[i].description.length !== 0)
      //if there is NOT a missing description. Then run the following code. The following code adds the information within the API elements to the link and then returns it.
      $('#githubUser').append("<h4><a href='https://github.com/daneden/" + repo[i].name + "'>" + repo[i].name + "</a></h4><p id='repo'><h3 id='repo' >Description: </h3>" + repo[i].description + "</p><p id='repo'><h3>Created: </h3>" + moment(repo[i].created_at).format('lll') + "</p><hr>");
      //moment() uses the repo[i] which is the variable that circulates through the loop, and finds the created_at api method and returns the date the users github was created with format('lll'). Formate lll uses the [month, day, year, time] method.
    }
  });

//retrieves the users github info as requested through the input form.
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    // $('#githubUser').show();
    $('#githubUser').append("<p><a href='https://github.com/" + response.login + "'></a></p><img id='image' src=" + response.avatar_url + "</img><h1 id='name'>" + response.name + "</h1><p id='date'><h2>Joined: </h2>" + moment(response.created_at).format("lll") + "</p><br>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1,"./../js/user.js":2}]},{},[3]);
