import React from 'react';

//This component is in the top row, center
class CountDown extends React.Component{
  constructor(props){
    super(props);
    this.state = this.initializeState();
    
    this.interval = null;

    this.setTime = this.setTime.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.renderHours = this.renderHours.bind(this);
    this.renderMinutes = this.renderMinutes.bind(this);
    this.renderValue = this.renderValue.bind(this);
  }

  initializeState(){
    const hackIllinoisStartDate = new Date("February 28, 2020 00:00:00");
    const hackIllinoisEndDate = new Date("March 1, 2020 11:59:59");
    const hackillinoisStartTime = hackIllinoisStartDate.getTime()
    const hackIllinoisEndTime = hackIllinoisEndDate.getTime();

    var currentTime = new Date();
    var difference = hackillinoisStartTime - currentTime.getTime();
    var hasStarted = false;
    if (difference < 0) { //passed the start time
      difference = hackIllinoisEndTime - currentTime.getTime();
      hasStarted = true;
    }
    if (difference < 0) { //passed the end time
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        completed: true,
        hasStarted: hasStarted,
        hackillinoisStartTime: hackillinoisStartTime,
        hackillinoisEndTime: hackIllinoisEndTime,
      }
    }

    difference = difference/1000; //remove the garbage
    
    const days = Math.floor(difference / 86400);
    difference -= days * 86400;

    const hours = Math.floor(difference / 3600) % 24;
    difference -= hours * 3600;

    const minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;

    const seconds = Math.floor(difference % 60);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      completed: false,
      hasStarted: hasStarted,
      hackillinoisStartTime: hackillinoisStartTime,
      hackillinoisEndTime: hackIllinoisEndTime,
    }
  }

  componentDidMount(){
    if (!this.state.completed)
      this.interval = setInterval(this.setTime, 1000);
  }
  componentWillUnmount(){
    if (!this.state.completed)
      clearInterval(this.interval);
  }

  setTime(){
    var currentTime = new Date();
    var difference = this.state.hackillinoisStartTime - currentTime.getTime();
    if (difference < 0) { //passed the start time
      difference = this.state.hackillinoisEndTime - currentTime.getTime();
    } 


    difference = difference/1000; //remove the garbage
    
    const days = Math.floor(difference / 86400);
    difference -= days * 86400;

    const hours = Math.floor(difference / 3600) % 24;
    difference -= hours * 3600;

    const minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;

    const seconds = Math.floor(difference % 60);

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  renderDays(){
  }

  renderHours(){

  }

  renderMinutes(){

  }

  renderValue(value, type){
    var tensdigit = Math.floor(value / 10);
    var onesdigit = value % 10;

    return (
      <div className = "counters">
        <p className="digit">{tensdigit}</p> <p className="digit">{onesdigit}</p> 
        <p className="type">{type}</p>
      </div>
    )
  }

  render(){
    return (
      <div className = {"cell short-cell "+this.props.theme} id="countdown-cell">
        <h1>COUNTDOWN</h1>
        <div className = "clocks">
          {this.renderValue(this.state.days, "D")}
          {this.renderValue(this.state.hours, "H")}
          {this.renderValue(this.state.minutes, "M")}
          {this.renderValue(this.state.seconds, "S")}
        </div>
        <h1>{this.state.hasStarted ? "LEFT" : "UNTIL HACKILLINOIS"}</h1>
      </div>
    )
  }
}

export default CountDown;