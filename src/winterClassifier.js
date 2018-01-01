(function(exports) {

  function WinterClassifier() {
    this.winterRepositories = [];
    this.otherRepositories = [];
  }

  WinterClassifier.prototype.getWinterRepositories = function() {
    return this.winterRepositories;
  }

exports.WinterClassifier = WinterClassifier;
})(this);

// module.exports = WinterClassifier;
// var winterClassifier = new WinterClassifier();
// console.log(winterClassifier.winterRepositories);
