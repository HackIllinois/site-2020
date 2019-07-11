import queryString from 'query-string';
import React from 'react';

class Auth extends React.Component {
  componentDidMount() {
    let query = this.props.location.search;
    let { isAndroid, isiOS, code } = queryString.parse(query);

    if (isAndroid || isiOS) {
      let os = isAndroid ? 'android' : 'ios';
      let url = `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
      window.location.assign(url);
      console.log(url);
    }
  }

  render() {
    return <p>Authorizing...</p>
  }
}

export default Auth;
