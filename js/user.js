var apiKey = require('./../.env').apiKey;

exports.Github = function(){
}

exports.Github.prototype.getRepos = function(user, displayFunction) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(user, response.main.github);
  }).fail(function(error) {
    $('.githubUser').text(error.responseJSON.message);
  });
}
