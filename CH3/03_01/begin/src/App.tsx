import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component<any> {
  componentWillMount() {
    console.log('Almost there...');
  }

  componentDidMount() {
    console.log('Finally...hello!');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message  message='This is a simple message'/>
        </header>
      </div>
    );
  }
}

export default App;
