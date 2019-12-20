import React from 'react';
import './style.scss';

import back from 'assets/apply/back.svg';

export default function BackButton(props) {
  return (
    <button className="back" onClick={props.onClick}>
      <img src={back} alt="back" /> Back
    </button>
  );
}
