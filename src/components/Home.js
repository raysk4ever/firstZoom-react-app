import React, {Component} from 'react'
import RepoList from './RepoList';
import {getRepos} from '../apis/github';

export default class Home extends Component {
  repoList=[];
  constructor(props){
    super(props);
    this.state = {
      mode: 'trend',
      repoList: []
    }
  }
  componentDidMount(){
    let {mode} = this.state;
    this.getRepoByMode(mode);
  }

  handleModeClick = mode => {
    this.setState({mode})
    this.getRepoByMode(mode);

  }

  getRepoByMode = mode => {
    const {token} = this.props;
    getRepos(token, mode).then(data=>{
      this.setState({repoList: data.data})
    }).catch(err=>{
      this.setState({repoList: []})
    });
  }

  render(){
    const {user} = this.props;
    const {mode, repoList} = this.state;
    return(
      <div className='df fdc repo-wrapper'>
        <span className='ta-c'>Github Repositories</span>
        <div className='ta-c m-10'>
          <button onClick={() => this.handleModeClick('trend')} className={`btn-grp btn-grp-left ${mode=='trend'?'btn-grp-active':''}`}>Trending</button>
          <button onClick={() => this.handleModeClick('publicRepos')} className={`btn-grp btn-grp-mid ${mode=='publicRepos'?'btn-grp-active':''}`}>Public Repos</button>
          <button onClick={() => this.handleModeClick('myRepos')} className={`btn-grp btn-grp-right ${mode=='myRepos'?'btn-grp-active':''}`}>My Repos</button>
        </div>
      {repoList.length?<RepoList mode={mode} repoList={repoList}/>:(<span>No Repo Found Yet!</span>)}
      </div>
    )
  }
}
