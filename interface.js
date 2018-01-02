$(document).ready(function() {

  var githubUser = new GithubUser();
  var repoDataCollector = new RepoDataCollector();

  // $('#select-user').submit(function(event) {
  //   event.preventDefault();
  //   var user = $('#github-user').val();
  //   $.get('https://api.github.com/users/' + user + '/repos?per_page=100', function(data) {
  //     githubUser.getRepoNames(data);
  //     $('#current-user').text(githubUser.repoNames[0]);
  //   })
  // })

  $('#select-user').submit(function(event) {
    event.preventDefault();
    var user = $('#github-user').val();
      $.get('https://api.github.com/users/' + user + '/repos?per_page=100', function(data1) {
        githubUser.getRepoNames(data1);
        githubUser.repoNames.forEach((repo)=> {
          $.get('https://api.github.com/repos/alexiscarlier/' + repo + '/stats/commit_activity', function(data2) {
            repoDataCollector.commitData(data2);
          });
        });
      })
    })

});
