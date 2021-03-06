import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./SignUpForm.css"

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		
			 let value = event.target.value;
    		const name = event.target.name;

    			if (name === "password") {
      			value = value.substring(0, 15);
      			}
      		
      		this.setState({
			[name]: value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		 if (!this.state.username) {
      	 alert("Fill out your username");
    	} else if (this.state.password.length < 6) {
      	alert(
        `Choose a more secure password ${this.state.username}`
      	);
    	} 
    	else{
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					this.setState({
						redirectTo: '/login'
					})
				} else {
					alert(response.data.error)
				}
			})
		 }	
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
