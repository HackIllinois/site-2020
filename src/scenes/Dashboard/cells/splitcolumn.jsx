import React from 'react';
import '../styles/dashboard.scss';
import ThemeContext from '../theme-context';
import Sponsors from './sponsors';

class SplitColumn extends React.Component {
  constructor(props) {
    super(props);

    this.renderSideTop = this.renderSideTop.bind(this);
    this.renderSideBottom = this.renderSideBottom.bind(this);
  }

  renderSideTop() {
    const { props } = this;
    if (props.pos === 'left') { // top left
      return (
        <div className={`split-cell ${ this.context}`}>
          TEMP
        </div>
      );
    }
    return (
      <div className="split-cell">
        Other Temp
      </div>
    );
  }

  renderSideBottom() {
    const { props } = this;
    if (props.pos === 'left') { // bottom left
      return (
        <div className="split-cell">
          TEMP
        </div>
      );
    }
    return (
      <Sponsors />
    );
  }

  render() {
    return (
      <div className="cell long-cell vsplit">
        {this.renderSideTop()}
        {this.renderSideBottom()}
      </div>
    );
  }
}
SplitColumn.contextType = ThemeContext;

export default SplitColumn;
