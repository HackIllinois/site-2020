import React from 'react';
import queryString from 'query-string';

import { getToken } from 'api';
import Loading from 'components/Loading';

function mobileRedirect(os, code) {
  const to = `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
  window.location.replace(to);
}

export default class Auth extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const {
      code,
      isAndroid,
      isiOS,
      to,
    } = queryString.parse(location.search);

    if (!code) {
      return;
    }

    if (isAndroid || isiOS) {
      const os = isAndroid ? 'android' : 'ios';
      mobileRedirect(os, code);
    } else {
      getToken(code).then(token => {
        sessionStorage.setItem('token', token);
        window.location.replace(to);
      });
    }
  }

  render() {
    return <Loading />;
  }
}
