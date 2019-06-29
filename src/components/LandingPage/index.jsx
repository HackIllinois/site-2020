import React from 'react'

import logo from 'assets/hackillinois_logo.svg';

import facebook from 'assets/icons/facebook.svg';
import github from 'assets/icons/github.svg';
import instagram from 'assets/icons/instagram.svg';
import twitter from 'assets/icons/twitter.svg';

import './styles.scss';

class LandingPage extends React.Component {
  render() {
    return (
      <div class="LandingPage">
        <div class="info">
          <img class="logo" src={logo} alt="logo" />

          <h1>Explore. Connect. Build.</h1>
          <h2>February 28 - March 1, 2020</h2>

          <div class="social">
              <a href="https://www.facebook.com/hackillinois">
                  <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/hackillinois">
                  <img src={instagram} alt="instagram" />
              </a>
              <a href="https://twitter.com/hackillinois">
                  <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.github.com/hackillinois">
                  <img src={github} alt="github" />
              </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
