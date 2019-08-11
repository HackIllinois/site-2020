import { Field } from 'formik';
import React from 'react';

export default class MultipleSelectField extends React.Component {
  render() {
    return (
      <Field name={this.props.name} component={Inner}>
        {this.props.children}
      </Field>
    );
  }
}

class Inner extends React.Component {
  onChange = event => {
    let selected = [...event.target.options]
      .filter(option => option.selected)
      .map(option => option.value);
    this.props.form.setFieldValue(this.props.field.name, selected);
  }

  render() {
    return (
      <select multiple onChange={this.onChange}>
        {this.props.children}
      </select>
    );
  }
}

