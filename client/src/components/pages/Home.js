import React from "react";
import LoginForm from "../login/loginForm.js"

const Home = () =>
  <div>
    <h1>Please log</h1>
    <p>        Render log in here
        <LoginForm 
        _login={this._login}
		_googleSignin={this._googleSignin}
		/>
    </p>
  </div>;

export default Home;