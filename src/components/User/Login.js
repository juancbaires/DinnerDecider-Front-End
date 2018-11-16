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
      <div className="accountLogin">
        <div className='loginImage'></div>
        <div className="sideForm">
          <form onSubmit={this.handleSubmit} className="LoginForm">
            <h1>Login</h1>
            <p className="warning">{this.props.loginError}</p>
            <div className="loginForm--head">
              <label htmlFor="">Username</label>
              <input name="username" onChange={this.handleChange} placeholder="Username"></input>
              <label htmlFor="">Password</label>
              <input name="password" onChange={this.handleChange} type="password" placeholder="Password"></input>
            </div>
            <button type="submit" className="green-button">Login</button>
          </form>
        </div>
      </div >
    );
  }
}

export default Login;