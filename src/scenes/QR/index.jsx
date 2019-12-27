import React from 'react';
import './styles.scss';

import Loading from 'components/Loading';
import { getQR } from 'api';

export default class QR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: undefined,
    };
  }

  componentDidMount() {
    const size = 400;
    getQR().then(res => {
      const str = encodeURIComponent(res.qrInfo);
      this.setState({
        url: `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${str}&choe=UTF-8`,
      });
    });
  }

  render() {
    const { url } = this.state;

    if (!url) {
      return <Loading />;
    }

    return (
      <div className="qr-wrapper">
        <img id="qr-img" src={url} alt="QR" />
      </div>
    );
  }
}
