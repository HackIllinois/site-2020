import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import Backdrop from 'components/Backdrop';

import './style.scss';
import LIGHT from 'assets/home/billboard-light.svg';
import ARROW from 'assets/home/expand_more.svg';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      events: [],
      expanded: false,
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  static getTime(d) {
    return moment.unix(d).tz('America/Chicago').format('h:mm a');
  }

  static getDayofWeek(d) {
    const dd = moment.unix(d).tz('America/Chicago').day();
    return (dd + 2) % 7;
  }

  getEvents() {
    fetch('https://api.hackillinois.org/event/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      res.json().then(data => {
        const temp = data.events;
        temp.sort((a, b) => a.startTime - b.startTime);
        this.setState({
          events: temp,
        });
      });
    });
  }

  render() {
    const { currentSection, events, expanded } = this.state;
    const signs = ['Friday', 'Saturday', 'Sunday'];
    const eventStart = 1582869600;
    const eventEnd = 1583128799;
    const keyDownButton = 70; // Key down for accessibility 70 is for F
    return (
      <div>
        <Backdrop
          title="Schedule"
          signs={['Friday', 'Saturday', 'Sunday']}
          selectedSign={currentSection}
          onSignClick={signIndex => this.setState({ currentSection: signIndex })}
        >
          <div className="whole-sign">
            <div className="top-text">
              {signs[currentSection]}
            </div>
            <button
              type="button"
              className="top-arrow"
              onClick={() => this.setState({ expanded: !expanded })}
              onKeyDown={ev => {
                if (ev.keyCode === keyDownButton) this.setState({ expanded: !expanded });
              }}
            >
              <img src={ARROW} alt="" className={`arr ${expanded ? 'turned-over' : 'turned-over-not'}`} />
            </button>
            <div className={`day-holder ${expanded ? 'display-day-holder' : 'hide-day-holder'}`}>
              {[0, 1, 2].map(e => (
                <button
                  type="button"
                  className={`day-button-style ${currentSection === e ? 'selected' : '' }`}
                  onClick={() => this.setState({ currentSection: e, expanded: false })}
                  key={e}
                >
                  {signs[e]}
                </button>
              ))}
            </div>
            <div className="spotlight-wrapper">
              <img src={LIGHT} className="spotlight-itself" alt="" />
              <img src={LIGHT} className="spotlight-itself sp-1" alt="" />
              <img src={LIGHT} className="spotlight-itself sp-2" alt="" />
            </div>
            <button
              type="button"
              className="top-bar"
              onClick={() => this.setState({ expanded: !expanded })}
              onKeyDown={ev => {
                if (ev.keyCode === keyDownButton) this.setState({ expanded: !expanded });
              }}
            >{' '}
            </button>

            <div className="leg-supports left-leg">
              <div className="shade" />
            </div>
            <div className="leg-supports right-leg">
              <div className="shade" />
            </div>

            <div className="display-board">
              <div className="display-internal">
                <div className="display-padding">
                  {
                    events.map((e, i) => {
                      const len = events.length;
                      const dayOfWeek = Schedule.getDayofWeek(e.startTime);
                      if (dayOfWeek === currentSection
                        && e.startTime >= eventStart && e.startTime <= eventEnd) {
                        return (
                          <div className="event-wrapper" key={e.id}>
                            <div className="event-box">
                              <div className="event-box-time">
                                <div className={(i !== 0 && e.startTime === events[i - 1].startTime) ? 'event-box-hidden' : ''}>
                                  {Schedule.getTime(e.startTime)}
                                </div>
                              </div>
                              <div className="event-box-text">
                                <div className="event-box-name">
                                  {e.name.toUpperCase()}
                                </div>
                                <div className="event-sponsor">
                                  {e.sponsor && `Sponsored by ${e.sponsor}`}
                                </div>
                                <div>
                                  {e.locations.map(l => (
                                    <div key={l.longitude}>{l.description}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className={(i + 1 === len || Schedule.getDayofWeek(events[i + 1].startTime) !== dayOfWeek || (i !== len - 1 && e.startTime === events[i + 1].startTime)) ? '' : 'event-line'} />
                          </div>
                        );
                      }
                      return (<div key={e.id} />);
                    })
                  }
                </div>
              </div>
            </div>
            <div className="sign-leg">
              <div className="shade" />
            </div>
          </div>

        </Backdrop>
      </div>
    );
  }
}
