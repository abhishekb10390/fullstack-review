const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repoWatch: Number,
  repoName : String, 
  repoUrl : String 
});

let Repo = mongoose.model('Repo', repoSchema);
  
let save = (arrData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  
  arrData.forEach(function(repo){

  var newRepo = new Repo({username: repo.owner.login, 
              repoWatch: repo.watchers, 
              repoName: repo.name , 
              repoUrl: repo.owner.repos_url});
    newRepo.save(function(err){
      if (err){
        throw err;
      }
    });
  });
};

module.exports.save = save;
module.exports.Repo = Repo;
