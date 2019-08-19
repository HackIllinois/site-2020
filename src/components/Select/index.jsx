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
      expanded: false
    };
  }

  getValue = selected => {
    if (this.props.multiple) {
      return selected.map(this.getLabel).join(', ');
    } else {
      return this.getLabel(selected);
    }
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

  handleClick = event => {
    if (!this.ref.contains(event.target)) {
      this.setState({expanded: false})
    }
  }

  isSelected = (selected, option) => {
    if (this.props.multiple) {
      return selected.includes(option.value);
    } else {
      return selected === option.value;
    }
  }

  select = val => {
    let name = this.props.field.name;
    let selected = this.props.field.value;

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

    this.props.form.setFieldValue(name, selected);
    this.setState({expanded: this.props.multiple});
  }

  toggle = () => {
    this.setState({expanded: !this.state.expanded});
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  render() {
    let selected = this.props.field.value;

    let value = this.getValue(selected);
    let options = this.props.options.map(option => {
      return (
        <li
          className={this.isSelected(selected, option) ? "selected" : undefined}
          key={option.value}
          onClick={() => this.select(option.value)}
        >
          {option.label || option.value}
        </li>
      );
    });

    return (
      <div className="select" ref={ref => this.ref = ref}>
        <input
          onClick={this.toggle}
          readOnly
          value={value}
          {...this.props}
        />
        {this.state.expanded && <ul>{options}</ul>}
      </div>
    );
  }
}

export default SelectField;
