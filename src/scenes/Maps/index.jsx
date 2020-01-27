import React from 'react';
import Backdrop from 'components/Backdrop';

import topStructure from 'assets/maps/top_structure.svg';
import './style.scss';
import Select from 'react-select';

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
    };
  }

  render() {
    const { currentSection } = this.state;

    const locations = [
      { name: 'DCL', maps: [] },
      { name: 'Siebel', maps: [] },
      { name: 'ECEB', maps: [] },
      { name: 'Kenney', maps: [] },
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
        color: 'white',
      }),
      menuList: provided => ({
        ...provided,
        backgroundColor: '#E26856',
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        backgroundColor: isSelected ? '#A14234 !important' : '#E26856 !important',
        color: 'white',
      }),
    };

    return (
      <Backdrop
        title="Maps"
        signs={locations.map(location => location.name)}
        selectedSign={currentSection}
        onSignClick={signIndex => this.setState({ currentSection: signIndex })}
      >
        <div className="maps-page">
          <div className="top-structure">
            <img src={topStructure} alt="" />
          </div>

          <div className="main-structure">
            <div className="first connector" />
            <div className="last connector" />

            <div className="maps-container"></div>

            <Select
              className="location-select"
              value={{ label: locations[currentSection].name, value: currentSection }}
              onChange={selected => this.setState({ currentSection: selected.value })}
              options={locations.map((location, index) => ({ label: location.name, value: index }))}
              styles={customSelectStyles}
            />
          </div>
        </div>
      </Backdrop>
    );
  }
}
