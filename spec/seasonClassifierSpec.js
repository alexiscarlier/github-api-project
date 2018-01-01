var data = require('../alexiscarlierGithubData');

describe("Winter Classifier", function() {

  it("groups repositories based on whether they were created in Winter", function() {
    winterClassifier = new WinterClassifier();
    winterClassifier.groupByWinter(data);
    expect(winterClassifier.winterRepositories).toContain("php-application");
  });
});
