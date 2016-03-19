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
