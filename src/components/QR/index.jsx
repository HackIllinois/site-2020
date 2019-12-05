import React from 'react';
import './styles.scss';
import {
  authenticate,
  isAuthenticated,
  getQR,
} from 'api';
import Loading from 'components/Loading';

export default class QR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticating: true,
      receivedQrCode: false,
      qrUrl: '',
    };
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('/qr');
      return;
    }

    this.setState({ authenticating: false });

    const size = '500';
    const qrCode = getQR();
    qrCode.then(res => {
      const qrString = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(res.qrInfo)}&choe=UTF-8`;
      this.setState({
        receivedQrCode: true,
        qrUrl: qrString,
      });
    });
  }

  render() {
    const { authenticating, qrUrl, receivedQrCode } = this.state;

    if (authenticating || !receivedQrCode) {
      return <Loading />;
    }

    return (
      <div className="qr-wrapper">
        <img id="qr-img" src={qrUrl} alt="QR code" />
      </div>
    );
  }
}
