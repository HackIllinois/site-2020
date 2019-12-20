import React from 'react';
import next from 'assets/apply/next.svg';
import './style.scss';

export default function Next(props) {
  return (
    <button type="button" onClick={props.onClick}>
      Next <img src={next} alt="next" />
    </button>
  );
}
