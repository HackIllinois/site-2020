import React from 'react';
import { getEvents } from 'api';
import EventBlock from 'scenes/Dashboard/dashboardComponent/eventblock';
import ThemeContext from '../theme-context';

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

  minutes = minutes.toString().padStart(2, '0');

  return {
    hours,
    minutes,
    isAm,
  };
}

function renderEvents(eventsToDisplay) {
  return eventsToDisplay.map(val => {
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
  });
}

class Time extends React.Component {
  constructor(props) {
    super(props);

    const initialState = getTime(new Date());
    initialState.loadingEvents = true;
    initialState.events = [];
    initialState.leadingEventIndex = 0; // Which event should be displayed

    this.state = initialState;

    this.interval = null;

    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
    getEvents().then(events => {
      events.sort((a, b) => (a.startTime - b.startTime));

      // Filter out events that have already completed
      const currentTime = Math.floor((new Date()).getTime() / 1000);
      const notCompletedEvents = events.filter(event => currentTime < event.endTime);

      this.setState({
        loadingEvents: false,
        events: notCompletedEvents,
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
      leadingEventIndex,
    } = this.state;

    if (loadingEvents) {
      return (
        <div className="cell long-cell" id="time-cell">
          <div className="clock">
            <p>{hours.toString().padStart(2, '0')} : {minutes} {isAm ? 'AM' : 'PM'}</p>
          </div>
          <div className="upcoming-event">
            <h1>Upcoming</h1>
          </div>
        </div>
      );
    }

    // Only want to display the next 2 events!
    const eventsToDisplay = [];
    if (leadingEventIndex < events.length) {
      eventsToDisplay.push(events[leadingEventIndex]);
      if (leadingEventIndex < events.length - 1) {
        eventsToDisplay.push(events[leadingEventIndex + 1]);
      }
    }

    return (
      <div className="cell long-cell" id="time-cell">
        <div className="top-half">
          <div className="clock">
            <p>{hours.toString().padStart(2, '0')} <span>:</span> {minutes} {isAm ? 'AM' : 'PM'}</p>
          </div>
          <div className="upcoming-event">
            <h1>HAPPENING NOW</h1>
            <EventBlock title="Check In" locations={['DCL', 'A second location!']} eventTime="NOW" />
          </div>
        </div>
        <div className="bottom-half">
          <h1>UPCOMING</h1>
          {
            renderEvents(eventsToDisplay)
          }
        </div>
      </div>
    );
  }
}

Time.contextType = ThemeContext;
export default Time;
