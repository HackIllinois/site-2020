import React from 'react';
import Backdrop from 'components/Backdrop';

import { mentors } from './mentors.js';
import './style.scss';

const tags = ['DATA SCI', 'LANGUAGES', 'SYSTEMS', 'WEB DEV'];
const mentorsByTag = groupByTag(mentors, tags);

function groupByTag(mentors, tags) {
  let groups = {};
  for (const tag of tags) {
    groups[tag] = [];
    for (const mentor of mentors) {
      if (mentor.tags.includes(tag)) {
        groups[tag].push(mentor);
      }
    }
  }
  console.log(groups);
  return groups;
}

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    };
  }

  render() {
    const { idx } = this.state;
    const tag = tags[idx];

    return (
      <div>
        <Backdrop
          title="Mentors"
          signs={tags}
          selectedSign={idx}
          onSignClick={idx => this.setState({ idx })}
        >
          <div id="billboard">
            <div id="header">
              <h1>{tag}</h1>
            </div>
            <div className="left connector">
              <div className="shadow" />
            </div>
            <div className="right connector">
              <div className="shadow" />
            </div>
            <div id="border">
              <div id="canvas">
                {mentorsByTag[tag].map(mentor => {
                  return (
                  <div key={mentor.name} className="mentor">
                    <img src={mentor.img} alt="profile" />
                    <div className="info">
                      <h1>{mentor.name}</h1>
                      <p>{mentor.bio}</p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
            <div id="bottom">
              <div className="shadow" />
            </div>
          </div>
        </Backdrop>
      </div>
    );
  }
}
