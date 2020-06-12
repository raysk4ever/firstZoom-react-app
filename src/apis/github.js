import axios from 'axios';

export function getGithubUserData(access_token){
    let url = 'https://api.github.com' + '/user';
    let options = {
      headers: {
        'Authorization': 'token ' + access_token
      }
    }
    return axios.get(url, options).then(data=>{
      return data.data;
    }).catch(err=>{
      console.log(err.getMessage);
      return null;
    })
}

export function getPublicRepos(access_token){
  // user/repos // repositories
  let url = 'https://api.github.com' + '/repositories';
  let options = {
    headers: {
      'Authorization': 'token ' + access_token
    }
  }
  return axios.get(url, options).then(data=>{
    return data.data;
  }).catch(err=>{
    console.log(err.getMessage);
    return null;
  })
}

export function getRepos(access_token, mode='trend'){
  let url = 'http://localhost:5000/auth/github/repo?mode=asd';
  return axios.post(url, {access_token, mode}).then(data => {
    return data.data
  }).catch(err=>{
    return null
  })
}
