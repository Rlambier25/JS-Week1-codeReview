var apiKey = require('./../.env').apiKey;
var Github = require('./../js/user.js').Github;

$(document).ready(function() {
  var currentGithubObject = new Github();
  $('#githubProfile').click(function() {
    var user = $('#user').val();
    $('#user').val("");
    var github = currentGithubObject.getRepos(user);
    $('.githubUser').text("Your github user is " + user + " is " + github + "%");
    console.log(github);
  });
});
