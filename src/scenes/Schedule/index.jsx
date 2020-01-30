import React from 'react';
import Backdrop from 'components/Backdrop';
import './styles.scss';
import LIGHT from 'assets/home/billboard-light.svg';

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
      events: [],
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  static getTime(d) {
    const correctTime = d * 1000;
    const p = new Date(correctTime);
    const min = p.getMinutes();
    return `${p.getHours()}:${min === 0 ? '00' : min}`;
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
        this.setState({
          events: data.events,
        });
      });
    });
  }

  render() {
    const { currentSection } = this.state;
    return (
      <div>
        <Backdrop
          title="Schedule"
          signs={['Friday', 'Saturday', 'Sunday']}
          selectedSign={currentSection}
          onSignClick={signIndex => this.setState({ currentSection: signIndex })}
        >
          <div className="whole-sign">
            <div className="top-bar">
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
                  {this.state.events.map((e, i) => {
                    const len = this.state.events.length;
                    return (
                      <div className="event-wrapper" key={e.id}>
                        <div className="event-box">
                          <div className="event-box-time">
                            {Schedule.getTime(e.startTime)}
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
                        <div className={i + 1 === len ? '' : 'event-line'} />
                      </div>
                    );
                  })}
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
