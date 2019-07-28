import React from 'react';

import { authenticate } from 'API';

class Apply extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token) {
      console.log(token);
    } else {
      // const BASE_URL = process.env.BASE_URL;
      // console.log(BASE_URL);
      const BASE_URL = 'https://dev.hackillinois.org';
      authenticate('github', `${BASE_URL}/auth/?to=/apply`);
    }
  }

  render() {
    return <p>/apply</p>
  }
}

export default Apply;
