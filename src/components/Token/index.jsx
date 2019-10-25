import React from 'react';

import {
  authenticate,
  isAuthenticated,
} from 'api';
import Loading from 'components/Loading';

import './style.scss';

export default class Token extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('/token');
      return;
    }

    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="Token">
        <h1>Copy Me!</h1>
        <p>{sessionStorage.token}</p>
      </div>
    );
  }
}
