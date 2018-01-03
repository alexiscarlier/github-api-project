var chitterCommitData = require('../test_data/chitterCommitData');
var neighbourlyCommitData = require('../test_data/neighbourlyCommitData');
var UserDataAggregator = require('../src/userDataAggregator').UserDataAggregator;
var RepoDataCollector = require('../src/repoDataCollector').RepoDataCollector;

describe("User Data Aggregator", function() {
  it("Adds the commits from a repository to the users total", function() {
    userDataAggregator = new UserDataAggregator(RepoDataCollector);
    userDataAggregator.aggregateRepoCommits(chitterCommitData);
    userDataAggregator.aggregateRepoCommits(neighbourlyCommitData);
    expect(userDataAggregator.userHolidayWeeklyCommits).toEqual(19);
    expect(userDataAggregator.userNormalWeeklyCommits).toEqual(5.02);
  });
});
