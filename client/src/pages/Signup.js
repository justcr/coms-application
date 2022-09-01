import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="body">
      <div className="logo"></div>
      <div className="signup-container">
        <h1>Sign up</h1>
        <form className="signup-form">
          Full name
          <input type="text" placeholder="First name, Last name" />
          <br />
          Email
          <input type="text" placeholder="Email" />
          <br />
          Password
          <input type="text" placeholder="Create password" />
          <br />
          <br />
          <h3>
            {" "}
            Already have an account?
            <a href="Login">Login here</a>
          </h3>
          <input type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
