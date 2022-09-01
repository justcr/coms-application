import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="body">
      <div className="logo"></div>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          Email
          <input type="email" placeholder="Email" required />
          <br />
          Password
          <input type="password" placeholder="Password" required />
          <br />
          <h3>
            {" "}
            Don't have an account yet?
            <a href="Signup">Sign up here</a>
          </h3>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
