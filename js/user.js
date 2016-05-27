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
