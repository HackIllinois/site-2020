import React from 'react';

import { apply, authenticate, getApplication, getRoles, isAuthenticated } from 'API';
import Loading from 'components/Loading';

export default class Apply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      application: {},
      editing: false,
      loading: true
    };

    this.fill = this.fill.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    if (!isAuthenticated()) {
      authenticate('github', '/apply');
      return;
    }

    getRoles().then(roles => {
      if (roles.roles.includes('Applicant')) {
        getApplication().then(app => {
          this.setState({
            application: app,
            editing: true,
            loading: false
          });
        }).catch(err => {
          alert('Failed to load application.');
        });
      } else {
        this.setState({loading: false});
      }
    }).catch(err => {
      console.log(err);
    });
  }

  fill() {
    let randomApp = FAKE_APPLICATION;
    randomApp.age = Math.floor(Math.random() * 20);
    this.setState({application: randomApp});
  }

  submit() {
    this.setState({loading: true});

    let method = this.state.editing ? 'PUT' : 'POST';

    apply(method, this.state.application).then(app => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({loading: false});
      alert('Failed to submit.');
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    let app = JSON.stringify(this.state.application, null, '\t');
    return (
      <div>
        <p style={{whiteSpace: "pre-wrap"}}>{app}</p>
        <button onClick={this.fill}>Fill Application</button>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

const FAKE_APPLICATION = {
  firstName: "HackIllinois",
  lastName: "Dev",
  diet: [],
  age: 7,
  gender: "OTHER",
  shirtSize: "L",

  email: "systems@hackillinois.org",
  phone: "0000000000",

  school: "University of Illinois Urbana - Champaign",
  major: "Computer Science",
  graduationYear: 2020,
  transportation: "NONE",

  github: "hackillinois-dev",
  linkedin: "linkedin.com/in/hackillinois-dev",
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

  extraInfo: "",
};
