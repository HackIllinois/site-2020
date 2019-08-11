import { Field, Form, Formik } from 'formik';
import React from 'react';

import { apply, authenticate, getApplication, getRoles, isAuthenticated } from 'API';
import MultipleSelectField from 'components/MultipleSelectField';
import Loading from 'components/Loading';


const EMPTY_APP = {
  firstName: '',
  lastName: '',
  gender: 'NOANSWER',
  shirtSize: '',
  diet: [],

  school: '',
  major: '',
  graduationYear: 2020,

  interests: [],

  age: 7,
  beginnerInfo: {
    pullRequest: 5,
    technicalSkills: [],
    versionControl: 5,
    yearsExperience: 7
  },
  extraInfo: '',
  isBeginner: false,
  isOSContributor: true,
  linkedin: 'linkedin.com/in/hackillinois-dev',
  phone: '0000000000',
  priorAttendance: true,
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
            <pre>{JSON.stringify(props.values, null, 2)}</pre>
          </Form>
        )}
      />
    );
  }

  page1 = props => (
    <div>
      <p>First Name</p>
      <Field name="firstName" placeholder="Brian" />

      <p>Last Name</p>
      <Field name="lastName" placeholder="Strauch" />

      <p>Gender</p>
      <Field name="gender" component="select">
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="NONBINARY">Non-Binary</option>
      </Field>

      <p>Shirt Size</p>
      <Field name="shirtSize" component="select">
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Large</option>
      </Field>

      <p>Dietary Restrictions</p>
      <MultipleSelectField name="diet">
        <option value="NOGLUTEN">Gluten Free</option>
        <option value="NOPEANUT">Peanut Allergy</option>
        <option value="VEGAN">Vegan</option>
        <option value="VEGETARIAN">Vegetarian</option>
      </MultipleSelectField>

      <br />
      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page2 = () => (
    <div>
      <p>School</p>
      <Field name="school" component="select">
        <option>University of Illinois</option>
        <option>Somewhere not as good</option>
      </Field>

      <p>Major</p>
      <Field name="major" component="select">
        <option>Computer Science</option>
        <option>Something not as good</option>
      </Field>

      <br />
      <button type="button" onClick={this.back}>Back</button>
      <button type="button" onClick={this.next}>Next</button>
    </div>
  );

  page3 = props => (
    <div>
      <p>Career Interests</p>
      <MultipleSelectField name="interests">
        <option value="INTERNSHIP">Internship</option>
        <option value="FULLTIME">Full-time</option>
      </MultipleSelectField>

      <br />
      <button type="button" onClick={this.back}>Back</button>
      <button type="submit">Submit</button>
    </div>
  );
}

