import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import logo from 'assets/logo.svg';

const styles = theme => ({
    logo: {
        width: "200px",
        marginTop: "20px"
    }
});

export class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <img className={classes.logo} src={logo} alt="HackIllinois Logo" />
        <h1>Explore. Connect. Build.</h1>
        <h3>Feb. 28 - Mar. 1, 2020</h3>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage);
