import React from 'react';
import './style.scss';

import next from 'assets/icons/next.svg';

export default function SubmitButton(props) {
  const { disabled } = props;

  return (
    <button className="submit" type="submit" disabled={disabled}>
      SUBMIT <img src={next} alt="submit" />
    </button>
  );
}
