import { Field, Form, Formik } from 'formik';
import React from 'react';

import {
  apply,
  authenticate,
  getApplication,
  getRoles,
  isAuthenticated
} from 'api';
import {
  graduationYears,
  majors,
  schools
} from './lists';

import Loading from 'components/Loading';
import SelectField from 'components/SelectField';


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
    yearsExperience: 7
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
  transportation: 'NONE'
};

export default class Apply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      application: {},
      page: 0,
      isEditing: false,
      isLoading: true
    };
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('/apply');
      return;
    }

    getRoles().then(roles => {
      if (roles.includes('Applicant')) {
        this.setState({isEditing: true});
        return getApplication();
      }
      return EMPTY_APP;
    }).then(app => {
      this.setState({
        application: app,
        isLoading: false
      });
    }).catch(err => {
      this.setState({isLoading: false});
    });
  }

  back = () => {
    this.setState({page: this.state.page - 1});
  }

  next = () => {
    this.setState({page: this.state.page + 1});
  }

  submit = app => {
    this.setState({isLoading: true});

    apply(this.state.isEditing, app).then(app => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({isLoading: false});
      alert('Failed to submit.');
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    let pages = [this.page1, this.page2, this.page3];

    return (
      <Formik
        initialValues={this.state.application}
        enableReinitialize
        onSubmit={this.submit}
        render={() => (
          <Form>
            {pages[this.state.page]()}
          </Form>
        )}
      />
    );
  }

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

      <br />

      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page2 = () => (
    <div>
      <p>School</p>
      <SelectField
        name="school"
        placeholder="University of Illinois"
        options={schools.map(school => {
          return {'value': school, 'label': school};
        })}
      />

      <p>Major</p>
      <SelectField
        name="major"
        placeholder="Computer Science"
        options={majors.map(major => {
          return {'value': major, 'label': major};
        })}
      />

      <p>Graduation Year</p>
      <SelectField
        name="graduationYear"
        placeholder="2020"
        options={graduationYears.map(year => {
          return {'value': year, 'label': year};
        })}
      />

      <button type="button" onClick={this.back}>Back</button>
      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page3 = () => (
    <div>
      <p>Career Interests</p>
      <SelectField
        isMulti
        name="interests"
        placeholder="Internship"
        options={[
          {label: 'Internship', value: 'INTERNSHIP'},
          {label: 'Full-time', value: 'FULLTIME'}
        ]}
      />

      <p>Resume</p>
      <input type="file" accept="application/pdf" />

      <br />

      <button type="button" onClick={this.back}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
}

