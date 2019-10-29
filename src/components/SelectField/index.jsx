// We disable the rule prenting use of ...props because these are higher order components
/* eslint react/jsx-props-no-spreading: 0 */

import { Field } from 'formik';
import React from 'react';
import Select from 'react-select';

class FormikSelect extends React.Component {
  getValue = () => {
    const { field, isMulti, options } = this.props;

    if (isMulti) {
      const match = opt => field.value.includes(opt.value);
      return options.filter(match);
    }
    const match = opt => opt.value === field.value;
    return options.find(match);
  }

  handleChange = selected => {
    const { field, form, isMulti } = this.props;

    if (isMulti) {
      const values = selected ? selected.map(opt => opt.value) : [];
      form.setFieldValue(field.name, values);
    } else {
      const { value } = selected;
      form.setFieldValue(field.name, value);
    }
  }

  render() {
    const { field } = this.props;
    return (
      <Select
        hideSelectedOptions={false}
        name={field.name}
        onChange={this.handleChange}
        value={this.getValue()}
        {...this.props}
      />
    );
  }
}

const SelectField = ({ name, ...props }) => (
  <Field key={name} component={FormikSelect} {...props} />
);

export default SelectField;
