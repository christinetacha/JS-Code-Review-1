$(function() {
  $('form#getRepos').submit(function(event) {
    var ghUserName = $('#enterUsername').val();
    exports.getRepos(ghUserName);
    event.preventDefault();
  });
});
