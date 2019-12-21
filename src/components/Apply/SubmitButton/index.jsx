import React from 'react';
import './style.scss';

import next from 'assets/apply/next.svg';

export default function SubmitButton() {
  return (
    <button className="submit" type="submit">
      SUBMIT <img src={next} alt="next" />
    </button>
  );
}
