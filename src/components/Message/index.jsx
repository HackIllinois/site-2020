import React from 'react';

import logo from 'assets/logos/hackillinois.svg';
import './style.scss';

export default function Message(props) {
  const { title, text } = props;

  return (
    <div className="Message">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
