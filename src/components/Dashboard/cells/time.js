import React from 'react';
import {ThemeContext} from '../theme-context';

function pad(num){
  if(num < 10){
    return '0' + num;
  }
  else{
    return num;
  }
}

class Time extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.getTime();
    
    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  getTime() {
    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    const isAm = hours < 12; 

    if (hours === 0) {
      hours = 12;
    }
    if (!isAm) {
      hours -= 12;
    }

    hours = pad(hours);
    minutes = pad(minutes);

    return {
      hours: hours,
      minutes: minutes,
      isAm: isAm
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime() {
    const newTime = this.getTime();
    this.setState(newTime);
  }

  render() {
    return (
      <div className = {"cell short-cell " + this.context} id ="time-cell">
        <h1>CURRENT TIME</h1>
        <p>{this.state.hours} : {this.state.minutes} {this.state.isAm ? "AM" : "PM"}</p>
      </div>
    )
  }
}

Time.contextType = ThemeContext;
export default Time;