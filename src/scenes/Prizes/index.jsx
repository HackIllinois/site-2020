import React from 'react';
import Backdrop from 'components/Backdrop';
import { getPrizes } from 'api';

import prizesFront from 'assets/common_backdrop/prizes-front.svg';

import './style.scss';

export default class Prizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
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
      <Backdrop title="Prizes" signs={[]}>
        <div className="scene-content">
          <img className="prizes-front" src={prizesFront} alt="Prizes Banner" />
          <div className="billboard-container">
            <div className="pole" id="left" />
            <div className="left top connector" />
            <div className="left bottom connector" />
            <div className="pole" id="right" />
            <div className="right top connector" />
            <div className="right bottom connector" />

            <div className="billboard">
              {prizesList.map(prize => (
                <div className="prize">
                  <p className="prize-name">{prize.name}</p>
                  <p className="prize-sponsor">Sponsored by: {prize.sponsor}</p>
                  <p className="prize-description">{prize.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Backdrop>
    );
  }
}
