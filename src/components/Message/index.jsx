import React from 'react';

import logo from 'assets/hackillinois_logo.svg';
import './style.scss';

export default class Message extends React.Component {
  render() {
    const { title, text } = this.props;

    return (
      <div className="Message">
        <img src={logo} alt="logo" />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    );
  }
}
