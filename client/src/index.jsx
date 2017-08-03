import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repos from './components/Repos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    },
    this.addRepo = this.addRepo.bind(this);

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
   type: "POST",
   url: "/repos",
   data: JSON.stringify({term}),
   contentType: 'application/json',
   success: function(msg){
     //do nothing for now
   }
});
  }
  addRepo (data) {
    this.setState({repos: data}); 
  }
   componentDidMount () {
    var that = this
    $.ajax({
      type: "GET",
      url: "/repos",
      contentType: 'application/json',
      success: function(data){
        that.setState({repos: data})
     },
    error: function(err){
    console.error('error', err)
   }
    });
  }
  

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));