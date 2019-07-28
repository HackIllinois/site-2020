import React from 'react';

class Error extends React.Component {
  render() {
    return <p>Error: {this.props.message}</p>
  }
}

export default Error;
