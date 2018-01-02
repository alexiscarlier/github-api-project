var apiCommitData = require('../test_data/chitterCommitData');
var RepoDataCollector = require('../src/repoDataCollector').RepoDataCollector;

describe("Repo Data Collector", function() {

  it("gets the weekly commits during holiday and normal periods", function() {
    repoDataCollector = new RepoDataCollector();
    repoDataCollector.commitData(apiCommitData);
    expect(repoDataCollector.holidayWeeklyCommits).toEqual(19);
    expect(repoDataCollector.normalWeeklyCommits).toEqual(0.3);
  });
});
