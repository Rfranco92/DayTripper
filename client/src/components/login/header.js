import React from 'react'
import header from './header'
// TODO - add proptypes

const Header = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Welcome to Day Tripper!</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome to Day Tripper, {props.user.firstName}!
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome to Day Tripper, {props.user.local.username}!
			</p>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header
