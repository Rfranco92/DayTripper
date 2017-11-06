import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Login";
import Create from "./components/pages/Create"
import Travel from "./components/pages/Travel"
import Details from "./components/pages/Details"
import Header from "./components/login/header"
import axios from "axios"



class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        console.log('THERE IS NO USER')
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Day Tripper!</h1>
        </header>
        <Router>
          <div>
            <Navpills  _logout={this._logout} loggedIn={this.state.loggedIn} />
            <Header user={this.state.user} />       
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={Create} />
            <Route path="/travel" component={Travel} />
          </div>

        </Router>


      </div>
    );
  }
}

export default App;