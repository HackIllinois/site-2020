import React from 'react';

export default class Error extends React.Component {
  render() {
    return <p>Error: {this.props.message}</p>
  }
}
