import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Day Tripper!</h1>
        </header>
        <Router>
          <div>
            <Navpills />
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
          </div>

        </Router>


      </div>
    );
  }
}

export default App;
