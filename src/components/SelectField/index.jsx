// We disable the rule preventing the use of ...props because these are higher order components
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';

import { Field } from 'formik';
import Select from 'react-select';

class FormikSelect extends React.Component {
  getValue = () => {
    const { field, isMulti, options } = this.props;

    if (isMulti) {
      if (!field.value) return [];
      return options.filter(option => field.value.includes(option.value));
    }
      if (!field.value) return '';
      return options.find(option => field.value === option.value);
  }

  handleChange = selected => {
    const { field, form, isMulti } = this.props;

    if (isMulti) {
      const values = selected ? selected.map(opt => opt.value) : [];
      form.setFieldValue(field.name, values);
    } else {
      const value = selected ? selected.value : '';
      form.setFieldValue(field.name, value);
    }
  }

  render() {
    const { field, isMulti } = this.props;
    return (
      <Select
        name={field.name}
        closeMenuOnSelect={!isMulti}
        isClearable
        onChange={this.handleChange}
        value={this.getValue()}
        {...this.props}
      />
    );
  }
}

const SelectField = ({ name, ...props }) => (
  <Field key={name} name={name} component={FormikSelect} {...props} />
);

export default SelectField;
