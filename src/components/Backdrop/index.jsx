import React from 'react';

import './style.scss';
import scenery from 'assets/common_backdrop/scenery.svg';
import sceneryMobile from 'assets/common_backdrop/scenery_mobile.svg';
import background from 'assets/common_backdrop/background.png';
import topSign from 'assets/common_backdrop/top-sign.svg';
import NavBar from 'components/NavBar';

const signRotations = ['9.03deg', '0deg', '-8deg', '0deg'];

export default function Backdrop(props) {
  return (
    <div className="backdrop">
      <NavBar />
      <img className="background" src={background} alt="" />

      <div className="sign-post">
        <div className="post" />
        <div className="top-sign">
          <img src={topSign} alt="" />
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

      <img className="scenery" src={scenery} alt="" />
      <img className="scenery mobile" src={sceneryMobile} alt="" />
    </div>
  );
}
