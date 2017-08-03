import React from 'react';

var Repos = (props) => (
  <div>
    <a href={props.oneRepo.repoUrl}> {props.oneRepo.username}, {props.oneRepo.repoName} </a>  
  </div>
)

export default Repos;

