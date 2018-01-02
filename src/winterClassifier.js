(function(exports) {

  function WinterClassifier() {
    this.winterRepositories = [];
    this.otherRepositories = [];
  }

  WinterClassifier.prototype.groupByWinter = function(dataset) {
    dataset.forEach((data)=> {
      console.log(data.name);
      console.log(data.created_at);
    })
    // return this.winterRepositories;
  }


exports.WinterClassifier = WinterClassifier;
})(this);
