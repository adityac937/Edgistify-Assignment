import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <div class="containerform">
        <h1> login </h1>
        <div class="form-input">
          <input type="e-mail" id="username" name="email" maxlength="16" />
          <label for="username">
            <span> E - mail </span>
          </label>
        </div>
        <div class="form-input">
          <input name="password" type="password" id="password" />
          <label for="password">
            <span> Password </span>
          </label>
        </div>
        <Link to="/posts">
          <button> Login </button>
        </Link>
      </div>
    );
  }
}
export default Login;
