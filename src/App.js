import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import parse from 'html-react-parser';

//marked.js init
var marked = require('marked');
marked.setOptions({
    breaks: true,
})

//react-markdown init
// const ReactMarkdown = require('react-markdown')
// const input = '# This is a header from react-markdown.\n\nAnd this is a paragraph'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {value:  '# h1\n## h2\n[Link](https://www.btburke.com)\n\n`let this = some.code();`\n' +
                          '\n```\nlet this = a.code.block();\nreturn(this); \n```\n\n' +
                          '1. This\n2. Is\n3. A\n4. List\n why does markdown do this.\n ### Huh?\n' +
                          '>This is what a blockquote looks like\n' +
                          '>What do you think of that? \n\n' +
                          '#### And now, an image: ' +
                          '![A Kitten](https://www.pets4homes.co.uk/images/articles/1646/large/kitten-emergencies-signs-to-look-out-for-537479947ec1c.jpg "Kitty")\n\n' +
                          '**Finally, bold text.**'
                        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    let renderedMd = marked(this.state.value)
    alert('Parsed MD:  ' + renderedMd);
    event.preventDefault();
  }

  render() {
    let markDownText = marked('# Marked in browser\n\nRendered by **marked**.');

    return (
      <div className="App row">
        <header>
          <h1 className="header">Markdown Previewer</h1>
        </header>
        <body>
          <textarea className="input-section" id="editor" value={this.state.value} onChange={this.handleChange}
          />
          <div id="preview" className="preview-section">
          {/*<ReactMarkdown className="preview-section" source={this.state.value} /> */}
          {parse(marked(this.state.value))}
          </div>
        </body>
      <ReactFCCtest />
      </div>
    );
  }
}

export default App;
