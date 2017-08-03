import React from 'react';
import Repos from './Repos.jsx';

const RepoList = (props) => (

  <div>
  <h4> RepoList </h4>
  {props.repos.map((repo) => 
    <Repos oneRepo={repo}/>
  )}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;