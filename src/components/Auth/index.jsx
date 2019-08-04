import React from 'react';
import queryString from 'query-string';

import { getToken } from 'API';
import Loading from 'components/Loading';

export default class Auth extends React.Component {
  componentDidMount() {
    let queries = queryString.parse(this.props.location.search);
    let { code, isAndroid, isiOS, to } = queries;

    if (!code) {
      return;
    }

    if (isAndroid || isiOS) {
      let os = isAndroid ? 'android' : 'ios';
      to = mobileRedirect(os, code);
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
    return <Loading />
  }
}

function mobileRedirect(os, code) {
  return `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
}
