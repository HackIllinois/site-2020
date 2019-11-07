import React from 'react';
import ThemeContext from '../theme-context';

function renderValue(value, type) {
  const tensdigit = Math.floor(value / 10);
  const onesdigit = value % 10;

  return (
    <div className="counters">
      <p className="digit">{tensdigit}</p> <p className="digit">{onesdigit}</p>
      <p className="type">{type}</p>
    </div>
  );
}

function initializeState() {
  const hackIllinoisStartDate = new Date('February 28, 2020 05:00:00 UTC'); // UTC is 5 hours ahead of CDT
  const hackIllinoisEndDate = new Date('March 2, 2020 4:59:59 UTC');
  const hackillinoisStartTime = hackIllinoisStartDate.getTime();
  const hackIllinoisEndTime = hackIllinoisEndDate.getTime();

  const currentTime = new Date();
  let difference = hackillinoisStartTime - currentTime.getTime();
  let hasStarted = false;
  if (difference < 0) { // passed the start time
    difference = hackIllinoisEndTime - currentTime.getTime();
    hasStarted = true;
  }
  if (difference < 0) { // passed the end time
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      completed: true,
      hasStarted,
      hackillinoisStartTime,
      hackillinoisEndTime: hackIllinoisEndTime,
    };
  }

  difference /= 1000; // remove the garbage

  const days = Math.floor(difference / 86400);
  difference -= days * 86400;

  const hours = Math.floor(difference / 3600) % 24;
  difference -= hours * 3600;

  const minutes = Math.floor(difference / 60) % 60;
  difference -= minutes * 60;

  const seconds = Math.floor(difference % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
    completed: false,
    hasStarted,
    hackillinoisStartTime,
    hackillinoisEndTime: hackIllinoisEndTime,
  };
}

// This component is in the top row, center
class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = initializeState();

    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    const { state } = this;
    if (!state.completed) this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    const { state } = this;
    if (!state.completed) clearInterval(this.interval);
  }

  setTime() {
    const { state } = this;
    const currentTime = new Date();
    let difference = state.hackillinoisStartTime - currentTime.getTime();
    if (difference < 0) { // passed the start time
      difference = state.hackillinoisEndTime - currentTime.getTime();
    }


    difference /= 1000; // remove the garbage

    const days = Math.floor(difference / 86400);
    difference -= days * 86400;

    const hours = Math.floor(difference / 3600) % 24;
    difference -= hours * 3600;

    const minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;

    const seconds = Math.floor(difference % 60);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }


  render() {
    const { state } = this;
    return (
      <div className={`cell short-cell ${ this.context}`} id="countdown-cell">
        <h1>COUNTDOWN</h1>
        <div className="clocks">
          {renderValue(state.days, 'D')}
          {renderValue(state.hours, 'H')}
          {renderValue(state.minutes, 'M')}
          {renderValue(state.seconds, 'S')}
        </div>
        <h1>{state.hasStarted ? 'LEFT' : 'UNTIL HACKILLINOIS'}</h1>
      </div>
    );
  }
}

CountDown.contextType = ThemeContext;
export default CountDown;
