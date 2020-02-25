import React from 'react';
import AceEditor from 'react-ace';
import emailjs from 'emailjs-com';
import './style.scss';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

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
      name: "",
      problem: "",
      codeValue: starterCode,
      changeSinceSubmit: true,
      successfulSubmit: true,
      statusMessage: "",
    }
  }

  onChange = event => {
    this.setState({ 
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  onEditorChange = newCode => {
    this.setState({
      ...this.state,
      changeSinceSubmit: true,
      codeValue: newCode,
    });
  }
  
  submit = () => {
    if (!this.state.changeSinceSubmit && this.state.successfulSubmit) {
      this.setState({
        ...this.state,
        statusMessage: "No changes since last submit",
      });

      return;
    }

    const params = {
      name: this.state.name,
      problem: this.state.problem,
      message_body: this.state.codeValue,
    }

    const templateId = process.env.REACT_APP_EMAIL_TEMPLATE;
    const userId = process.env.REACT_APP_EMAIL_USER;

    emailjs.send('gmail', templateId, params, userId)
      .then((result) => {
        this.setState({
          ...this.state,
          changeSinceSubmit: false,
          statusMessage: "Successful submission",
        });
      }, (error) => {
        this.setState({
          ...this.state,
          changeSinceSubmit: false,
          statusMessage: error,
        });
      });
  }

  render() {
    const { statusMessage, changeSinceSubmit, successfulSubmit, codeValue } = this.state;
    const displayStatus = !successfulSubmit || !changeSinceSubmit;

    return (
      <div>
        <h1>Code in the Dark!</h1>

        <div class="content">
          <AceEditor
            mode="html"
            theme="monokai"
            showGutter={true}
            highlightActiveLine={true}
            tabSize={2}
            value={codeValue}
            onChange={this.onEditorChange}
            setOptions={{
              showLineNumbers: true,
              useSoftTabs: true,
            }}
          />

          <div class="rules">
            <h3>Rules:</h3>
            <ol>
              <li>Do not edit this code until we tell you to</li>
              <li>Do not navigate away from this tab!</li>
              <li>Do not preview your HTML code</li>
            </ol>

            <h3>Tips:</h3>
            <ul>
              <li>Our logo can be found at "assets/logo.png"</li>
            </ul>

            <h3>Submission:</h3>
            <div className="submit">
              <p class={displayStatus ? "status" : "status inactive"}>
                {statusMessage}
              </p>
              <label for="name-input">Team Name:</label>
              <input type="text" id="name-input" name="name" onChange={this.onChange} />
              <label for="problem-input">Problem Number:</label>
              <input type="text" id="problem-input" name="problem" onChange={this.onChange} />
              <button type="button" onClick={this.submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
