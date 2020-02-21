import React from 'react';
import Lottie from 'react-lottie';

import animationData from 'assets/animations/car.json';
import './style.scss';

export default function Loading() {
  const options = { animationData, autoplay: true, loop: true };
  const style = { marginRight: '32vw', width: '40vw', height: '40vh' };

  return (
    <div id="Loading">
      <Lottie id="car" options={options} style={style} />
      <h1>Loading...</h1>
    </div>
  );
}
