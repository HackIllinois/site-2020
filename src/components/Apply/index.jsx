import { Field, Form, Formik } from 'formik';
import React from 'react';
import './index.scss';

import nav_background from 'assets/background_app_nav.svg';
import pin_filled from 'assets/pin_filled.svg';
import pin_empty from 'assets/pin_empty.svg';

import {
  apply,
  authenticate,
  getApplication,
  getRoles,
  isAuthenticated,
  uploadResume,
} from 'api';

import Loading from 'components/Loading';
import SelectField from 'components/SelectField';
import {
  graduationYears,
  degrees,
  majors,
  schools,
} from './lists';


const EMPTY_APP = {
  firstName: '',
  lastName: '',

  school: '',
  major: '',
  graduationYear: 0,

  interests: [],

  age: 20,
  beginnerInfo: {
    pullRequest: 5,
    technicalSkills: [],
    versionControl: 5,
    yearsExperience: 7,
  },
  extraInfo: '',
  diet: [],
  gender: 'MALE',
  isBeginner: false,
  isOSContributor: true,
  linkedin: 'linkedin.com/in/brian-strauch',
  phone: '6308158395',
  priorAttendance: true,
  shirtSize: 'L',
  skills: [],
  teamMembers: [],
  transportation: 'NONE',
};

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
      return EMPTY_APP;
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
    const { history } = this.props;

    apply(isEditing, app).then(() => {
      if (resume) {
        return uploadResume(resume).then(() => {
          history.push('/');
        }).catch(() => {
          this.setState({ isLoading: false });
        });
      }
      return {};
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  /* PERSONAL */
  page1 = () => (
    <div>
      <p>First Name</p>
      <Field
        name="firstName"
        placeholder="Brian"
      />

      <p>Last Name</p>
      <Field
        name="lastName"
        placeholder="Strauch"
      />

      <p>Gender</p>
      <SelectField
        styleHelper
        name="gender"
        placeholder="What is your gender?"
        options={[
          { label: 'Internship', value: 'INTERNSHIP'},
          { label: 'Full-time', value: 'FULLTIME' },
        ]}
      />

      <br />
      <div className="buttons">
        <div></div>
        <button type="button" onClick={this.next}>Next</button>
      </div>
    </div>
  );

  /* EDUCATIONAL */
  page2 = () => (
    <div>
      <p>School</p>
      <SelectField
        isMulti
        styleHelper
        name="school"
        placeholder="University of Illinois"
        options={schools.map(school => ({ value: school, label: school }))}
      />

      <p>Major</p>
      <SelectField
        styleHelper
        name="major"
        placeholder="Computer Science"
        options={majors.map(major => ({ value: major, label: major }))}
      />

      {/* TODO: add to application object */}
      <p>Degree Being Pursued</p>
      <SelectField
        styleHelper
        name="degree"
        placeholder="Bachelor"
        options={degrees.map(degree => ({value: degree, label: degree}))}
      />


      <p>Graduation Year</p>
      <SelectField
        styleHelper
        name="graduationYear"
        placeholder="2020"
        options={graduationYears.map(year => ({ value: year, label: year }))}
      />

      <div className="buttons">
        <button type="button" onClick={this.back}>Back</button>
        <button type="button" onClick={this.next}>Next</button>
      </div>
    </div>
  );

  /* PROFESSIONAL */
  page3 = () => (
    <div>
      <p>Career Interests</p>
      <SelectField
        styleHelper
        name="interests"
        placeholder="Internship"
        options={[
          { label: 'Internship', value: 'INTERNSHIP' },
          { label: 'Full-time', value: 'FULLTIME' },
        ]}
      />

      <p>Resume</p>
      <input
        type="file"
        accept="application/pdf"
        onChange={this.onResumeUpload}
      />

      <br />

      <div className="buttons">
        <button type="button" onClick={this.back}>Back</button>
        <button type="button" onClick={this.next}>Next</button>
      </div>
      
    </div>
  );

  /* EXPERIENCE */
  page4 = () => {
    const range = n => Array.from(Array(n).keys());

    return (
      <div>
        {/* TODO: add to application object */}
        <p>Years of programming experience?</p>
        <SelectField
          styleHelper
          name="years"
          options={range(11).map(year => {
            const label = (year == 10) ? "10+" : year.toString();
            return { 'value': year, 'label': label};
          })}
        />

        {/* TODO: add to application object */}
        <p>How would you rate your programming ability?</p>
        <ol>
          <li value="1">What is code?</li>
          <li value="4">I am comfortable with doing an independent project.</li>
          <li value="7">I am comfortable writing and reviewing production level code in a professional setting.</li>
          <li value="10">I <i>AM</i> code.</li>
        </ol>
        <SelectField
          styleHelper
          name="ability"
          options={range(10).map(year => {
            return { 'value': (year+1), 'label': (year+1)};
          })}
        />

        {/* TODO: add to application object */}
        <p>Have you contributed to open source before?</p>
        <SelectField
          styleHelper
          name="contributed"
          options={[
            { label: 'Yes', value: 'YES' },
            { label: 'No', value: 'NO' },
          ]}
        />

        <div className="buttons">
          <button type="button" onClick={this.back}>Back</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
      </div>
  )};

  render() {
    const { isLoading, application, page } = this.state;
    if (isLoading) {
      return <Loading />;
    }

    const pages = [this.page1, this.page2, this.page3, this.page4];
    const titles = ["PERSONAL INFO", "EDUCATIONAL", "PROFESSIONAL INFO", "EXPERIENCE", "INTERESTS", "HACKILLINOIS INFO"];

    return (
      <div className="apply">
        <div className="progress">
          {titles.map((title, idx) => (
            <div className="nav-row">
              <img className="pin" src={idx === page ? pin_filled : pin_empty} />
              <p>{title}</p>
            </div>
          ))}
        </div>

        <div className="application">
          <h1>Registration</h1>
          <Formik
            initialValues={application}
            enableReinitialize
            onSubmit={this.submit}
            render={() => (
              <Form>
                {pages[page]()}
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}
