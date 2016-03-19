$(function() {
  $('form#getRepos').submit(function(event) {
    var ghUserName = $('#enterUsername').val();
    exports.getRepos(ghUserName);
    event.preventDefault();
  });
});

var apiKey = require('./../.env').apiKey;

exports.getRepos = function(gitUser){
  $.get('https://api.github.com/users/'+ gitUser +'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
