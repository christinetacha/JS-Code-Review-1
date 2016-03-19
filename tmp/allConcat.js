// var responseArray = require("./git-interface.js").responseArray;
//
// Could not make this ^ require work for the life of me. Pls help

$(function() {
  $('form#getRepos').submit(function(event) {
    event.preventDefault();
    var ghUserName = $('#enterUsername').val();
    exports.getRepos(ghUserName);
  });
});

var apiKey = require('./../.env').apiKey;
// var responseArray = [];

exports.getRepos = function(gitUser){
  $.get('https://api.github.com/users/'+ gitUser +'/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].name);
      $('.showRepos').append('<p class="repoNames">'+ response[i].name +'</p>');
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
