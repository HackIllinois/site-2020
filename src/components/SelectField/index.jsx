import { Field } from 'formik';
import React from 'react';
import Select from 'react-select';

const SelectField = (props) => (
  <Field key={props.name} component={FormikSelect} {...props} />
);

class FormikSelect extends React.Component {
  getValue = () => {
    const { field, isMulti, options } = this.props;

    if (isMulti) {
      const match = (opt) => field.value.includes(opt.value);
      return options.filter(match);
    }
    const match = (opt) => opt.value === field.value;
    return options.find(match);
  }

  handleChange = (selected) => {
    const { field, form, isMulti } = this.props;

    if (isMulti) {
      const values = selected ? selected.map((opt) => opt.value) : [];
      form.setFieldValue(field.name, values);
    } else {
      const { value } = selected;
      form.setFieldValue(field.name, value);
    }
  }

  render() {
    return (
      <Select
        hideSelectedOptions={false}
        name={this.props.field.name}
        onChange={this.handleChange}
        value={this.getValue()}
        {...this.props}
      />
    );
  }
}

export default SelectField;
