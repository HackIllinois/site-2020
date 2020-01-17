import React from 'react';
import { getEvents } from 'api';
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

    const initialState = getTime();
    initialState.loadingEvents = true;
    initialState.events = null;

    this.state = initialState;

    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);

    getEvents().then(res => {
      this.setState({
        loadingEvents: false,
        events: res,
      });
      console.log(res);
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime() {
    const newTime = getTime();
    this.setState(newTime);
  }

  render() {
    const { hours, minutes, isAm, loadingEvents } = this.state;
    return (
      <div className="cell long-cell" id="time-cell">
        <h1>TIME</h1>
        <p>{hours} : {minutes} {isAm ? 'AM' : 'PM'}</p>
        <h1>Upcoming</h1>
        { !loadingEvents ?
          (
            <div className="event-wrapper">
              <div className="event">
                <h3>Checkin</h3>
                <h3>DCL</h3>
              </div>
            </div>
          )
          : ""}
      </div>
    );
  }
}

Time.contextType = ThemeContext;
export default Time;
