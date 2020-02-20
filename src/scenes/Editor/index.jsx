import React from 'react';
import AceEditor from 'react-ace';
import './style.scss';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";

export default class Editor extends React.Component {
  render() {
    return (
      <div>
        <AceEditor
          mode="html"
          theme="monokai"
          showGutter={true}
          highlightActiveLine={true}
          tabSize={2}
          setOptions={{
            showLineNumbers: true,
            useSoftTabs: true,
            fontFamily: 'monospace',
          }}
        />
      </div>
    );
  }
}
