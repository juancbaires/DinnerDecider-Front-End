import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import axios from 'axios'
import Login from './components/User/Login'
import Signup from "./components/User/Signup"
import Splash from './components/Splash/Splash'
import AteBall from './components/AteBall/Ateball'
import jwtDecode from 'jwt-decode'
import Show from './components/User/Show';

let googleKey = process.env.REACT_APP_GOOGLEKEY
let proxy = process.env.REACT_APP_PROXY

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      zip: 22044,
      isLoggedIn: false,
      loginError: '',
      signupError: '',
      user: {
        username: '',
        id: '',
        food1: '',
        food2: '',
        food3: '',
        food4: '',
        food5: '',
        food6: '',
      },
      updateError: ''
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  

  componentDidMount() {
    this.getMyLocation()
    this.setUser()
  }

  setUser = () => {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
        loginError: '',
        user: jwtDecode(localStorage.token)
      })
    }
  }

  newFoods = (obj) => {
    this.setState({
      user: obj
    })
  }

  handleLogIn = (existingUser) => {
    axios.post(`${proxy}/users/login`, {
      username: existingUser.username,
      password: existingUser.password
    })
      .then(response => {
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
      .post(`${proxy}/users/signup`, {
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
        }, () => {
          this.changeZipBasedOnCoordinates()
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  zipChange = (zip) => {
    this.setState({
      zip: zip
    })
  }

  changeZipBasedOnCoordinates = () => {
    if (this.state.longitude && this.state.latitude) {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${googleKey}`).then(response => {
        //set zip to our lat and long results
        if (response.data.results[0].address_components[6].long_name) {
          this.setState({ zip: response.data.results[0].address_components[6].long_name })
        }
      })
    }
  }

  render() {
    console.log(this.state.user)
    console.log('token!')
    if (localStorage.token) {
      console.log(jwtDecode(localStorage.token))

    }
    return (
      <div>
        <Header zipChange={this.zipChange} zip={this.state.zip} handleLogout={this.handleLogout} name={this.state.user.username} isLoggedIn={this.state.isLoggedIn} />
        <main>
          <Switch>
            <Route path="/user/:username" render={() => <Show handleLogout={this.handleLogout} setUser={this.setUser} newFoods={this.newFoods} {...this.props}{...this.state} />}></Route>
            <Route path="/ateball" render={() => <AteBall zip={this.state.zip} latitude={this.state.latitude} longitude={this.state.longitude} user={this.state.user} ateBallMain={this.ateBallMain}></AteBall>}></Route>
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
