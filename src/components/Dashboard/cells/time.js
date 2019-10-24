import React from 'react';

class Time extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getTime();
    
    this.interval = null;

    this.setTime = this.setTime.bind(this);

  }

  getTime(){
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

    if (hours < 10) {
      hours = this.addLeadingZero(hours);
    }
    if (minutes < 10) {
      minutes = this.addLeadingZero(minutes);
    }

    return {
      hours: hours,
      minutes: minutes,
      isAm: isAm
    }
  }

  componentDidMount(){
    this.interval = setInterval(this.setTime, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  addLeadingZero(num){
    return '0' + num;
  }

  setTime(){
    const newTime = this.getTime();
    this.setState(newTime);
  }

  render(){
    return (
      <div className = {"cell short-cell "+this.props.theme} id ="time-cell">
        <h1>CURRENT TIME</h1>
        <p>{this.state.hours} : {this.state.minutes} {this.state.isAm ? "AM" : "PM"}</p>
      </div>
    )
  }
}


export default Time;
