import React from 'react';
import Backdrop from 'components/Backdrop';

import topStructure from 'assets/maps/top_structure.svg';
import './style.scss';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
    };
  }

  render() {
    const { currentSection } = this.state;

    return (
      <Backdrop
        title="Maps"
        signs={['DCL', 'Siebel', 'ECEB', 'Kenney']}
        selectedSign={currentSection}
        onSignClick={signIndex => this.setState({ currentSection: signIndex })}
      >
        <div className="maps-page">
          <div className="top-structure">
            <img src={topStructure} alt="" />
          </div>

          <div className="main-structure">
            <div className="first connector" />
            <div className="last connector" />

            <div className="maps-container">
              
            </div>
          </div>
        </div>
      </Backdrop>
    );
  }
}
