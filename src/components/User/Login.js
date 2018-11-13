import React, { Component } from 'react';

import './User.css'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogIn(this.state)
  }

  render() {
    return (
      <div className="accountForms">
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <p>Please enter your username and password</p>
          <input onChange={this.handleChange} name="username" placeholder="Username"></input>
          <input onChange={this.handleChange} type="password" name="password" placeholder="Password"></input>
          <button>Login</button>
        </form>
      </div >
    );
  }
}

export default Login;