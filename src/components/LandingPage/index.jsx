import React from 'react';
import './styles.scss';

import logo from 'assets/hackillinois_logo.svg';

import facebook from 'assets/icons/facebook.svg';
import github from 'assets/icons/github.svg';
import instagram from 'assets/icons/instagram.svg';
import twitter from 'assets/icons/twitter.svg';

import bus from 'assets/bus.svg';
import car from 'assets/car.svg';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.vehicleStateAt(0);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll() {
    var p = this.getScrollPercent();
    var state = this.vehicleStateAt(p);
    this.setState(state);
  }

  getScrollPercent() {
    return document.body.scrollTop / document.body.scrollHeight;
  }

  isMobile() {
    var mobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4))) mobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return mobile;
  }

  getWidth() {
    let ratio = (this.isMobile() ? 812 / 375 : 9 / 16);
    return this.getHeight() / ratio;
  }

  getHeight() {
    // The document's height was set to 300% to compensate for scrolling.
    return document.body.scrollHeight / 3;
  }

  vehicleStateAt(percent) {
    const CAR_START_PERCENT = 0;
    const BUS_START_PERCENT = 0.3;

    // Move the cars the width of the window plus a little more.
    let dx = this.getWidth() * 2;
    return {
      busX: dx * (BUS_START_PERCENT - percent),
      carX: dx * (CAR_START_PERCENT + percent),
    };
  }

  render() {
    let {busX, carX} = this.state;

    return (
      <div className="scrollingContainer">
        <div className="LandingPage">
          <div className="info">
            <img className="logo" src={logo} alt="logo" />

            <h1>Explore. Connect. Build.</h1>
            <h2>February 28 - March 1, 2020</h2>

            <div className="social">
                <a href="https://www.facebook.com/hackillinois">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/hackillinois">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://twitter.com/hackillinois">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.github.com/hackillinois">
                    <img src={github} alt="github" />
                </a>
            </div>
          </div>

          <img className="bus" src={bus} style={{left: busX}} alt="bus" />
          <img className="car" src={car} style={{left: carX}} alt="car" />
        </div>
      </div>
    )
  }
}

export default LandingPage;
