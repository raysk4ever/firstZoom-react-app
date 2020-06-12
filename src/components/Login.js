import React, {Component} from 'react';
import '../styles/login.css';

export default class Login extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {handleGithubLogin} = this.props;
    return(
      <div className='App aic'>
        <div className='df fdc aic login-card'>
          <div className='df fdc aic'>
            <span className='t-large'>Welcome To</span>
            <span className='t-largex'>Git Star</span>
          </div>
          <span>Let's Begin</span>
          <a href='https://github.com/login/oauth/authorize?client_id=681031d720239e5cb9f7&scope=user repo'>Login with Github</a>
        </div>
      </div>
    )
  }
}
