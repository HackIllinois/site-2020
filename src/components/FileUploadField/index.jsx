// We disable the rule preventing the use of ...props because these are higher order components
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import { Field } from 'formik';

import { uploadFile } from 'api';
import './style.scss';

class FormikFileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filename: props.field.value,
    };
  }

  onFileUpload = event => {
    const { field, form, type } = this.props;

    const file = event.target.files[0];
    uploadFile(file, type).then(() => {
      this.setState({ filename: file.name });
      form.setFieldValue(field.name, file.name);
    }).catch(() => {
      alert('Failed to upload file.');
    });
  }

  render() {
    const { filename } = this.state;
    const { accept } = this.props;

    return (
      <div className="FileUpload">
        <label htmlFor="upload">
          CHOOSE FILE
          <input
            id="upload"
            type="file"
            accept={accept}
            onChange={this.onFileUpload}
          />
        </label>

        <span>{filename}</span>
      </div>
    );
  }
}

const FileUploadField = ({ name, ...props }) => (
  <Field key={name} name={name} component={FormikFileUpload} {...props} />
);

export default FileUploadField;
