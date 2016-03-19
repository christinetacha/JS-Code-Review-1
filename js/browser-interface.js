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
