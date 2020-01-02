import React from 'react';
import './style.scss';

import {
  getRegistration,
  getRoles,
  register,
  rsvp,
} from 'api';

import { Form, Formik } from 'formik';

import Loading from 'components/Loading';
import Message from 'components/Message';
import SelectField from 'components/SelectField';
import SubmitButton from 'components/SubmitButton';

export default class MentorRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEditing: false,
      isSubmitted: false,

      registration: {},
    };
  }

  componentDidMount() {
    getRoles().then(roles => {
      if (roles.includes('Applicant')) {
        this.setState({ isEditing: true });
        return getRegistration('attendee');
      }
      return {};
    }).then(registration => {
      this.setState({ registration });
    }).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  submit = registration => {
    const { isEditing } = this.state;
    this.setState({ registration, isLoading: true });

    register(isEditing, 'attendee', registration).then(rsvp()).then(() => {
      this.setState({ isSubmitted: true });
    }).catch(() => {
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
      this.setState({ page: 0 });
    }).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  page = ({ values }) => {
    const isValid = values.shirtSize && values.hasDisbility !== '';

    return (
      <div>
        <p>Shirt Size *</p>
        <SelectField
          name="shirtSize"
          placeholder="What size shirt would you like?"
          options={[
            { label: 'S', value: 'S' },
            { label: 'M', value: 'M' },
            { label: 'L', value: 'L' },
            { label: 'XL', value: 'XL' },
            { label: 'XXL', value: 'XXL' },
            { label: 'XXXL', value: 'XXXL' },
          ]}
        />

        <p>Dietary Restrictions</p>
        <SelectField
          isMulti
          name="dietaryRestrictions"
          placeholder="Do you have any dietary restrictions?"
          options={[
            { label: 'Gluten Free', value: 'GLUTENFREE' },
            { label: 'Nut Allergy', value: 'NUTALLERGY' },
            { label: 'Vegan', value: 'VEGAN' },
            { label: 'Vegetarian', value: 'VEGETARIAN' },
            { label: 'Other', value: 'OTHER' },
          ]}
        />

        <p>Disability *</p>
        <SelectField
          name="hasDisability"
          placeholder="Do you have a disability we should be aware of?"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />

        <div className="nav-buttons">
          <div />
          <SubmitButton disabled={!isValid} />
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, isSubmitted, registration } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (isSubmitted) {
      return <Message title="Thank you for your RSVP!" />;
    }

    return (
      <div className="RSVP">
        <h1>RSVP</h1>
        <Formik
          initialValues={registration}
          enableReinitialize
          onSubmit={this.submit}
          render={props => <Form>{this.page(props)}</Form>}
        />
      </div>
    );
  }
}
