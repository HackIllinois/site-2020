import React from 'react';
import hackillinoislogo from '../assets/logo.svg';

class Logo extends React.Component{
  render(){
    return (
      <div className={"cell short-cell "+this.props.theme}  id="logo-cell">
        <img src={hackillinoislogo} id="logo" alt="HackIllinois Logo"/>
        <h1>Explore. <br/> Connect. <br/> Build. </h1>
      </div>
    )
  }
}

export default Logo;