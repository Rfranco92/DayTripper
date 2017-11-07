import React from "react";
import SignupForm from "../login/SignUpForm.js"

const Create = () =>
  <div>
    <h3>Please Create a Username and Password. Password has to be at least 6 characters long.</h3>
    <p>
      <SignupForm />
    </p>
  </div>;

export default Create;