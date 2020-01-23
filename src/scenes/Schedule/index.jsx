import React from 'react';
import Backdrop from 'components/Backdrop';
import './styles.scss';

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

  /*
  description
  startTime
  endTime
  sponsor
  description
  eventType
  name
  */
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
            <div className="top-bar" />
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
                {this.state.events.map(e => (
                  <div>{e.name}</div>
                ))}
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
