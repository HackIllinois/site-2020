import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterFeed() {
  return (
    <div className="cell long-cell" id="twitter-cell">
      <TwitterTimelineEmbed
        sourceType="url"
        url="https://twitter.com/HackIllinois?ref_src=twsrc%5Etfw"
        screenName="HackIllinois"
        theme="dark"
        noScrollbar
        noBorders
        noFooter
        autoHeight
      />
    </div>
  );
}

export default TwitterFeed;
