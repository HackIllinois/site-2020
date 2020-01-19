// We disable the rule preventing the use of ...props because these are higher order components
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';

import { Field } from 'formik';
import Select from 'react-select';

const customStyles = {
  control: () => ({
    background: 'transparent',
    borderBottom: '2px solid #0A093F',
    display: 'flex',
  }),
  placeholder: base => ({
    ...base,
    color: 'rgba(164, 59, 92, 0.5)',
    fontWeight: 600,
  }),
  input: base => ({
    ...base,
    color: 'rgb(164, 59, 92)',
    fontWeight: 600,
  }),
  singleValue: base => ({
    ...base,
    color: 'rgb(164, 59, 92)',
    fontWeight: 600,
  }),
  multiValue: base => ({
    ...base,
    border: '1px solid #A43B5C',
    background: 'transparent',
  }),
  multiValueLabel: base => ({
    ...base,
    color: '#A43B5C',
  }),
  multiValueRemove: base => ({
    ...base,
    color: '#A43B5C',
  }),
  clearIndicator: () => ({
    color: '#0A093F',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    visible: false,
  }),
  dropdownIndicator: () => ({
    color: '#0A093F',
    cursor: 'pointer',
  }),
  menu: base => ({
    ...base,
    background: '#E4F4F6',
    border: '2px solid #0A093F',
    borderRadius: 0,
    margin: '8px 0',
    padding: '16px',
    paddingTop: '8px',
  }),
  option: () => ({
    borderBottom: '1px solid #0A093F',
    color: '#A43B5C',
    cursor: 'pointer',
    fontWeight: 600,
    padding: '8px',
  }),
};

class FormikSelect extends React.Component {
  getValue = () => {
    const { field, isMulti, options } = this.props;

    if (isMulti) {
      if (field.value === undefined || field.value === null) {
        return [];
      }
      return options.filter(option => field.value.includes(option.value));
    }

    if (field.value === undefined || field.value === null) {
      return '';
    }
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
        blurInputOnSelect={false}
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
  <Field
    key={name}
    name={name}
    styles={customStyles}
    component={FormikSelect}
    {...props}
  />
);

export default SelectField;
