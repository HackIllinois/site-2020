import React from 'react';
import ThemeContext from '../theme-context';

function renderValue(value, type, shouldAnimate) {
  const tensdigit = Math.floor(value / 10);
  const onesdigit = value % 10;

  let nextonesdigit = onesdigit - 1;
  let nexttensdigit = tensdigit;
  if (nextonesdigit < 0) {
    nextonesdigit = 9;
    nexttensdigit = tensdigit - 1;
    if (nexttensdigit < 0) {
      nexttensdigit = 5;
    }
  }


  if (!shouldAnimate) {
    return (
      <div className="counter">
        <h4>{type}</h4>
        <div className="number">
          <div className="digit-wrapper digit-wrapper-top">
            <p className="digit digit-top">{tensdigit}{onesdigit}</p>
          </div>
          <div className="digit-wrapper digit-wrapper-bottom">
            <p className="digit digit-bottom">{tensdigit}{onesdigit}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="counter">
      <h4>{type}</h4>
      <div className="number">
        <div className="digit-wrapper digit-wrapper-top digit-wrapper-top-new">
          <p className="digit digit-top">{nexttensdigit}{nextonesdigit}</p>
        </div>
        <div className="digit-wrapper digit-wrapper-top digit-wrapper-top-old">
          <p className="digit digit-top">{tensdigit}{onesdigit}</p>
        </div>
        <div className="digit-wrapper digit-wrapper-bottom">
          <p className="digit digit-bottom">{tensdigit}{onesdigit}</p>
        </div>
        <div className="digit-wrapper digit-wrapper-bottom digit-wrapper-bottom-new">
          <p className="digit digit-bottom">{nexttensdigit}{nextonesdigit}</p>
        </div>
      </div>
    </div>
  );
}

function initializeState() {
  const hackIllinoisStartDate = new Date('February 28, 2020 05:00:00 UTC'); // UTC is 5 hours ahead of CDT
  const hackIllinoisEndDate = new Date('March 2, 2020 4:59:59 UTC');
  const hackillinoisStartTime = hackIllinoisStartDate.getTime();
  const hackillinoisEndTime = hackIllinoisEndDate.getTime();

  const currentTime = new Date();
  let difference = hackillinoisStartTime - currentTime.getTime();
  let hasStarted = false;
  if (difference < 0) { // passed the start time
    difference = hackillinoisEndTime - currentTime.getTime();
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
      hackillinoisEndTime,
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
    hackillinoisEndTime,
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
    const { completed } = this.state;
    if (!completed) this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    const { completed } = this.state;
    if (!completed) clearInterval(this.interval);
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

    const seconds = Math.floor(difference);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }


  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      hasStarted,
    } = this.state;

    const shouldUpdateMinutes = seconds === 0;
    let shouldUpdateHours = false;
    let shouldUpdateDays = false;
    if (shouldUpdateMinutes) {
      shouldUpdateHours = minutes === 0;
    }
    if (shouldUpdateHours) {
      shouldUpdateDays = hours === 0;
    }
    return (
      <div className="cell short-cell" id="countdown-cell">
        <h1>COUNTDOWN</h1>
        <div className="clock">
          {renderValue(days, 'Days', shouldUpdateDays)}
          {renderValue(hours, 'Hours', shouldUpdateHours)}
          {renderValue(minutes, 'Minutes', shouldUpdateMinutes)}
        </div>
        <h1>{hasStarted ? 'LEFT' : 'UNTIL HACKILLINOIS'}</h1>
      </div>
    );
  }
}

CountDown.contextType = ThemeContext;
export default CountDown;
