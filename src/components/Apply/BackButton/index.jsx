import React from 'react';
import './style.scss';

import back from 'assets/apply/back.svg';

export default function BackButton(props) {
  return (
    <button className="back" type="button" onClick={props.onClick}>
      <img src={back} alt="back" /> BACK
    </button>
  );
}