import React from 'react';

import amadeus from 'assets/sponsors/amadeus.png';
import bp from 'assets/sponsors/bp.png';
import c1 from 'assets/sponsors/c1.png';
import caterpillar from 'assets/sponsors/caterpillar.png';
import citadel from 'assets/sponsors/citadel.png';
import facebook from 'assets/sponsors/facebook.png';
import fulcrum from 'assets/sponsors/fulcrum.png';
import google from 'assets/sponsors/google.png';
import imc from 'assets/sponsors/imc.png';
import jackson from 'assets/sponsors/jackson.png';
import mirusResearch from 'assets/sponsors/mirus_research.png';
import mozilla from 'assets/sponsors/mozilla.png';
import npm from 'assets/sponsors/npm.svg';
import nvisia from 'assets/sponsors/nvisia.png';
import optum from 'assets/sponsors/optum.png';
import particle from 'assets/sponsors/particle.png';
import rc from 'assets/sponsors/rc.png';
import schlum from 'assets/sponsors/schlum.png';
import snl from 'assets/sponsors/snl.png';
import twoSigma from 'assets/sponsors/two_sigma.png';
import zeit from 'assets/sponsors/zeit.svg';
import ThemeContext from '../theme-context';


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
function shuffle(array) {
  let currentIndex = array.length; let temporaryValue; let
randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Lane(props) {
  const { myimage } = props;
  return (
    <div className="lane">
      <div className="car">
        <img src={myimage} alt="sponsor-logo" />
      </div>
    </div>
  );
}

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    // making this a member variable so that I can close the interval when closing
    this.interval = null;

    // list of all our sponsors
    this.images = [amadeus, bp, c1, caterpillar, citadel, facebook, fulcrum, google,
    imc, jackson, mirusResearch, mozilla, npm, nvisia, optum, particle,
    rc, schlum, snl, twoSigma, zeit];

    // will contain a list of randomly generated indices
    let array = new Array(this.images.length);
    for (let i = 0; i < array.length; i += 1) {
      array[i] = i;
    }
    array = shuffle(array);

    this.state = {
      indices: array,
      offset: 0,
      refreshrate: 8 * 1000, // ensure this integer matches the animation duration
    };

    this.getImage = this.getImage.bind(this);
    this.updateImages = this.updateImages.bind(this);
  }

  componentDidMount() {
    const { state } = this;
    this.interval = setInterval(this.updateImages, state.refreshrate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getImage(index) {
    const { state } = this;
    const array = state.indices;
    const arrayIndex = (state.offset + index) % array.length;
    return this.images[array[arrayIndex]];
  }

  updateImages() {
    const { state } = this;
    const newOffset = (state.offset + 4) % state.indices.length;
    this.setState({
      offset: newOffset,
    });
  }


  render() {
    return (
      <div className="split-cell" id="sponsors-cell">
        <div className="sponsor-grid-wrapper">
          <Lane myimage={this.getImage(0)} />
          <Lane myimage={this.getImage(1)} />
          <Lane myimage={this.getImage(2)} />
          <Lane myimage={this.getImage(3)} />
        </div>
      </div>
    );
  }
}

Sponsors.contextType = ThemeContext;
export default Sponsors;
