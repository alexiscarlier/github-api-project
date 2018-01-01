var data = require('../alexiscarlierGithubData');
var WinterClassifier = require('../src/winterClassifier.js').WinterClassifier;
var winterClassifier = new WinterClassifier();


describe("Winter Classifier", function() {

  it("is initialised with properties which are empty arrays", function() {
    var winterClassifier = new WinterClassifier();
    expect(winterClassifier.winterRepositories).toEqual([]);
    expect(winterClassifier.winterRepositories).toEqual([]);
  });

  it("groups repositories based on whether they were created in Winter", function() {
    var winterClassifier = new WinterClassifier();
    winterClassifier.groupByWinter(data);
    expect(winterClassifier.winterRepositories).toContain("php-application");
  });
});
