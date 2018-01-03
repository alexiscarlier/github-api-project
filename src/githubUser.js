(function(exports) {

  function GithubUser() {
    this.repoNames = [];
  }

  GithubUser.prototype.getRepoNames = function(userData) {
    userData.forEach((data)=> {
      this.repoNames.push(data.name);
    })
  }

  GithubUser.prototype.repoNames = function() {
    return this.repoNames;
  }

exports.GithubUser = GithubUser;
})(this);
