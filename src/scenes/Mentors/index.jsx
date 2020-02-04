import React from 'react';

import Backdrop from 'components/Backdrop';
import Select from 'react-select';

import { mentors } from './mentors.js';
import light from 'assets/mentors/billboard-light.svg';
import './style.scss';

const tags = ['DATA SCI', 'LANGUAGES', 'SYSTEMS', 'WEB DEV'];
const mentorsByTag = groupByTag(mentors, tags);
console.log(mentorsByTag);

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
  return groups;
}

export default class Mentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
    };
  }

  onChange = idx => {
    if (idx !== this.state.idx) {
      document.getElementById('canvas').scrollTop = 0;
      this.setState({ idx });
    }
  }

  render() {
    const { idx } = this.state;
    const tag = tags[idx];

    const customSelectStyles = {
      control: provided => ({
        ...provided,
        backgroundColor: '#A43B5C',
        border: 'none',
        borderRadius: '0',
        boxShadow: 'none',
        height: '52px',
      }),
      singleValue: provided => ({
        ...provided,
        color: 'white',
        fontWeight: 600,
        left: '64px',
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      dropdownIndicator: provided => ({
        ...provided,
        marginRight: '12px',
        color: 'white !important', // !important is to prevent color change on hover
      }),
      input: provided => ({
        ...provided,
        color: 'transparent',
      }),
      option: provided => ({
        ...provided,
        color: 'white',
      }),
    };

    const customSelectTheme = theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        neutral0: '#A43B5C', // neutral
        primary25: '#E35058', // hover
        primary50: '#E35058', // active
        primary: '#E35058', // selected
      },
    });

    return (
      <div>
        <Backdrop
          title="Mentors"
          signs={tags}
          selectedSign={idx}
          onSignClick={this.onChange}
        >
          <div id="billboard">
            <Select
              id="header"
              value={{ label: tags[idx], value: idx }}
              onChange={selected => this.onChange(selected.value)}
              options={tags.map((tag, idx) => ({ label: tag, value: idx }))}
              styles={customSelectStyles}
              theme={customSelectTheme}
              isSearchable={false}
              classNamePrefix="react-select"
            />

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
              <div id="lights">
                <img src={light} className="left" alt="light" />
                <img src={light} className="middle" alt="light" />
                <img src={light} className="right" alt="light" />
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
