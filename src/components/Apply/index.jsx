import React from 'react';

import { getOAuthCode } from 'API';

class Apply extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token) {
      console.log(`${token}!`);
    } else {
      const BASE_URL = 'https://dev.hackillinois.org';
      let to = encodeURIComponent(`${BASE_URL}/apply`);
      getOAuthCode('github', `${BASE_URL}/auth/?to=${to}`);
    }
  }

  render() {
    return <p>/apply</p>
  }
}

export default Apply;
