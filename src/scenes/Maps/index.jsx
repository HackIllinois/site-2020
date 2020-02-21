import React from 'react';
import Select from 'react-select';

import Backdrop from 'components/Backdrop';

import './style.scss';
import topStructure from 'assets/maps/top-structure.svg';
import dcl from 'assets/maps/dcl.png';
import siebel0 from 'assets/maps/siebel0.png';
import siebel1 from 'assets/maps/siebel1.png';
import siebel2 from 'assets/maps/siebel2.png';
import eceb1 from 'assets/maps/eceb1.png';
import eceb2 from 'assets/maps/eceb2.png';
import eceb3 from 'assets/maps/eceb3.png';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
    };
    this.mapsContainer = React.createRef();
  }

  setSection(section) {
    this.mapsContainer.current.scrollTo(0, 0);
    this.setState({ currentSection: section });
  }

  render() {
    const { currentSection } = this.state;

    const locations = [
      {
        name: 'DCL',
        maps: [{ floor: '1st Floor', image: dcl }],
      },
      {
        name: 'Siebel',
        maps: [
          { floor: 'Basement', image: siebel0 },
          { floor: '1st Floor', image: siebel1 },
          { floor: '2nd Floor', image: siebel2 },
        ],
      },
      {
        name: 'ECEB',
        maps: [
          { floor: '1st Floor', image: eceb1 },
          { floor: '2nd Floor', image: eceb2 },
          { floor: '3rd Floor', image: eceb3 },
        ],
      },
    ];

    const customSelectStyles = {
      control: provided => ({
        ...provided,
        backgroundColor: '#E26856',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '0',
      }),
      singleValue: provided => ({
        ...provided,
        color: 'white',
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      dropdownIndicator: provided => ({
        ...provided,
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
        neutral0: '#E26856', // neutral
        primary25: '#E26856', // hover
        primary50: '#A14234', // active
        primary: '#A14234', // selected
      },
    });

    return (
      <Backdrop
        title="Maps"
        signs={locations.map(location => location.name)}
        selectedSign={currentSection}
        onSignClick={signIndex => this.setSection(signIndex)}
      >
        <div className="maps-page">
          <div className="top-structure">
            <img src={topStructure} alt="" />
          </div>

          <div className="main-structure">
            <div className="first connector" />
            <div className="last connector" />

            <div className="maps-container" ref={this.mapsContainer}>
              {locations[currentSection].maps.map(({ floor, image }) => (
                <div className="map-container" key={image}>
                  <div className="floor-name">{floor}</div>
                  <div className="map-image" style={{ backgroundImage: `url(${image})` }} />
                </div>
              ))}
            </div>

            <Select
              className="location-select"
              value={{ label: locations[currentSection].name, value: currentSection }}
              onChange={selected => this.setState({ currentSection: selected.value })}
              options={locations.map((location, index) => ({ label: location.name, value: index }))}
              styles={customSelectStyles}
              theme={customSelectTheme}
              isSearchable={false}
              classNamePrefix="react-select"
            />
          </div>
        </div>
      </Backdrop>
    );
  }
}
