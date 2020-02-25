import React from 'react';
import AceEditor from 'react-ace';
import emailjs from 'emailjs-com';
import './style.scss';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

export default class Editor extends React.Component {
  render() {
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
            defaultValue={starterCode}
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

            <h3>Submission:</h3>
            <p>Name:</p>
            <p>Problem Number:</p>
            <p>Submit</p>
          </div>
        </div>
      </div>
    );
  }
}
