var apiKey = require("./../.env").apiKey;

exports.getRepos = function(input) {
  $.get('https://api.github.com/users/' + input + '?access_token=' + e411700fa34809cd89e67c21d61c7e99a31776ad).then(function(response) {
    var userName = response.name;
    console.log(userName);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
