import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="loginFormContainer">
      <form className="loginForm">
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <div className="loginBttnContainer">
          <button className="loginBttn">Log In</button>
          <p>
            <a href="">Forget Password</a> Don't have an account?
            <a href="">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
