import React from 'react';
import Backdrop from 'components/Backdrop';
import './styles.scss';
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
    const correctTime = d * 1000;
    const p = new Date(correctTime);
    const min = p.getMinutes();
    const h = p.getHours();
    return `${h === 0 ? '12' : p.getHours() % 12}:${min < 10 ? '0' : ''}${min}${h >= 12 ? 'pm' : 'am'}`;
  }

  static getDayofWeek(d) {
    const p = new Date(d * 1000);
    const dd = p.getDay();
    if (dd === 0) return 2;
    return dd - 5;
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
              onKeyDown={ev => { if (ev.keyCode === 70) this.setState({ expanded: !expanded }); }}
            >
              <img src={ARROW} alt="" className={`arr ${expanded ? 'turned-over' : 'turned-over-not'}`} />
            </button>
            <div className="top-bar">
              <div className={`day-holder ${expanded ? 'display-day-holder' : 'hide-day-holder'}`}>
                <button type="button" className="day-button-style" onClick={() => { this.setState({ currentSection: 0, expanded: false }); }}>Friday</button>
                <button type="button" className="day-button-style" onClick={() => { this.setState({ currentSection: 1, expanded: false }); }}>Saturday</button>
                <button type="button" className="day-button-style" onClick={() => { this.setState({ currentSection: 2, expanded: false }); }}>Sunday</button>
              </div>
              <div className="spotlight-wrapper">
                <img src={LIGHT} className="spotlight-itself" alt="" />
                <img src={LIGHT} className="spotlight-itself sp-1" alt="" />
                <img src={LIGHT} className="spotlight-itself sp-2" alt="" />
              </div>
            </div>
            <div className="leg-supports">
              <div className="left-leg">
                <div className="shade" />
              </div>
              <div className="right-leg">
                <div className="shade" />
              </div>
            </div>
            <div className="display-board">
              <div className="display-internal">
                <div className="display-padding">
                  {
                    events.map((e, i) => {
                      const len = events.length;
                      const dayOfWeek = Schedule.getDayofWeek(e.startTime);
                      if (dayOfWeek === currentSection) {
                        return (
                          <div className="event-wrapper" key={e.id}>
                            <div className="event-box">
                              <div className="event-box-time">
                                <div className={(i !== 0 && e.startTime === events[i - 1].startTime) ? 'event-box-hidden' : ''}>
                                  {Schedule.getTime(e.startTime)}
                                </div>
                              </div>
                              <div>
                                <div className="event-box-name">
                                  {e.name}
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
