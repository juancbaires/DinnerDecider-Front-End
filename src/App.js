import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import axios from 'axios'
import decode from "jwt-decode"
import Login from './components/User/Login'
import Signup from "./components/User/Signup"
import Splash from './components/Splash/Splash'
import AteBall from './components/AteBall/Ateball'
import jwtDecode from 'jwt-decode'
import Show from './components/User/Show';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      city: '',
      isLoggedIn: false,
      loginError: '',
      signupError: '',
      user: {}
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
        loginError: '',
        user: jwtDecode(localStorage.token)
      })
    }
  }


  handleLogIn = (existingUser) => {
    axios.post(`/users/login`, {
      username: existingUser.username,
      password: existingUser.password
    })
      .then(response => {
        console.log(decode(response.data.token))
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true, loginError: '' });
        this.props.history.push('/');
      })

      .catch(err => this.setState({
        loginError: 'Wrong username/password'
      }))
  }
  handleLogout = () => {
    this.setState({
      username: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
    this.props.history.push('/')
  }

  handleSignup = (newUser) => {
    //axios posts the new user to our backend using the UserInput paremeter
    axios
      .post(`/users/signup`, {
        username: newUser.username,
        password: newUser.password,
        food1: newUser.food1,
        food2: newUser.food2,
        food3: newUser.food3,
        food4: newUser.food4,
        food5: newUser.food5,
        food6: newUser.food6
      })
      //our token is stored and loggedIn is changed to true
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true, signupError: '' });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          signupError: 'Username taken.'
        });
      });
  };

  // got this code from stackoverflow After successfully implementing a react geolocation component but then
  // I switched to this method because it plays better with other components and it sets state
  // so lat and long can be passed down as props!
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() {
    return (
      <div>
        <Header handleLogout={this.handleLogout} name={this.state.user.username} isLoggedIn={this.state.isLoggedIn} />
        <main>
          <Switch>
            <Route path="/user/:username" render={() => <Show {...this.props}{...this.state} />}></Route>
            <Route path="/ateball" render={() => <AteBall latitude={this.state.latitude} longitude={this.state.longitude} user={this.state.user} ateBallMain={this.ateBallMain}></AteBall>}></Route>
            <Route path="/signup" render={() => <Signup handleSignup={this.handleSignup}></Signup>}></Route>
            <Route path="/login" render={() => <Login handleLogIn={this.handleLogIn}></Login>}></Route>
            <Route path="/" render={() => <Splash latitude={this.state.latitude} longitude={this.state.longitude}></Splash>}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}


export default withRouter(App);
