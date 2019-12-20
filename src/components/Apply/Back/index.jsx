import React from 'react';
import back from 'assets/apply/back.svg';
import './style.scss';

export default function Back(props) {
  return (
    <button type="button" onClick={props.onClick}>
      <img src={back} alt="back" /> Back
    </button>
  );
}
