import React from 'react';
import hackillinoisLogoDay from 'assets/logo.svg';
import hackillinoisLogoNight from 'assets/logo_dark_bg.svg';
import exploreConnectBuild from 'assets/home/tagline.svg';
import ThemeContext from '../theme-context';

function renderTheme(theme) {
  if (theme === 'day') {
    return (
      <div className="cell short-cell" id="logo-cell">
        <img src={exploreConnectBuild} id="explore-connect-build" alt="Explore. Connect. Build." />
        <img src={hackillinoisLogoDay} id="logo" alt="HackIllinois Logo" />
      </div>
    );
  }
  return (
    <div className="cell short-cell" id="logo-cell">
      <img src={exploreConnectBuild} id="explore-connect-build" alt="Explore. Connect. Build." />
      <img src={hackillinoisLogoNight} id="logo" alt="HackIllinois Logo" />
    </div>
  );
}

function Logo() {
  return (
    <ThemeContext.Consumer>
      { value => renderTheme(value)}
    </ThemeContext.Consumer>
  );
}

export default Logo;
