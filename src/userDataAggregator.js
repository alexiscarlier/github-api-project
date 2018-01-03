(function(exports) {

  function UserDataAggregator(repoDataCollector) {
    this.repoDataCollector = repoDataCollector;
    this.userHolidayWeeklyCommits = null;
    this.userNormalWeeklyCommits = null;
  }

  UserDataAggregator.prototype.aggregateRepoCommits = function(repoCommitData) {
    dataCollector = new this.repoDataCollector();
    dataCollector.commitData(repoCommitData);
    this.userHolidayWeeklyCommits += dataCollector.holidayWeeklyCommits
    this.userNormalWeeklyCommits += dataCollector.normalWeeklyCommits
    // need getters for both of the above because I'm accessing them
    // from another class
  }

  UserDataAggregator.prototype.userHolidayWeeklyCommits = function() {
    return this.userHolidayWeeklyCommits;
  }

  UserDataAggregator.prototype.userNormalWeeklyCommits = function() {
    return this.userNormalWeeklyCommits;
  }

exports.UserDataAggregator = UserDataAggregator;
})(this);
