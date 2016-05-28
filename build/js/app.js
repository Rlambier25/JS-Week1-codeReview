(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "80bf4b5409bb6cb199e732b8d1d7cd098615482f";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.Repository = function(){
};
exports.Repository.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.githubUser').text("These are the repositories for: " + user + ":" +response[0].name);
  }).fail(function(error) {
    $('.githubUser').text(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var Repository = require('../js/user.js').Repository;

$(document).ready(function() {
  var currentRepository = new Repository();
  $('#githubProfile').click(function(){
    var user = $('#user').val();
    $('#user').val("");
    console.log(user);
    var repositories = currentRepository.getRepos(user);
    console.log(repositories);
    $('.githubUser').text('These are the repositories for:' + user + ':' + repositories + '.');
  });
});

var apiKey = require('./../.env').apiKey;

exports.Repository = function(){
};
exports.Repository.prototype.getRepos = function(user) {
  $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.githubUser').text("These are the repositories for: " + user + ":" +response[0].name);
  }).fail(function(error) {
    $('.githubUser').text(error.responseJSON.message);
  });
};

},{"../js/user.js":2,"./../.env":1}]},{},[3]);
