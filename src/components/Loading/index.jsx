import React from 'react';
import Lottie from 'react-lottie';

import animationData from 'assets/car.json';
import './style.scss';

export default function Loading() {
  const options = {
    animationData: animationData,
    autoplay: true,
    loop: true,
  };

  const style = {
    marginRight: '15vw',
    width: '80vw',
    height: '80vh',
  };
  
  return (
    <div id="Loading">
      <Lottie id="car" options={options} style={style} />
      <h1>Loading...</h1>
    </div>
  );
}
