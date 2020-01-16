import React from 'react';
import Backdrop from 'components/Backdrop';

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
      <div>
        <Backdrop
          title="Maps"
          signs={['DCL', 'Siebel', 'ECEB', 'Kenney']}
          selectedSign={currentSection}
          onSignClick={signIndex => this.setState({ currentSection: signIndex })}
        >
          <div style={{ width: '100%', height: '100%', backgroundColor: '#E28B79' }}>
            Placeholder to demonstrate available space for content
          </div>
        </Backdrop>
      </div>
    );
  }
}
