import React from 'react';
import './style.scss';

import {
  getRegistration,
  getRoles,
  register,
} from 'api';

import { Field, Form, Formik } from 'formik';

import BackButton from 'components/BackButton';
import FileUploadField from 'components/FileUploadField';
import Loading from 'components/Loading';
import Message from 'components/Message';
import NextButton from 'components/NextButton';
import SelectField from 'components/SelectField';
import SubmitButton from 'components/SubmitButton';

import pinFilled from 'assets/icons/pin_filled.svg';
import pinEmpty from 'assets/icons/pin_empty.svg';

export default class MentorRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEditing: false,
      isSubmitted: false,

      registration: {},
      page: 0,
    };
  }

  componentDidMount() {
    getRoles().then(roles => {
      if (roles.includes('Mentor')) {
        this.setState({ isEditing: true });
        return getRegistration('mentor');
      }
      return {};
    }).then(registration => {
      this.setState({ registration });
    }).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  back = () => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  }

  next = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  submit = registration => {
    const { isEditing } = this.state;
    this.setState({ registration, isLoading: true });

    register(isEditing, 'mentor', registration).then(() => {
      this.setState({ isSubmitted: true });
    }).catch(() => {
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
      this.setState({ page: 0 });
    }).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  personal = ({ values }) => {
    const isValid = values.firstName && values.lastName && values.biography;

    return (
      <div>
        <p>First Name *</p>
        <Field
          name="firstName"
          key="firstName"
          placeholder="What is your first name?"
        />

        <p>Last Name *</p>
        <Field
          name="lastName"
          key="lastName"
          placeholder="What is your last name?"
        />

        <p>
          Photo *<br />
          <span>
            This will be posted on the &quot;mentors&quot; page of our website,
            so attendees can easily find you at the event if they&apos;re
            interested in working with you.
          </span>
        </p>
        <FileUploadField
          name="photoFilename"
          type="photo"
          accept="image/*"
        />

        <p>Biography *</p>
        <Field
          name="biography"
          key="biography"
          placeholder="Tell us about yourself."
        />

        <div className="nav-buttons">
          <div />
          <NextButton onClick={this.next} disabled={!isValid} />
        </div>
      </div>
    );
  }

  project = () => (
    <div>
      <p>Company or Organization</p>
      <Field
        name="organization"
        key="organization"
        placeholder="What company or organization do you represent?"
      />

      <p>Project (if applicable)</p>
      <Field
        name="project"
        key="project"
        placeholder="What open source project do you represent?"
      />

      <p>Project Description (if applicable)</p>
      <Field
        name="projectDescription"
        key="projectDescription"
        placeholder="Tell us about your open source project."
      />

      <p>
        Project Categories and Expertise<br />
        <span>
          Open Source Mentors: How would you classify your open source project?<br />
          Corporate Mentors: Which categories would you be comfortable assisting attendees with?
        </span>
      </p>
      <SelectField
        isMulti
        name="categories"
        placeholder="You may select multiple options"
        menuPlacement="top"
        options={[
          { label: 'App Development', value: 'APPDEV' },
          { label: 'Data Science', value: 'DATASCIENCE' },
          { label: 'Developer Tools', value: 'DEVTOOLS' },
          { label: 'Hardware', value: 'HARDWARE' },
          { label: 'Programming Languages', value: 'LANGUAGES' },
          { label: 'Systems', value: 'SYSTEMS' },
          { label: 'Web Development', value: 'WEBDEV' },
        ]}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  event = ({ values }) => {
    const isValid = values.shirtSize && typeof values.hasDisability === 'boolean';

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
          menuPlacement="top"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />

        <div className="nav-buttons">
          <BackButton onClick={this.back} />
          <SubmitButton disabled={!isValid} />
        </div>
      </div>
    );
  }

  render() {
    const {
      isLoading,
      isSubmitted,
      registration,
      page,
    } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    if (isSubmitted) {
      return <Message title="Thank you for registering!" />;
    }

    const titles = [
      'PERSONAL INFO',
      'PROJECT',
      'EVENT INFO',
    ];
    const pages = [
      this.personal,
      this.project,
      this.event,
    ];

    return (
      <div className="MentorRegistration">
        <div className="progress">
          {titles.map((title, idx) => (
            <div key={title} className="row">
              <img className="pin" src={idx === page ? pinFilled : pinEmpty} alt="pin" />
              <p>{title}</p>
            </div>
          ))}
        </div>

        <div className="form">
          <h1>Registration</h1>
          <Formik
            initialValues={registration}
            enableReinitialize
            onSubmit={this.submit}
            render={props => <Form>{pages[page](props)}</Form>}
          />
        </div>
      </div>
    );
  }
}
