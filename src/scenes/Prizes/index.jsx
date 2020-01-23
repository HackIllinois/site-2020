import React from 'react';
import { getPrizes } from 'api';

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
      <div className="prizes">
        {prizesList.map(prize => (
          <div className="prize">
            <h1>{prize.name}</h1>
            <h2>Sponsored by: {prize.sponsor}</h2>
            <p>{prize.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
