(function(exports) {

  function RepoDataCollector() {
    this.holidayWeeks = [51, 52];
    this.holidayWeeklyCommits = null;
    this.normalWeeklyCommits = null;
  }

  RepoDataCollector.prototype.getData = function() {

  }

  RepoDataCollector.prototype.commitData = function(apiCommitData) {
    this._getHolidayCommits(apiCommitData);
  }

  RepoDataCollector.prototype._setHolidayCommits = function(apiCommitData) {
    this.holidayWeeks.forEach((week)=> {
      this.holidayWeeklyCommits += (apiCommitData[week - 1].total)/this.holidayWeeks.length
    })
  }

  RepoDataCollector.prototype.additionsDeletionsData = function() {

  }

exports.RepoDataCollector = RepoDataCollector;
})(this);
