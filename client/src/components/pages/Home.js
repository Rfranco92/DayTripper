import React from "react";
import LoginForm from "../Login/loginForm.js"

const Home = () =>
  <div>
    <h1>Please log In</h1>
        <LoginForm 
        _login={this._login}
		_googleSignin={this._googleSignin}
		/>
  </div>;

export default Home;