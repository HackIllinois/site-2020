import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import ThemeContext from '../theme-context';

function renderTwitterFeed(theme) {
  let twitterTheme = 'dark';
  if (theme === 'day') {
    twitterTheme = 'light';
  }

  return (
    <div className="cell long-cell" id="twitter-cell">
      <TwitterTimelineEmbed
        sourceType="url"
        url="https://twitter.com/HackIllinois?ref_src=twsrc%5Etfw"
        screenName="HackIllinois"
        theme={twitterTheme}
        noScrollbar
        noBorders
        noFooter
        autoHeight
      />
    </div>
  );
}

function TwitterFeed() {
  return (
    <ThemeContext.Consumer>
      {value => renderTwitterFeed(value)}
    </ThemeContext.Consumer>
  );
}

export default TwitterFeed;
