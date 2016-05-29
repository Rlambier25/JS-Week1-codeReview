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
