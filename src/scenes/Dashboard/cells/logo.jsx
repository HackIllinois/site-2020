import React from 'react';
import hackillinoisLogoLightBg from 'assets/logo.svg';
import hackillinoisLogoDarkBg from 'assets/logo_dark_bg.svg';
import exploreConnectBuild from 'assets/home/tagline.svg';

function Logo() {
  return (
    <div className="cell short-cell" id="logo-cell">
      <img src={exploreConnectBuild} id="explore-connect-build" alt="Explore. Connect. Build." />
      <img src={hackillinoisLogoDarkBg} id="logo" alt="HackIllinois Logo" />
    </div>
  );
}

export default Logo;
