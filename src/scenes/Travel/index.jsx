import React from 'react';
import Select from 'react-select';

import Backdrop from 'components/Backdrop';
import BillboardTop from 'assets/travel/billboard_top.svg';
import CONTENT from './content';
import './style.scss';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 0,
    };

    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(e) {
    this.setState({ currentSection: e.target.value });
  }

  render() {
    const { currentSection } = this.state;
    const LOCATIONS = ['Chicago', 'Indiana'];
    const customSelectStyles = {
      control: provided => ({
        ...provided,
        backgroundColor: '#6baec5',
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
        neutral0: '#6baec5', // neutral
        primary25: '#4390ab', // hover
        primary: '#285163', // selected
      },
    });
    return (
      <div>
        <Backdrop
          title="Transport"
          signs={LOCATIONS}
          selectedSign={currentSection}
          onSignClick={signIndex => this.setState({ currentSection: signIndex })}
        >
          <div className="structure" style={{ width: '100%', height: '100%' }}>
            <img className="billboard-top" src={BillboardTop} alt="billboard-top" />
            <div className="billboard-bottom">
              <div className="leg" />
              <div className="sign-container">
                <Select
                  className="location-select"
                  value={{ label: LOCATIONS[currentSection], value: currentSection }}
                  onChange={selected => this.setState({ currentSection: selected.value })}
                  options={LOCATIONS.map((e, i) => ({ label: e, value: i }))}
                  styles={customSelectStyles}
                  theme={customSelectTheme}
                  isSearchable={false}
                />
                <div className="text-container">
                  <div className="inner-text-container">
                    {CONTENT[currentSection].map((e, i) => (
                      <div key={e.title} className="section-container">
                        {i !== 0 && <hr />}
                        <h3>{e.title}</h3>
                        {e.body.map(f => (
                          <div key={f.title} className="sub-container">
                            <div className="left-column">{f.title}</div>
                            <div className="item-container">
                              {f.body.map(g => (
                                <div key={g.title} className="item">
                                  <h4>{g.title}</h4>
                                  <p>{g.body}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="stando" />
              </div>
            </div>
          </div>
        </Backdrop>
      </div>
    );
  }
}
