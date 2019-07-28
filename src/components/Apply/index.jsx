import React from 'react';

import { authenticate } from 'API';

class Apply extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token');

    if (token) {
      console.log(token);
    } else {
      const BASE_URL = process.env.REACT_APP_URL;
      authenticate('github', `${BASE_URL}/auth/?to=/apply`);
    }
  }

  render() {
    return <p>/apply</p>
  }
}

export default Apply;
