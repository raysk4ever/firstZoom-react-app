import React from 'react';
import '../styles/repolist.css';

class RepoList extends React.Component {
  handleGotoGithub = (repo, mode) => {
    let repoUrl = 'https://github.com/';
    if(mode == 'trend') repoUrl += repo.fullName
    else repoUrl += repo.owner.login + '/' + repo.name;
    window.open(repoUrl)
  }
  render(){
    const {repoList, mode} = this.props;
    if(mode != 'trend'){
      return (
        <div className='repo-wrapper'>
          {repoList.map((repo, index) => (
            <div key={index} className='single-repo-item'>
              <div className='repo-head'>
                <div className='repo-head-left'>
                  {repo.owner && <img className='avatar' src={repo.owner.avatar_url}/>}
                  {repo.owner && <span>{repo.owner.login}</span>}
                </div>
                <div className='repo-head-right'>
                  <span className='heading'>{repo.name}</span>
                  <span className='desc'>{repo.description?repo.description.substring(0, 35):'No Description Present'}</span>
                </div>
              </div>
              <div className='repo-body'>
                {repo.pushed_at?<span>Pushed at: {repo.pushed_at}</span>:null}
                {repo.size?<span>size: {repo.size} KB</span>:null}
                {repo.language?<span>Language: {repo.language}</span>:null}
                {repo.open_issues?<span>Open Issues: {repo.open_issues}</span>:null}
              </div>
              <div className='repo-footer'>
                {repo.forks_count?<span>Fork ({repo.forks_count})</span>:null}
              </div>
              <button onClick={()=>this.handleGotoGithub(repo, mode)} className='btn btn-pink'>Go to github</button>
            </div>
          ))}
        </div>
      )
    }else {
      return (
        <div className='repo-wrapper'>
          {repoList.map((repo, index) => (
            <div key={index} className='single-repo-item'>
              <div className='repo-head'>
                <div className='repo-head-left'>
                </div>
                <div className='repo-head-right'>
                  <span className='heading'>{repo.fullName}</span>
                  <span className='desc'>{repo.desc?repo.desc.substring(0, 30):'No Description Present'}</span>
                </div>
              </div>
              <div className='repo-body'>
                <span>Language: {repo.lang}</span>
              </div>
              <div className='repo-footer'>
                <span>{repo.todayStar}</span>
                <span>Fork ({repo.forks})</span>
                <span>Star ({repo.star})</span>
              </div>
              <button onClick={()=>this.handleGotoGithub(repo, mode)} className='btn btn-pink'>Go to github</button>
            </div>
          ))}
        </div>
      )
    }
  }
}

export default RepoList;
