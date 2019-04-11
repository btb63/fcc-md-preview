import React, { Component } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import parse from 'html-react-parser';

//marked.js init
var marked = require('marked');
marked.setOptions({
    breaks: true,
})

class App extends Component {

  constructor(props){
    super(props);
    this.state = {value:  '# h1\n## h2\n[Link](https://www.btburke.com)\n\n`let this = some.code();`\n' +
                          '\n```\nlet this = a.code.block();\nreturn(this); \n```\n\n' +
                          '1. This\n2. Is\n3. A\n4. List\n why does markdown do this.\n ### Huh?\n' +
                          '>This is what a blockquote looks like\n' +
                          '>What do you think of that? \n\n' +
                          '#### And now, an image: \n' +
                          '![A Spriggan!](https://www.btburke.com/spriggan.png "Don\'t Drop it!")\n\n' +
                          '**Finally, bold text.**'
                        };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Markdown Previewer</h1>
        </header>
        <body>
          <textarea className="input-section" id="editor" value={this.state.value} onChange={this.handleChange}
          />
          <div id="preview" className="preview-section">
          {parse(marked(this.state.value))}
          </div>
        </body>
      <ReactFCCtest />
      </div>
    );
  }
}

export default App;
