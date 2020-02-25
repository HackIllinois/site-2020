import React from 'react';
import AceEditor from 'react-ace';
import emailjs from 'emailjs-com';
import caterpillar from 'assets/sponsors/caterpillar_white.svg';
import './style.scss';

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    const starterCode = `<html>
  <head>
    <title>Code in the Dark</title>

    <style>

    </style>
  </head>

  <body>

  </body>
</html>
`;

    this.state = {
      name: '',
      problem: '',
      codeValue: starterCode,
      changeSinceSubmit: true,
      successfulSubmit: true,
      statusMessage: '',
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onEditorChange = newCode => {
    this.setState({
      changeSinceSubmit: true,
      codeValue: newCode,
    });
  }

  submit = () => {
    if (!this.state.changeSinceSubmit && this.state.successfulSubmit) {
      this.setState({
        statusMessage: 'No changes since last submit',
      });

      return;
    }

    const params = {
      name: this.state.name,
      problem: this.state.problem,
      message_body: this.state.codeValue,
    };

    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE;
    const userId = process.env.REACT_APP_EMAIL_USER;

    emailjs.send('gmail', templateId, params, userId)
      .then(() => {
        this.setState({
          changeSinceSubmit: false,
          statusMessage: 'Successful submission',
        });
      }, error => {
        this.setState({
          changeSinceSubmit: false,
          statusMessage: error,
        });
      });
  }

  render() {
    const {
      statusMessage,
      changeSinceSubmit,
      successfulSubmit,
      codeValue,
    } = this.state;

    const displayStatus = !successfulSubmit || !changeSinceSubmit;

    return (
      <div>
        <h1>Code in the Dark</h1>
        <div className="title">
          <h3>Sponsored by:</h3>
          <img src={caterpillar} alt="Caterpillar logo" />
        </div>

        <div className="content">
          <AceEditor
            mode="html"
            theme="monokai"
            showGutter
            highlightActiveLine
            tabSize={2}
            value={codeValue}
            onChange={this.onEditorChange}
            setOptions={{
              showLineNumbers: true,
              useSoftTabs: true,
            }}
          />

          <div className="rules">
            <h3>Rules:</h3>
            <ol>
              <li>Do not edit this code until we tell you to</li>
              <li>Do not navigate away from this tab!</li>
              <li>Do not preview your HTML code</li>
            </ol>

            <h3>Tips:</h3>
            <ul>
              <li>Our logo can be found at &quot;assets/logo.png&quot;</li>
            </ul>

            <h3>Submission:</h3>
            <div className="submit">
              <p className={displayStatus ? 'status' : 'status inactive'}>
                {statusMessage}
              </p>
              <p>Team Name:</p>
              <input type="text" id="name-input" name="name" onChange={this.onChange} />
              <p>Problem Number:</p>
              <input type="text" id="problem-input" name="problem" onChange={this.onChange} />
              <button type="button" onClick={this.submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
