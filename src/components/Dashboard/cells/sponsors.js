import React from 'react';


import Amadeus from '../assets/Sponsors/Amadeus.png';
import BP from '../assets/Sponsors/BP.png';
import C1 from '../assets/Sponsors/C1.png';
import Caterpillar from '../assets/Sponsors/Caterpillar.png';
import Citadel from '../assets/Sponsors/Citadel.png';
import Facebook from '../assets/Sponsors/Facebook.png';
import Fulcrum from '../assets/Sponsors/Fulcrum.png';
import Google from '../assets/Sponsors/Google.png';
import IMC from '../assets/Sponsors/IMC.png';
import Jackson from '../assets/Sponsors/Jackson.png';
import MirusResearch from '../assets/Sponsors/MirusResearch.png';
import Mozilla from '../assets/Sponsors/Mozilla.png';
import npm from '../assets/Sponsors/npm.svg';
import Nvisia from '../assets/Sponsors/Nvisia.png';
import Optum from '../assets/Sponsors/Optum.png';
import Particle from '../assets/Sponsors/Particle.png';
import RC from '../assets/Sponsors/RC.png';
import Schlum from '../assets/Sponsors/Schlum.png';
import SNL from '../assets/Sponsors/SNL.png';
import TwoSigma from '../assets/Sponsors/TwoSigma.png';
import Zeit from '../assets/Sponsors/Zeit.svg';

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

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

class Lane extends React.Component {
  constructor(props){
    super(props);
    this.state = this.initializeState();
    
    this.initializeState = this.initializeState.bind(this);
  }

  initializeState() {
  }

  render(){
    return (
      <div className = "lane">
        <div className = "car">
          <img src={this.props.myimage} alt = "sponsor-logo"/>
        </div>
      </div>
    )
  }
}

class Sponsors extends React.Component{
  constructor(props){
    super(props);
    //making this a member variable so that I can close the interval when closing
    this.interval = null;

    //list of all our sponsors
    this.images = [Amadeus, BP, C1, Caterpillar, Citadel, Facebook, Fulcrum, Google,
    IMC, Jackson, MirusResearch, Mozilla, npm, Nvisia, Optum, Particle,
    RC, Schlum, SNL, TwoSigma, Zeit];

    //will contain a list of randomly generated indices
    var array = new Array(this.images.length);
    for(var i=0; i<array.length; i++){
      array[i] = i;
    }
    array = shuffle(array);
    
    this.state = {
      indices: array,
      offset: 0,
      refreshrate: 8 * 1000 //ensure this integer matches the animation duration
    }

    this.getImage = this.getImage.bind(this);
    this.updateImages = this.updateImages.bind(this);
  }

  updateImages(){
    var newOffset = (this.state.offset+4) % this.state.indices.length;
    this.setState({
      offset: newOffset
    });
  }

  componentDidMount(){
    this.interval = setInterval(this.updateImages, this.state.refreshrate);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }



  getImage(index){
    var array = this.state.indices;
    var arrayIndex = (this.state.offset+index) % array.length;
    return this.images[array[arrayIndex]];
  }
  render() {
    return (
      <div className = "split-cell" id = "sponsors-cell">
        <div className = "sponsor-grid-wrapper">
          <Lane myimage = {this.getImage(0)}/>
          <Lane myimage = {this.getImage(1)}/>
          <Lane myimage = {this.getImage(2)}/>
          <Lane myimage = {this.getImage(3)}/>
        </div>
      </div>
    )
  }

}
export default Sponsors;