import React from 'react';

import './style.scss';

export default function Token() {
  return (
    <div className="Token">
      <h1>Copy Me!</h1>
      <p>{sessionStorage.token}</p>
    </div>
  );
}
