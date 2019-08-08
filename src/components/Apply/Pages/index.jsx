import { Field } from 'formik';
import React from 'react';

export function Page1() {
  return (
    <div>
      <p>First Name</p>
      <Field
        name="firstName"
        placeholder="Brian"
      />
    </div>
  )
}

export function Page2() {
  return (
    <div>
      <p>Shirt Size</p>
      <Field name="shirtSize" component="select">
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Large</option>
      </Field>
    </div>
  )
}

