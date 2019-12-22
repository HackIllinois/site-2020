import React from 'react';
import './style.scss';

import next from 'assets/apply/next.svg';

export default function NextButton(props) {
  const { onClick } = props;
  return (
    <button className="next" type="button" onClick={onClick}>
      NEXT <img src={next} alt="next" />
    </button>
  );
}
