import React from 'react';
import hackillinoislogo from '../../../assets/hackillinois_logo.svg'
import {ThemeContext} from '../theme-context';

class Logo extends React.Component{
  render() {
    return (
      <div className={"cell short-cell " + this.context}  id="logo-cell">
        <img src={hackillinoislogo} id="logo" alt="HackIllinois Logo"/>
        <h1>Explore. <br/> Connect. <br/> Build. </h1>
      </div>
    )
  }
}

Logo.contextType = ThemeContext;
export default Logo;