import React, { Component } from 'react';
import './App.css';
import UserOutput from './pages/UserOutput/UserOutput';
import UserInput from './pages/UserInput/UserInput';

class App extends Component {
  state = {
    username: [
      'Henrique',
      'Gessyca'
    ]
  }

  usernameChangedHandler = (e) => {
    this.setState({
      username: [
        e.target.value,
        'Gessyca'
      ]
    });        
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} currentName={this.state.username[0]}/>
        <UserOutput userName={this.state.username[0]} />
        <UserOutput userName={this.state.username[1]} />
        <UserOutput userName='Lisa' />
      </div>
    );
  }
}

export default App;
