import React, {Component} from 'react';

import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import {Route, Switch, Redirect} from 'react-router-dom'
import axios from 'axios';
import {readCookie} from './utils/cookie';
import {getGithubUserData, getPublicRepos} from './apis/github';
import './App.css';
import './styles/common.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      publicRepos: [],
      myRepos: [],
      trendingRepos: [],
      access_token: readCookie('access_token')
    }
  }

  async componentDidMount() {
    let {access_token} = this.state;
    if(access_token){
      const user = await getGithubUserData(access_token);
      if(!user) return alert('something went wrong');
      this.setState({user});

      let publicRepos = await getPublicRepos(access_token);
      if(!publicRepos) return alert('something Went Worng');
      this.setState({publicRepos});
    }
  }

  render(){
    const {user, publicRepos, myRepos, trendingRepos, access_token} = this.state;
    if(access_token){
      return(
        <div className='App'>
          <Nav user={user}/>
          <Switch>
            <Route path='/home'>
              <Home publicRepos={publicRepos} myRepos={myRepos} trendingRepos={trendingRepos} user={user} token={access_token}/>
            </Route>
            <Redirect to='/home'/>
          </Switch>
        </div>
      )
    } else {
      return(
        <div className='App'>
          <Switch>
            <Route path='/login'>
              <Login/>
            </Route>
            <Redirect to='/login'/>
          </Switch>
        </div>
      )
    }
  }
}
