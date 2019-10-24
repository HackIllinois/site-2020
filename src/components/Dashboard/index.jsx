import React from 'react';
import './styles/dashboard.scss';

//All the various cells I'm using have their own js files
import TwitterFeed from './cells/twitter';
import CountDown from './cells/countdown';
import Time from './cells/time';
import Logo from './cells/logo';
import Sponsors from './cells/sponsors';


class SplitColumn extends React.Component {
  constructor(props){
    super(props);
    
    this.renderSideTop = this.renderSideTop.bind(this);
    this.renderSideBottom = this.renderSideBottom.bind(this);
  }

  renderSideTop(){
    if (this.props.pos === "left") { //top left
      return (
        <div className={"split-cell " + this.props.theme}> 
          TEMP 
        </div>
      );
    }
    else if (this.props.pos === "right") { //top right
      return (
        <div className = "split-cell">
          Other Temp
        </div>
      )
    }
  }

  renderSideBottom() {
    if (this.props.pos === "left") { //bottom left
      return (
        <div className="split-cell"> 
          TEMP 
        </div>
      );
    }
    else if (this.props.pos === "right") {//bottom right
      return (
        <Sponsors theme={this.props.theme}/>
      )
    }
  }

  render(){
    return (
      <div className = "cell long-cell vsplit">
        {this.renderSideTop()}
        {this.renderSideBottom()}
      </div>
    )
  }
}


export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      theme: this.getTheme(),
      themeChanged: false,
    }

    this.setInterval = null;

    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(this.updateTheme, 30000); //every 30
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  getTheme(){
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    currentHour = currentHour + currentMinute/60;

    if (currentHour >= 5 && currentHour < 10) {
      //5Am to 10am
      return 'early-morning';
    }
    else if (currentHour >= 10 && currentHour < 18.5) {
      //10am to 6:30pm
      return 'mid-day';
    }
    else if (currentHour >= 18.5 && currentHour < 21) {
      //6:30 to 9pm
      return 'afternoon';
    }
    else{
      return 'night';
    }
  }

  updateTheme(){
    var newTheme = this.getTheme();
    //to avoid constantly setting the state of the dashboard, just check if it changed
    if (newTheme.localeCompare(this.state.theme) !== 0) {
      this.setState({
        theme: this.getTheme()
      })
    }
  }
  render() {
    var theme = this.state.theme;
    return (
      <div className = {"dashboard-wrapper " + theme}>
        <div className = "dashboard">
          <div className = "row top-row">
            <Time theme={theme}/>
            <CountDown theme={theme}/>
            <Logo theme={theme}/>
          </div>
          <div className = "row bottom-row">
            <SplitColumn theme={theme} pos="left"/>
            <SplitColumn theme={theme} pos="right"/>
            <TwitterFeed theme={theme}/>
          </div>
        </div>     
      </div>
    );
  }
}