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

    <style></style>
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

    const templateId = 'template_z0Z6Hki6';
    const userId = 'user_WBY9ARn5353jWW0nKOxH9';

    emailjs.send('gmail', templateId, params, userId)
      .then(() => {
        this.setState({
          changeSinceSubmit: false,
          statusMessage: '✅ Success! Your submission has been sent.',
        });
      }, error => {
        this.setState({
          changeSinceSubmit: false,
          statusMessage: `🚫 Error: ${error.text}`,
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
      <div className="Editor">
        <div className="title">
          <h1>CODE IN THE DARK</h1>
          <div>
            <h3>Sponsored by</h3>
            <img src={caterpillar} alt="Caterpillar logo" />
          </div>
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
            <h3>Rules</h3>
            <ul>
              <li>Wait until the timer starts to begin editing your code</li>
              <li>You are limited only to HTML/CSS (No libraries, Javascript, etc.)</li>
              <li>Do not leave this tab to access any external websites or resources</li>
              <li>Do not preview the result of your code!</li>
            </ul>

            <h3>Tips</h3>
            <ul>
              <li>Write your CSS inline, or inside the provided style tags</li>
              <li>The HackIllinois logo can be found at <b>assets/logo.png</b></li>
            </ul>

            <h3>Submit</h3>
            <div className="submit">
              <p>Team Name:</p>
              <input type="text" id="name-input" name="name" onChange={this.onChange} />
              <p>Problem Number:</p>
              <input type="text" id="problem-input" name="problem" onChange={this.onChange} />
              <button type="button" onClick={this.submit}>Submit</button>
              <p className={displayStatus ? 'status' : 'status inactive'}>
                {statusMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
