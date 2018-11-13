import React, { Component } from 'react';
import axios from 'axios'
import decode from 'jwt-decode'
import './User.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    loginError: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleLogIn = () => {
    axios.post('http://localhost:3001//users/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(decode(response.data.token))
        localStorage.token = response.data.token
        this.setState({
          isLoggedIn: true
        });
      })

      .catch(err => this.setState({
        loginError: "Incorrect username/password"
      }))
  }



  render() {
    return (
      <div className="accountForms">

        <form>
          <h3>Login</h3>
          <p>Please enter your username and password</p>
          <input onChange={this.handleChange} name="username" placeholder="Username"></input>
          <input onChange={this.handleChange} name="password" placeholder="Password"></input>
          <button type="submit" onClick={this.handleLogIn}>Login</button>
        </form>
      </div >
    );
  }
}

export default Login;