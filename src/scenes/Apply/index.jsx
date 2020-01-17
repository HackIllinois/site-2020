import React from 'react';
import './style.scss';

import {
  register,
  getRegistration,
  getRoles,
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

import { languages, schools } from './lists';

export default class Apply extends React.Component {
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

  back = () => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  }

  next = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  submit = registration => {
    const { isEditing } = this.state;
    const role = 'attendee';

    this.setState({ registration, isLoading: true });

    register(isEditing, role, registration).then(() => {
      this.setState({ isSubmitted: true });
    }).catch(() => {
      this.setState({ page: 0 });
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
    }).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  personal = ({ values }) => {
    const isValid = values.firstName && values.lastName;

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

        <p>Gender</p>
        <SelectField
          name="gender"
          placeholder="What is your gender?"
          options={[
            { label: 'Female', value: 'FEMALE' },
            { label: 'Male', value: 'MALE' },
            { label: 'Non-Binary', value: 'NONBINARY' },
          ]}
        />

        <div className="nav-buttons">
          <div />
          <NextButton onClick={this.next} disabled={!isValid} />
        </div>
      </div>
    );
  }

  educational = ({ values }) => {
    const isValid = values.school && values.major && values.degreePursued && values.graduationYear;

    return (
      <div>
        <p>School *</p>
        <SelectField
          name="school"
          placeholder="Where do you go to school?"
          options={schools.map(school => ({ label: school, value: school }))}
        />

        <p>Major *</p>
        <SelectField
          name="major"
          placeholder="What is your major?"
          options={[
            { label: 'Computer Science', value: 'CS' },
            { label: 'Computer Engineering', value: 'CE' },
            { label: 'Electrical Engineering', value: 'EE' },
            { label: 'Other Engineering', value: 'ENG' },
            { label: 'Business', value: 'BUS' },
            { label: 'Liberal Arts and Sciences', value: 'LAS' },
            { label: 'Other', value: 'OTHER' },
          ]}
        />

        <p>Degree *</p>
        <SelectField
          name="degreePursued"
          placeholder="What degree are you pursuing?"
          options={[
            { label: 'Associate\'s', value: 'ASSOCIATES' },
            { label: 'Bachelor\'s', value: 'BACHELORS' },
            { label: 'Master\'s', value: 'MASTERS' },
            { label: 'PhD', value: 'PHD' },
          ]}
        />

        <p>Graduation Year *</p>
        <SelectField
          name="graduationYear"
          placeholder="When do you graduate?"
          menuPlacement="top"
          options={[
            { label: '2020', value: 2020 },
            { label: '2021', value: 2021 },
            { label: '2022', value: 2022 },
            { label: '2023', value: 2023 },
          ]}
        />

        <div className="nav-buttons">
          <BackButton onClick={this.back} />
          <NextButton onClick={this.next} disabled={!isValid} />
        </div>
      </div>
    );
  }

  professional = () => (
    <div>
      <p>Resume</p>
      <FileUploadField
        name="resumeFilename"
        type="resume"
        accept="application/pdf"
      />

      <p>Career Interests</p>
      <SelectField
        isMulti
        name="careerInterest"
        placeholder="You may select multiple options"
        options={[
          { label: 'Full-time', value: 'FULLTIME' },
          { label: 'Internship', value: 'INTERNSHIP' },
        ]}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  experience = ({ values }) => {
    const isValid = typeof values.programmingYears === 'number' && values.programmingAbility && typeof values.isOSContributor === 'boolean';

    return (
      <div>
        <p>How many years have you been programming? *</p>
        <SelectField
          name="programmingYears"
          placeholder="Select a number"
          options={[
            { label: '0', value: 10 },
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9+', value: 9 },
          ]}
        />

        <p>How would you rate your programming ability? *</p>
        <SelectField
          name="programmingAbility"
          placeholder="Select a number"
          options={[
            { label: '1: I have no experience', value: 1 },
            { label: '2: I have introductory experience', value: 2 },
            { label: '3: I am a self-sufficient programmer', value: 3 },
            { label: '4: I am able to work in a professional setting with assistance', value: 4 },
            { label: '5: I am comfortable working independently in a professional setting', value: 5 },
          ]}
        />

        <p>Have you contributed to an open source project before? *</p>
        <SelectField
          name="isOSContributor"
          placeholder="Yes/No"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />

        <div className="nav-buttons">
          <BackButton onClick={this.back} />
          <NextButton onClick={this.next} disabled={!isValid} />
        </div>
      </div>
    );
  }

  interests = () => (
    <div>
      <p>Which types of projects are you interested in?</p>
      <SelectField
        isMulti
        name="categoryInterests"
        placeholder="You may select multiple options"
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

      <p>Which languages would you like to work with?</p>
      <SelectField
        isMulti
        name="languageInterests"
        placeholder="You may select multiple options"
        options={languages.map(language => ({ label: language, value: language }))}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  event = ({ values }) => {
    const isValid = typeof values.needsBus === 'boolean';

    return (
      <div>
        <p>
          Do you require bus transportation to the event? *<br />
          <span>
            Buses will be available for attendees along the following routes:<br />
            Route 1: Northwestern, UIC, DePaul, Union Station<br />
            Route 2: IU, IUPUI, Purdue<br />
          </span>
        </p>

        <SelectField
          name="needsBus"
          placeholder="Yes/No"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />

        <p>Have you attended HackIllinois previously?</p>
        <SelectField
          name="hasAttended"
          placeholder="Yes/No"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
        />

        <p>How did you discover HackIllinois?</p>
        <SelectField
          isMulti
          name="howDiscovered"
          placeholder="You may select multiple options"
          options={[
            { label: 'Friend or Peer', value: 'FRIEND' },
            { label: 'Social Media', value: 'SOCIALMEDIA' },
            { label: 'Other', value: 'OTHER' },
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
      return (
        <Message
          title="Thank you for your application!"
          text={<p>Want guaranteed admission?<br />Try our <a href="http://go.hackillinois.org/challenge">Open Source Challenge</a></p>}
        />
      );
    }

    const titles = [
      'PERSONAL INFO',
      'EDUCATION',
      'PROFESSIONAL INFO',
      'EXPERIENCE',
      'INTERESTS',
      'HACKILLINOIS INFO',
    ];
    const pages = [
      this.personal,
      this.educational,
      this.professional,
      this.experience,
      this.interests,
      this.event,
    ];

    return (
      <div className="Apply">
        <div className="progress">
          {titles.map((title, idx) => (
            <div key={title} className="row">
              <img className="pin" src={idx === page ? pinFilled : pinEmpty} alt="pin" />
              <p>{title}</p>
            </div>
          ))}
        </div>

        <div className="form">
          <h1>Application</h1>
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
