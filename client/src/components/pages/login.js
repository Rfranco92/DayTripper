import React, { Component } from "react";
import LoginForm from "../login/loginForm.js"
import axios from 'axios'


class Login extends Component  {

	constructor() {
		super()
		this.state = {
		}
		this._login = this._login.bind(this);
	}
	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
					window.location.reload();
				}
				else  {
					alert ("Oops, wrong username or password")
				}
			})
	}
	render() {
		return( 
  <div>
    <h1>Please log in using your username and password</h1>
    <p>     
        <LoginForm 
        _login={this._login}
		_googleSignin={this._googleSignin}
		/>
    </p>
  </div>
  )
	}
}	
export default Login;