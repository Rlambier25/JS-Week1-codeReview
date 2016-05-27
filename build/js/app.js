(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "80bf4b5409bb6cb199e732b8d1d7cd098615482f";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.Github = function(){
};

exports.Github.prototype.getRepos = function(user, name) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
    console.log(response);
    var name = text(response.name);
  }).fail(function(error) {
    $('.githubUser').text(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Github = require('./../js/user.js').Github;


$(document).ready(function() {
  var currentGithubObject = new Github();
  $('#githubProfile').click(function() {
    var user = $('#user').val();
    $('#user').val("");
    var github = currentGithubObject.getRepos(response);
    $('.githubUser').text("Your github user is " + user + " is " + github + ".");
  });
});

var apiKey = require('./../.env').apiKey;

exports.Github = function(){
};

exports.Github.prototype.getRepos = function(user, name) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
    console.log(response);
    var name = text(response.name);
  }).fail(function(error) {
    $('.githubUser').text(error.responseJSON.message);
  });
};

},{"./../.env":1,"./../js/user.js":2}]},{},[3]);
