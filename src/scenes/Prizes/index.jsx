import React from 'react';
import Backdrop from 'components/Backdrop';
import { getPrizes } from 'api';

import prizes_front from 'assets/common_backdrop/prizes-front.svg';

import './style.scss';

export default class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prizes: []
    };
  }

  componentDidMount() {
    getPrizes().then(list => {
      this.setState({ prizes: list.prizes });
    });
  }

  render() {
    const prizesList = this.state.prizes;

    return (
      <Backdrop
        title="Prizes"
        signs={[]}
      >
        <div className="scene-content">
          <img className="prizes-front" src={prizes_front} />
          <div className="billboard-container">
            <div className="pole" id="left"></div>
            <div className="left top connector"></div>
            <div className="left bottom connector"></div>
            <div className="pole" id="right"></div>
            <div className="right top connector"></div>
            <div className="right bottom connector"></div>

            <div className="billboard">
              {prizesList.map(prize => (
                <div className="prize">
                  <p className="prize-name">{prize.name}</p>
                  <p className="prize-sponsor">Sponsored by: {prize.sponsor}</p>
                  <p>{prize.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Backdrop>
    );
  }
}
