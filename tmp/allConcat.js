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
