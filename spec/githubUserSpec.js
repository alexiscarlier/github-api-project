var userData = require('../alexiscarlierGithubData');
var GithubUser = require('../src/githubUser.js').GithubUser;

describe("Github User", function() {

  it("stores the repository names for a github user", function() {
    var githubUser = new GithubUser();
    githubUser.getRepoNames(userData);
    expect(githubUser.repoNames).toEqual([ 'airport-challenge',
    'bank_tech_test',
    'Battle',
    'bookmark-manager-ruby',
    'bookmark_manager',
    'bowling-challenge',
    'bowling-scorecard-calculator',
    'chitter',
    'chitter-challenge',
    'chrome-extension-background-color-changer',
    'clmystery',
    'CV',
    'fizz-buzz',
    'fizz-buzz-go',
    'gilded-rose-kata_js',
    'Ginit',
    'githead',
    'instagram-challenge',
    'LearningGoAndReact',
    'media-library',
    'neighbourly-app',
    'news-summary-challenge',
    'Note-challenge',
    'opposing-viewpoints-project',
    'oyster-card',
    'php-app',
    'php-application',
    'playing-with-git',
    'python-lsd-maths-regression',
    'rps-challenge',
    'ruby-kickstart',
    'ruby-refresher',
    'student-directory',
    'takeaway-challenge',
    'tic-tac-toe-test',
    'Week-3-Makers-intro-to-the-web' ]);
  });
});
