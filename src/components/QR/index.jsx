/*eslint-disable*/
import React from 'react';
import "./qr.scss"
import {
  authenticate,
  isAuthenticated,
  qr,
} from 'api';
import Loading from 'components/Loading';

export default class QR extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticating: true,
      receivedQRCode: false,
      qrurl: '',
    };
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('/qr');
      return;
    }

    this.setState({ authenticating: false });
    
    const size = "500";
    const qrCode = qr();
    qrCode.then(res => {
      const qrstring= `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(res.qrInfo)}&choe=UTF-8`;
      this.setState({
        receivedQRCode: true,
        qrurl: qrstring,
      });
      
    });

  }

  render() {
    const { authenticating, qrurl, receivedQRCode } = this.state;
    return (
      <div className="qr-wrapper">
        <h1 className = "qr-header">Your QR Code</h1>

        <img id="qrimg" src={this.state.qrurl} alt="QR code"></img>
      </div>
    );
  }
}
