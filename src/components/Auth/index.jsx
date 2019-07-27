import queryString from 'query-string';
import React from 'react';

import { getToken } from 'API';

class Auth extends React.Component {
  componentDidMount() {
    let query = this.props.location.search;
    let { code, isAndroid, isiOS, to } = queryString.parse(query);

    if (isAndroid || isiOS) {
      let os = isAndroid ? 'android' : 'ios';
      to = mobileRedirect(os, code);
    } else {
      getToken('github', code)
        .then(res => {
          console.log(res.status);
          if (res.ok) {
            let token = res.json();
            localStorage.setItem('token', token);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

    // window.location.replace(to);
  }

  render() {
    return <p>/auth</p>
  }
}

function mobileRedirect(os, code) {
  const BASE_URL = `hackillinois://org.hackillinois.${os}`;
  return `${BASE_URL}/auth?code=${code}`;
}

export default Auth;
