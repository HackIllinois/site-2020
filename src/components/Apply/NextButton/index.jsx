import React from 'react';
import './style.scss';

import next from 'assets/apply/next.svg';

export default function NextButton(props) {
  return (
    <button className="next" type="button" onClick={props.onClick}>
      NEXT <img src={next} alt="next" />
    </button>
  );
}
