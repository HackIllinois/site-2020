import React from 'react';
import './style.scss';

import back from 'assets/icons/back.svg';

export default function BackButton(props) {
  const { onClick } = props;
  return (
    <button className="back" type="button" onClick={onClick}>
      <img src={back} alt="back" /> BACK
    </button>
  );
}
