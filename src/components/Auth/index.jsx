import React from 'react';
import queryString from 'query-string';

import { getToken } from 'api';
import Loading from 'components/Loading';

function mobileRedirect(os, code) {
  return `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
}

export default class Auth extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const queries = queryString.parse(location.search);
    const { code, isAndroid, isiOS } = queries;
    let { to } = queries;

    if (!code) {
      return;
    }

    if (isAndroid || isiOS) {
      const os = isAndroid ? 'android' : 'ios';
      to = mobileRedirect(os, code);
      window.location.replace(to);
    } else {
      getToken(code).then(token => {
        sessionStorage.setItem('token', token.token);
        window.location.replace(to);
      }).catch(() => {
        alert('Authentication failed.');
      });
    }
  }

  render() {
    return <Loading />;
  }
}
