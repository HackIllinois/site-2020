import React from 'react';
import Select from 'react-select';
import Backdrop from 'components/Backdrop';
import BillboardTop from 'assets/travel/travel_billboard_top.svg';
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
    const LOCATIONS = ['Illinois', 'Michigan', 'Indiana'];
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
        color: 'white',
      }),
      menuList: provided => ({
        ...provided,
        backgroundColor: '#6baec5',
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        backgroundColor: isSelected ? '#285163 !important' : '#6baec5 !important',
        color: 'white',
      }),
    };
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
                />
                {/* <select onChange={this.handleLocation} value={currentSection} name="locations">
                  {LOCATIONS.map((e, i) => (
                    <option key={e} value={i}>{e}</option>
                  ))}
                </select> */}
                <div className="text-container">
                  <div className="inner-text-container">
                    {CONTENT[currentSection].map((e, i) => (
                      <div key={e} className="section-container">
                        {i !== 0 && <hr />}
                        <h3>{e.title}</h3>
                        {e.body.map(f => (
                          <div key={f} className="sub-container">
                            <div className="left-column">{f.title}</div>
                            <div className="item-container">
                              {f.body.map(g => (
                                <div key={g} className="item">
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
