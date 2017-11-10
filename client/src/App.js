import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Login from "./components/pages/login";
import Create from "./components/pages/Create";
import Travel from "./components/pages/Travel";
import Details from "./components/pages/Details";
import Trips from "./components/pages/Trips";
import Home from "./components/pages/Home";
import Maps from "./components/pages/Maps";
import Streetview from "./components/pages/Streetview";
import Header from "./components/login/header";
import axios from "axios";


const google = window.google

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null, 
      redirectTo: null
    }
    this._logout = this._logout.bind(this)
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
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
          user: null,
          redirectTo: '/',
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
      

        <header className="App-header">
        
        <div className="col-lg-1">
        <a href="/"><img src="https://i.imgur.com/UGEu53l.jpg" alt="daytripper" className="logo" border="0" height="75">
        </img></a>

        </div>
        <div className="col-lg-11">
        <h1 className="App-title"><Header user={this.state.user} /></h1>
        </div>
        </header>




        <Router>
          <div>
            <Navpills user={this.state.user}  _logout={this._logout} loggedIn={this.state.loggedIn} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route path="/trips/:username" component={Trips} />
            <Route path="/maps/:_id" component={Maps} />
            <Route path="/streetview/:id" component={Streetview} />
            <Route exact path="/travel" render = {(props) =>
              <Travel user={this.state.user} {...props} />
            } />

          </div>

        </Router>

      </div>
    );
  }
}

export default App;
