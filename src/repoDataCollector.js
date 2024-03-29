(function(exports) {

  function RepoDataCollector() {
    this.holidayWeeks = [51, 52];
    this.holidayWeeklyCommits = null;
    this.normalWeeklyCommits = null;
  }

  RepoDataCollector.prototype.commitData = function(apiCommitData) {
    this._setHolidayCommits(apiCommitData);
    this._setNormalCommits(apiCommitData);
  }

  RepoDataCollector.prototype._setHolidayCommits = function(apiCommitData) {
    this.holidayWeeks.forEach((week)=> {
      this.holidayWeeklyCommits += (apiCommitData[week - 1].total)/this.holidayWeeks.length
    })
  }

  RepoDataCollector.prototype._setNormalCommits = function(apiCommitData) {
    for (i=0; i < apiCommitData.length; i++) {
      if(this.holidayWeeks.includes(i+1) === false){
        this.normalWeeklyCommits += apiCommitData[i].total/(52-this.holidayWeeks.length);
      }
    }
  }

exports.RepoDataCollector = RepoDataCollector;
})(this);
