import React from 'react';
import './style.scss';

import next from 'assets/icons/next.svg';

export default function NextButton(props) {
  const { disabled, onClick } = props;

  return (
    <button className="next" type="button" onClick={onClick} disabled={disabled}>
      NEXT <img src={next} alt="next" />
    </button>
  );
}
