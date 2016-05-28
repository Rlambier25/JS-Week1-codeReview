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
