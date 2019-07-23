import React from 'react';

import { getOAuthCode } from 'API';

class Apply extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token) {
      console.log(`${token}!`);
    } else {
      const URL = process.env.BASE_URL;
      getOAuthCode('github', `${URL}/auth/?to=${URL}/apply`);
    }
  }

  render() {
    return <p>/apply</p>
  }
}

export default Apply;
