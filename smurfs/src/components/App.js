import React, { Component } from "react";
import Smurfs from './smurfs'
import SmurfForm from './Forms'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
