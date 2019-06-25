import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
// import logo from 'assets/logo.svg';
import logoAndTagline from 'assets/hack_logo_and_tagline.svg';

import './styles.scss';

const styles = theme => ({
  background: {
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
});

export class LandingPage extends Component {
  render() {
    // const { classes } = this.props;

    return (
      <div className='background'>
        {/* <img className={classes.background} src={backgroundImage} alt="Background" /> */}
        <div className='info'>
          <img className='logo' src={logoAndTagline} alt="Tagline and Logo" />
          <h1>Explore. Connect. Build.</h1>
          <h3>February 28 - March 1, 2020</h3>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage);
