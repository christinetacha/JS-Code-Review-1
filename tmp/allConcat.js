$(function() {
  console.log(exports.getRepos());

});

var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  // $.get('https://api.github.com/users/daneden?access_token=e411700fa34809cd89e67c21d61c7e99a31776ad').then(function(response){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};






// $(document).ready(function() {
//   var userName = document.getElementById('enterUsername');
//   var userArray = [];
//   $('form#getRepos').submit(function(event) {
//     $.getRepos('userName');
//   });
//   console.log("got it!");
// });
