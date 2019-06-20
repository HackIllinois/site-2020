import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
// import logo from 'assets/logo.svg';
import backgroundImage from 'assets/hack2020-landing-page.svg';

const styles = theme => ({
  logo: {
    width: "200px",
    marginTop: "20px"
  },
  background: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1
  }
});

export class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <img className={classes.background} src={backgroundImage} alt="Background" />
        {/* <img className={classes.logo} src={logo} alt="HackIllinois Logo" />
        <h1>Explore. Connect. Build.</h1>
        <h3>Feb. 28 - Mar. 1, 2020</h3> */}
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage);
