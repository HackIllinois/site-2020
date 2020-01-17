import React from 'react';
import { getEvents } from 'api';
import EventBlock from 'scenes/Dashboard/dashboardComponent/eventblock';
import ThemeContext from '../theme-context';

function pad(num) {
  if (num < 10) {
    return `0${ num}`;
  }
  return num;
}

function getTime(givenDate) {
  let hours = givenDate.getHours();
  let minutes = givenDate.getMinutes();

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

    const initialState = getTime(new Date());
    initialState.loadingEvents = true;
    initialState.events = null;
    initialState.index = 0; // Whihc event should be displayed

    this.state = initialState;

    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);

      getEvents().then(res => {
        this.setState({
          loadingEvents: false,
          events: res.events,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTime() {
    const newTime = getTime(new Date());
    this.setState(newTime);
  }

  render() {
    const {
      hours,
      minutes,
      isAm,
      loadingEvents,
      events,
      index,
    } = this.state;

    if (loadingEvents) {
      return (
        <div className="cell long-cell" id="time-cell">
          <div className="clock">
            <h1>TIME</h1>
            <p>{hours} : {minutes} {isAm ? 'AM' : 'PM'}</p>
          </div>
          <div className="upcoming-event">
            <h1>Upcoming</h1>
          </div>
        </div>
      );
    }


    // Only want to display the next 2 events!
    // To be done: sort the events. Have not done so yet.
    const eventsToDisplay = [];
    if (index < events.length) {
      eventsToDisplay.push(events[index]);
      if (index < events.length - 1) {
        eventsToDisplay.push(events[index + 1]);
      }
    }

    return (
      <div className="cell long-cell" id="time-cell">
        <div className="top-half">
          <div className="clock">
            <h1>TIME</h1>
            <p>{hours} : {minutes} {isAm ? 'AM' : 'PM'}</p>
          </div>
          <div className="upcoming-event">
            <h1>HAPPENING NOW</h1>
            <EventBlock title="Check In" locations={['DCL', 'A second location!']} eventTime="NOW" />
          </div>
        </div>
        <div className="bottom-half">
          <h1>UPCOMING</h1>
          {
            eventsToDisplay.map(val => {
              const { name, locations, startTime } = val;

              const locationsList = [];
              locations.forEach(location => {
                locationsList.push(location.description);
              });

              const {
                hours: eventTimeHour,
                minutes: eventTimeMinute,
                isAm: eventTimeIsAm,
              } = getTime(new Date(startTime * 1000));

              const timeString = `${eventTimeHour} : ${eventTimeMinute} ${eventTimeIsAm ? 'AM' : 'PM'}`;

              return (
                <EventBlock
                  key={`${name}${startTime}`}
                  title={name}
                  locations={locationsList}
                  eventTime={timeString}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

Time.contextType = ThemeContext;
export default Time;
