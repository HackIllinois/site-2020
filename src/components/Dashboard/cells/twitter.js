import React from 'react';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

class TwitterFeed extends React.Component{
  render() {
    return (
      <div  className = "cell long-cell" id = "twitter-cell">
        <TwitterTimelineEmbed
          sourceType="URL"
          url = "https://twitter.com/HackIllinois?ref_src=twsrc%5Etfw"
          screenName="HackIllinois"
          options = {{height: '500'}}
          theme = {'dark'}
          noScrollbar = {true}
          noBorders = {true}
          noFooter = {true}
        />
      </div>
    )
  }
}

export default TwitterFeed;