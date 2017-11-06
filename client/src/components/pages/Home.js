<<<<<<< HEAD
import React from "react";
import LoginForm from "../Login/loginForm.js"
=======
import React, { Component } from "react";
import LoginForm from "../login/loginForm.js"
import axios from 'axios'
>>>>>>> ee8b6bc36ae3a06b0d9e3d0ee6cb080c2122367b


class Home extends Component  {

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
			})
	}
	render() {
		return( 
  <div>
<<<<<<< HEAD
    <h1>Please log In</h1>
=======
    <h1>Please log in using your username and password</h1>
    <p>     
>>>>>>> ee8b6bc36ae3a06b0d9e3d0ee6cb080c2122367b
        <LoginForm 
        _login={this._login}
		_googleSignin={this._googleSignin}
		/>
<<<<<<< HEAD
  </div>;

=======
    </p>
  </div>
  )
	}
}	
>>>>>>> ee8b6bc36ae3a06b0d9e3d0ee6cb080c2122367b
export default Home;