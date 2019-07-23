import queryString from 'query-string';
import React from 'react';

import { getToken } from 'API';

class Auth extends React.Component {
  componentDidMount() {
    let query = this.props.location.search;
    let { code, isAndroid, isiOS, to } = queryString.parse(query);

    if (isAndroid || isiOS) {
      let os = isAndroid ? 'android' : 'ios';
      mobileRedirect(os, code);
    } else {
      getToken('github', code, to)
        .then(res => {
          let token = res.json();
          localStorage.setItem('token', token);
        });
    }
  }

  render() {
    return <p>/auth</p>
  }
}

function mobileRedirect(os, code) {
  const BASE_URL = `hackillinois://org.hackillinois.${os}`;
  let to = `${BASE_URL}/auth?code=${code}`;
  window.location.replace(to);
}

export default Auth;
