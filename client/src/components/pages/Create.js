import React from "react";
import SignupForm from "../login/SignUpForm.js"
import FooterBar from "../../components/FooterBar";
import "./Create.css"

const Create = () =>
  <div className="Create">
    <h3>Please Create a Username and Password. Password has to be at least 6 characters long.</h3>
   
      <SignupForm />
      <FooterBar />
   
  </div>;

export default Create;