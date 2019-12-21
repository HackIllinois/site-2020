import React from 'react';
import './style.scss';

import { Field, Form, Formik } from 'formik';
import Loading from 'components/Loading';
import SelectField from 'components/SelectField';

import BackButton from './BackButton';
import NextButton from './NextButton';
import SubmitButton from './SubmitButton';

import pinFilled from 'assets/apply/pin_filled.svg';
import pinEmpty from 'assets/apply/pin_empty.svg';

import {
  apply,
  authenticate,
  getApplication,
  getRoles,
  isAuthenticated,
  uploadResume,
} from 'api';

import {
  categories,
  degrees,
  graduationYears,
  languages,
  majors,
  schools,
} from './lists';

const customStyles = {
  control: () => ({
    background: 'transparent',
    borderBottom: '2px solid #0A093F',
    display: 'flex',
  }),
  placeholder: (base, input) => ({
    ...base,
    color: '#A43B5C',
    fontWeight: 600,
  }),
  clearIndicator: () => ({
    color: '#0A093F',
    paddingRight: '2px',
  }),
  indicatorSeparator: () => ({
    visible: false,
  }),
  dropdownIndicator: () => ({
    color: '#0A093F',
  }),
  menu: () => ({
    position: 'absolute',
    background: '#E4F4F6',
    border: '2px solid #0A093F',
    borderTop: 0,
    boxSizing: 'border-box',
    padding: '8px 16px 16px 16px',
    width: '100%',
    zIndex: 1,
  }),
  option: () => ({
    borderBottom: '1px solid #0A093F',
    color: '#A43B5C',
    fontWeight: 600,
    padding: '8px',
  }),
}

