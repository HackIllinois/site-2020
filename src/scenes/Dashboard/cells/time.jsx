import React from 'react';
import ThemeContext from '../theme-context';

function pad(num) {
  if (num < 10) {
    return `0${ num}`;
  }
  return num;
}

function getTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

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
    hours,
    minutes,
    isAm,
  };
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTime();

    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime() {
    const newTime = getTime();
    this.setState(newTime);
  }

  render() {
    const { state } = this;
    return (
      <div className={`cell short-cell ${ this.context}`} id="time-cell">
        <h1>CURRENT TIME</h1>
        <p>{state.hours} : {state.minutes} {state.isAm ? 'AM' : 'PM'}</p>
      </div>
    );
  }
}

Time.contextType = ThemeContext;
export default Time;
