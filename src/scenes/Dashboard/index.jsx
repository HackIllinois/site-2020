import React from 'react';
import './styles/dashboard.scss';
import ThemeContext from './theme-context';

// All the various cells I'm using have their own js files
import TwitterFeed from './cells/twitter';
import CountDown from './cells/countdown';
import Time from './cells/time';
import Logo from './cells/logo';
import SplitColumn from './cells/splitcolumn';

function getTheme() {
  const currentTime = new Date();
  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  currentHour += currentMinute / 60;

  if (currentHour >= 5 && currentHour < 10) {
    // 5Am to 10am
    return 'early-morning';
  }
  if (currentHour >= 10 && currentHour < 18.5) {
    // 10am to 6:30pm
    return 'mid-day';
  }
  if (currentHour >= 18.5 && currentHour < 21) {
    // 6:30pm to 9pm
    return 'afternoon';
  }

    // 9pm to 5am
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
    this.interval = setInterval(this.updateTheme, 30000); // every 30
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTheme() {
    const { state } = this;
    const newTheme = getTheme();
    // to avoid constantly setting the state of the dashboard, just check if it changed
    if (newTheme.localeCompare(state.theme) !== 0) {
      this.setState({
        theme: getTheme(),
      });
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <div className={`dashboard-wrapper ${ theme}`}>
          <div className="dashboard">
            <div className="row top-row">
              <Time />
              <CountDown />
              <Logo />
            </div>
            <div className="row bottom-row">
              <SplitColumn pos="left" />
              <SplitColumn pos="right" />
              <TwitterFeed />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
