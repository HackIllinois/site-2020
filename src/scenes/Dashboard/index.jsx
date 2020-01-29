import React from 'react';
import './styles/dashboard.scss';
import cityscape from 'assets/cityscape.svg';
import ThemeContext from './theme-context';

// All the various cells I'm using have their own jsx files
import TwitterFeed from './cells/twitter';
import CountDown from './cells/countdown';
import TimeAndEvents from './cells/timeAndEvents';
import Logo from './cells/logo';
import Temp from './cells/tempcell';

// This function will retrieve the new theme that should be applied to the dashboard.
function getTheme() {
  const currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  currentHour += currentMinute / 60;

  if (currentHour >= 8 && currentHour < 18) {
    // 8Aam to 6pm
    return 'day';
  }
  // 6pm to 8am
  return 'night';
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: getTheme(),
    };

    this.setInterval = null;
    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTheme, 30 * 1000); // every 30 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTheme() {
    const { theme } = this.state;
    const newTheme = getTheme();

    if (newTheme !== theme) {
      this.setState({
        theme: newTheme,
      });
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <div className="dashboard-wrapper">
          <img src={cityscape} id="cityscape" alt="cityscape background" />
          <div className={`dashboard ${theme}`}>
            <Logo />
            <CountDown />
            <Temp />
            <TwitterFeed />
            <TimeAndEvents />
            <Temp />
            <Temp />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
