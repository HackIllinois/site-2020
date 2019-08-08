import { Form, Formik } from 'formik';
import React from 'react';

import { apply, authenticate, getApplication, getRoles, isAuthenticated } from 'API';
import { Page1, Page2 } from 'components/Apply/Pages';
import Loading from 'components/Loading';


const PAGES = [<Page1 />, <Page2 />];

const EMPTY_APP = {
  firstName: '',
  shirtSize: '',

  lastName: 'Dev',
  diet: [],
  age: 7,
  gender: 'OTHER',

  email: 'dev@hackillinois.org',
  phone: '0000000000',

  school: 'University of Illinois Urbana - Champaign',
  major: 'Computer Science',
  graduationYear: 2020,
  transportation: 'NONE',

  github: 'hackillinois-dev',
  linkedin: 'linkedin.com/in/hackillinois-dev',
  skills: [],
  interests: [],

  priorAttendance: true,
  isBeginner: false,
  isOSContributor: true,
  beginnerInfo: {
    versionControl: 5,
    pullRequest: 5,
    yearsExperience: 7,
    technicalSkills: []
  },
  teamMembers: [],

  extraInfo: ''
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

    let method = this.state.isEditing ? 'PUT' : 'POST';

    apply(method, values).then(app => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({isLoading: false});
      alert('Failed to submit.');
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    let isFirstPage = this.state.page === 0;
    let isLastPage = this.state.page === PAGES.length - 1;

    let backButton = <button type="button" onClick={this.back}>Back</button>
    let nextButton = <button type="button" onClick={this.next}>Next</button>
    let submitButton = <button type="submit">Submit</button>

    return (
      <Formik
        initialValues={this.state.application}
        enableReinitialize
        onSubmit={this.submit}
        render={() => (
          <Form>
            {PAGES[this.state.page]}
            {!isFirstPage && backButton}
            {!isLastPage && nextButton}
            {isLastPage && submitButton}
          </Form>
        )}
      />
    );
  }
}

