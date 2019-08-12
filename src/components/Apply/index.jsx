import { Field, Form, Formik } from 'formik';
import React from 'react';

import { apply, authenticate, getApplication, getRoles, isAuthenticated } from 'API';
import Loading from 'components/Loading';
import SelectField from 'components/Select';


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
      application: EMPTY_APP,
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
      if (roles.roles.includes('Applicant')) {
        getApplication().then(app => {
          this.setState({
            application: app,
            isEditing: true,
            isLoading: false
          });
        }).catch(err => {
          this.setState({isLoading: false});
        });
      }
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

  submit = (values) => {
    this.setState({isLoading: true});

    apply(this.state.isEditing, values).then(app => {
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
        render={props => (
          <Form>
            {pages[this.state.page](props)}
          </Form>
        )}
      />
    );
  }

  page1 = () => (
    <div>
      <p>First Name</p>
      <Field name="firstName" placeholder="Brian" />

      <p>Last Name</p>
      <Field name="lastName" placeholder="Strauch" />

      <br />

      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page2 = () => (
    <div>
      <p>School</p>
      <SelectField name="school" options={[
        {value: 'University of Illinois'},
        {value: 'Other'}
      ]} />

      <p>Major</p>
      <SelectField name="major" options={[
        {value: 'Computer Science'},
        {value: 'Computer Engineering'},
        {value: 'Other Engineering'},
        {value: 'Business'},
        {value: 'Liberal Arts'},
        {value: 'Other'}
      ]} />

      <p>Graduation Year</p>
      <SelectField name="graduationYear" options={[
        {value: 2020},
        {value: 2021},
        {value: 2022},
        {value: 2023}
      ]} />

      <button type="button" onClick={this.back}>Back</button>
      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page3 = () => (
    <div>
      <p>Career Interests</p>
      <SelectField name="interests" multiple options={[
        {label: 'Internship', value: 'INTERNSHIP'},
        {label: 'Full-time', value: 'FULLTIME'}
      ]} />

      <button type="button" onClick={this.back}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
}

