(function(exports) {

  function GithubUser() {
    this.repoNames = [];
  }

  GithubUser.prototype.getRepoNames = function(userData) {
    userData.forEach((data)=> {
      this.repoNames.push(data.name);
    })
  }

exports.GithubUser = GithubUser;
})(this);
