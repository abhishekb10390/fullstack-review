const express = require('express');
const saveRepo = require('../database/index');
var bodyParser = require("body-parser");
const getGitApi = require('../helpers/github');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()) ;      // to support JSON-encoded bodies


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.term;
  //console.log(req.body);
  getGitApi.getReposByUsername(username, saveRepo.save);
  res.send();

});

app.get('/repos', function (req, res, next) {

//   saveRepo.Repo.find({'username'}, function(err, results){
//     console.log('*****' + results[0]);
//     res.send();
//   });
// });

  // TODO - your code here!
  // This route should send back the top 25 repos
  saveRepo.Repo.find().sort({'watchers': -1}).limit(25).exec(function(err, results){
    
    if (err)  {
      throw err;
    } else {
      //console.log(Array.isArray(results))
      // res.send(JSON.stringify(results));
      res.send(results);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

