import { Field } from 'formik';
import React from 'react';

import './style.scss';


const SelectField = props => (
  <Field key={props.name} component={Select} {...props} />
);

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      selected: props.field.value
    };
  }

  toggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  select = val => {
    let selected = this.state.selected;

    if (this.props.multiple) {
      let idx = selected.indexOf(val);
      if (idx >= 0) {
        selected.splice(idx, 1);
      } else {
        selected.push(val);
      }
    } else {
      if (selected === val) {
        selected = undefined;
      } else {
        selected = val;
      }
    }

    this.props.form.setFieldValue(this.props.field.name, selected);
    this.setState({selected: selected});
  }

  getLabel = val => {
    let options = this.props.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === val) {
        return options[i].label || options[i].value;
      }
    }
    return '';
  }

  render() {
    let selected;
    if (this.props.multiple) {
      selected = this.state.selected
        .map(this.getLabel)
        .join(', ');
    } else {
      selected = this.getLabel(this.state.selected);
    }

    let options = this.props.options.map(option => {
      let isSelected;
      if (this.props.multiple) {
        isSelected = this.state.selected.includes(option.value);
      } else {
        isSelected = this.state.selected === option.value;
      }

      return (
        <li
          className={isSelected ? "selected" : undefined}
          key={option.value}
          onClick={() => this.select(option.value)}
        >
          {option.label || option.value}
        </li>
      );
    });

    return (
      <div
        className="select"
        onClick={this.toggle}
      >
        <input readOnly value={selected} />
        {this.state.expanded && <div>{options}</div>}
      </div>
    );
  }
}

export default SelectField;
