import React from 'react';
import '../styles/nav.css';
import {eraseCookie} from '../utils/cookie';
export default class Nav extends React.Component {
  handleLogout = () => {
    eraseCookie('access_token');
    window.location.href = '/login';
  }
  render(){
    const {user} = this.props;
    return(
      <div className='nav-wrapper'>
        <span>Git Star</span>
        <div className='nav-right'>
          <span>Hi, {user.name} !</span>
        </div>
        <div className='df aic'>
          <span className='bg-green' onClick={this.handleLogout}>Logout!</span>
          <img className='avatar' src={user.avatar_url}/>
        </div>
      </div>
    )
  }
}
