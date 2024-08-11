import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    displayErrorMsg: false,
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      Cookies.set("jwt_token", "access_token", { expires: 2 });
      const { history } = this.props;
      history.replace("/");
    } else {
      this.setState({ displayErrorMsg: true });
    }
  };

  onChangeUserInput = (event) => {
    this.setState({ username: event.target.value, displayErrorMsg: false });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value, displayErrorMsg: false });
  };

  render() {
    const { username, password, displayErrorMsg } = this.state;
    return (
      <div className="login-page">
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <h1 className="login-heading">Login</h1>
          <div className="login-input-container">
            <label htmlFor="username">Username / Email</label>
            <input
              className="input-box"
              onChange={this.onChangeUserInput}
              value={username}
              type="text"
              id="username"
              placeholder="Enter Username / Email"
            />
          </div>
          <div className="login-input-container">
            <label htmlFor="password">Password</label>
            <input
              className="input-box"
              onChange={this.onChangePassword}
              value={password}
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
          {displayErrorMsg && (
            <p className="error-msg">*Please fill credentials</p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
