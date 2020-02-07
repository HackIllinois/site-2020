import React from 'react';

import './style.scss';

import scenery from 'assets/common_backdrop/scenery.svg';
import sceneryMobile from 'assets/common_backdrop/scenery-mobile.svg';
import background from 'assets/common_backdrop/background.png';
import topSign from 'assets/common_backdrop/top-sign.svg';

import NavBar from 'components/NavBar';

export default function Backdrop(props) {
  const signRotations = ['9deg', '0deg', '-8deg', '9deg'];

  return (
    <div className="Backdrop">
      <NavBar />
      <img className="background" src={background} alt="Background" />

      <div className="sign-post">
        <div className="post" />
        <div className="top-sign">
          <img src={topSign} alt={`${props.title} Sign`} />
          <span className="text">{props.title}</span>
        </div>

        {props.signs.map((signText, index) => (
          <button
            type="button"
            className={`sign${props.selectedSign === index ? ' selected' : ''}`}
            style={{ transform: `rotate(${signRotations[index % signRotations.length]})` }}
            onClick={() => props.onSignClick(index)}
            key={signText}
          >
            {signText}
          </button>
        ))}
      </div>

      <div className="content-container">
        {props.children}
      </div>

      <img className="scenery" src={scenery} alt="Scenery" />
      <img className="scenery mobile" src={sceneryMobile} alt="Scenery" />
    </div>
  );
}
