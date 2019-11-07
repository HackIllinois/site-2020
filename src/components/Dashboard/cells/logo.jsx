import React from 'react';
import hackillinoislogo from '../../../assets/hackillinois_logo.svg';

function Logo(props, context) {
  return (
    <div className={`cell short-cell ${ context}`} id="logo-cell">
      <img src={hackillinoislogo} id="logo" alt="HackIllinois Logo" />
      <h1>Explore. <br /> Connect. <br /> Build. </h1>
    </div>
  );
}

export default Logo;