export default class Apply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEditing: false,

      application: {},
      resume: undefined,
      page: 0,
    };
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('/apply');
      return;
    }

    getRoles().then(roles => {
      if (roles.includes('Applicant')) {
        this.setState({ isEditing: true });
        return getApplication();
      }
      return {};
    }).then(app => {
      this.setState({
        application: app,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  onResumeUpload = event => {
    const file = event.target.files[0];
    this.setState({ resume: file });
  }

  back = () => {
    this.setState(prevState => ({ page: prevState.page - 1 }));
  }

  next = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  submit = app => {
    this.setState({ isLoading: true });

    const { isEditing, resume } = this.state;
    app['resumeFilename'] = resume && resume.name;

    // TODO Fix logic here; upload resume and application together
    apply(isEditing, app).then(() => {
      if (resume) {
        return uploadResume(resume).then(() => {
          this.props.history.push('/');
        }).catch(() => {
          this.setState({ isLoading: false });
        });
      }
      return {};
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  personal = () => (
    <div>
      <p>First Name *</p>
      <Field
        name="firstName"
        placeholder="What is your first name?"
      />

      <p>Last Name *</p>
      <Field
        name="lastName"
        placeholder="What is your last name?"
      />

      <p>Gender</p>
      <SelectField
        styles={customStyles}
        name="gender"
        placeholder="What is your gender?"
        options={[
          { label: 'Male', value: 'MALE'},
          { label: 'Female', value: 'FEMALE' },
          { label: 'Non-Binary', value: 'NONBINARY' },
        ]}
      />

      <br />
      <div className="nav-buttons">
        <div />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  educational = () => (
    <div>
      <p>School *</p>
      <SelectField
        styles={customStyles}
        name="school"
        placeholder="Where do you go to school?"
        options={schools.map(school => ({ value: school, label: school }))}
      />

      <p>Major *</p>
      <SelectField
        styles={customStyles}
        name="major"
        placeholder="What is your major?"
        options={majors.map(major => ({ value: major, label: major }))}
      />

      <p>Degree *</p>
      <SelectField
        styles={customStyles}
        name="degreePursued"
        placeholder="What degree are you pursuing?"
        options={degrees.map(degree => ({value: degree, label: degree}))}
      />

      <p>Graduation Year *</p>
      <SelectField
        styles={customStyles}
        name="graduationYear"
        placeholder="When do you graduate?"
        options={graduationYears.map(year => ({ value: year, label: year }))}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  professional = () => (
    <div>
      <p>Resume</p>
      <div className="resume-upload">
        <label htmlFor="upload">CHOOSE FILE</label>
        <span>{this.state.resume && this.state.resume.name}</span>
        <input
          id="upload"
          type="file"
          accept="application/pdf"
          onChange={this.onResumeUpload}
        />
      </div>

      <p>Career Interests</p>
      <SelectField
        isMulti
        styles={customStyles}
        name="careerInterests"
        placeholder="You may select multiple options"
        options={[
          { label: 'Internship', value: 'INTERNSHIP' },
          { label: 'Full-time', value: 'FULLTIME' },
        ]}
      />

      <br />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  experience = () => (
    <div>
      <p>How many years have you been programming? *</p>
      <SelectField
        styles={customStyles}
        name="programmingYears"
        placeholder="Select a number"
        options={[
          { 'value': 0, 'label': '0' },
          { 'value': 1, 'label': '1' },
          { 'value': 2, 'label': '2' },
          { 'value': 3, 'label': '3' },
          { 'value': 4, 'label': '4' },
          { 'value': 5, 'label': '5' },
          { 'value': 6, 'label': '6' },
          { 'value': 7, 'label': '7' },
          { 'value': 8, 'label': '8' },
          { 'value': 9, 'label': '9+' },
        ]}
      />

      <p>How would you rate your programming ability? *</p>
      <SelectField
        styles={customStyles}
        name="programmingAbility"
        placeholder="Select a number"
        options={[
          { 'value': 0, 'label': '0: I am a complete beginner' },
          { 'value': 1, 'label': '1' },
          { 'value': 2, 'label': '2' },
          { 'value': 3, 'label': '3: I am comfortable working on an independent project' },
          { 'value': 4, 'label': '4' },
          { 'value': 5, 'label': '5' },
          { 'value': 6, 'label': '6: I am comfortable writing and reviewing code in a professional setting' },
          { 'value': 7, 'label': '7' },
          { 'value': 8, 'label': '8' },
          { 'value': 9, 'label': '9: I am Linus Torvalds' },
        ]}
      />

      <p>Have you contributed to Open Source before?</p>
      <SelectField
        styles={customStyles}
        name="isOSContributor"
        placeholder="Yes/No"
        options={[
          { label: 'Yes', value: 'YES' },
          { label: 'No', value: 'NO' },
        ]}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  interests = () => (
    <div>
      <p>Which types of projects are you interested in? *</p>
      <SelectField
        isMulti
        styles={customStyles}
        name="categoryInterests"
        placeholder="You may select multiple options"
        options={categories.map(category => ({ value: category, label: category }))}
      />

      <p>Which languages would you like to work with? *</p>
      <SelectField
        isMulti
        styles={customStyles}
        name="languageInterests"
        placeholder="You may select multiple options"
        options={languages.map(language => ({ value: language, label: language }))}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <NextButton onClick={this.next} />
      </div>
    </div>
  );

  event = () => (
    <div>
      <p>Do you require bus transportation to the event? *</p>
      <SelectField
        styles={customStyles}
        name="needsBus"
        placeholder="Yes/No"
        options={[
          { 'value': 'YES', 'label': 'Yes' },
          { 'value': 'NO', 'label': 'No' },
        ]}
      />

      <p>Have you attended HackIllinois previously?</p>
      <SelectField
        styles={customStyles}
        name="priorAttendance"
        placeholder="Yes/No"
        options={[
          { 'value': 'YES', 'label': 'Yes' },
          { 'value': 'NO', 'label': 'No' },
        ]}
      />

      <p>How did you discover HackIllinois?</p>
      <SelectField
        isMulti
        styles={customStyles}
        name="howDiscovered"
        placeholder="You may select multiple options"
        options={[
          { 'value': 'PEER', 'label': 'Friend or Peer' },
          { 'value': 'SOCIALMEDIA', 'label': 'Social Media' },
          { 'value': 'OTHER', 'label': 'Other' },
        ]}
      />

      <div className="nav-buttons">
        <BackButton onClick={this.back} />
        <SubmitButton />
      </div>
    </div>
  );

  render() {
    const { isLoading, application, page } = this.state;
    if (isLoading) {
      return <Loading />;
    }

    const pages = [this.personal, this.educational, this.professional, this.experience, this.interests, this.event];
    const titles = ["PERSONAL", "EDUCATIONAL", "PROFESSIONAL", "EXPERIENCE", "INTERESTS", "EVENT"];

    return (
      <div className="apply">
        <div className="progress">
          {titles.map((title, idx) => (
            <div key={title} className="row">
              <img className="pin" src={idx === page ? pinFilled : pinEmpty} alt="pin" />
              <p>{title}</p>
            </div>
          ))}
        </div>

        <div className="application">
          <h3>Registration</h3>
          <Formik
            initialValues={application}
            enableReinitialize
            onSubmit={this.submit}
            render={() => <Form>{pages[page]()}</Form>}
          />
        </div>
      </div>
    );
  }
}
