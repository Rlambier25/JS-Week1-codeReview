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
