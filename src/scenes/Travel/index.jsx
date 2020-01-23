import React from 'react';
import Backdrop from 'components/Backdrop';
import BillboardTop from 'assets/travel/travel_billboard_top.svg';
import './style.scss';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
    };
  }

  render() {
    const { currentSection } = this.state;

    return (
      <div>
        <Backdrop
          title="Transport"
          signs={['Illinois', 'Michigan', 'Indiana']}
          selectedSign={currentSection}
          onSignClick={signIndex => this.setState({ currentSection: signIndex })}
        >
          <div className="structure" style={{ width: '100%', height: '100%' }}>
            <img className="billboard-top" src={BillboardTop} alt="billboard-top" />
            <div className="billboard-bottom">
              <div className="leg" />
              <div className="sign-container">
                <div className="text-container" />
                <div className="stando" />
              </div>
            </div>
          </div>
        </Backdrop>
      </div>
    );
  }
}
