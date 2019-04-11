import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import parse from 'html-react-parser';

//marked.js init
var marked = require('marked');

//react-markdown init
const ReactMarkdown = require('react-markdown')
const input = '# This is a header from react-markdown.\n\nAnd this is a paragraph'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {value: '### Hello!'};

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
        <body>
          <textarea className="input-section" value={this.state.value} onChange={this.handleChange}
          />
        <ReactMarkdown className="preview-section" source={this.state.value} />
        </body>
      {/*  <ReactFCCtest /> */}
      </div>
    );
  }
}

export default App;
