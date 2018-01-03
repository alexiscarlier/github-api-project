$(document).ready(function() {

  var githubUser = new GithubUser();
  var userDataAggregator = new UserDataAggregator(RepoDataCollector);


  $('#select-user').submit(function(event) {
    event.preventDefault();
    var user = $('#github-user').val();
    $('#current-user').text(user);
    $.get('https://api.github.com/users/' + user + '/repos?per_page=100', function(data) {
      githubUser.getRepoNames(data);
    })
    githubUser.repoNames.forEach((repoName)=> {
      $.get('https://api.github.com/repos/alexiscarlier/' + repoName + '/stats/commit_activity', function(repoCommitData) {
        userDataAggregator.aggregateRepoCommits(repoCommitData);
      })
    })
    $('#holiday-commits').text(userDataAggregator.userHolidayWeeklyCommits());
    $('#normal-commits').text(userDataAggregator.userNormalWeeklyCommits());
  })

});
