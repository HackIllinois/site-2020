import queryString from 'query-string';
import React from 'react';

import { getToken } from 'API';

class Auth extends React.Component {
  componentDidMount() {
    let queries = queryString.parse(this.props.location.search);
    let { code, isAndroid, isiOS, to } = queries;

    if (!code) {
      return;
    }

    if (isAndroid || isiOS) {
      let os = isAndroid ? 'android' : 'ios';
      to = getMobileRedirect(os, code);
      window.location.replace(to);
    } else {
      getToken(code).then(token => {
        sessionStorage.setItem('token', token);
        window.location.replace(to);
      }).catch(err => {
        alert('Authentication failed.');
      });
    }
  }

  render() {
    return <p>/auth</p>
  }
}

function getMobileRedirect(os, code) {
  return `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
}

export default Auth;
