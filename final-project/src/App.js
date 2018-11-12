import React, { Component } from 'react';
import './App.css';
import { config } from './components/Config/Config'
import firedatabase from 'firebase/app';
import 'firebase/database';
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase"
import FavoriteFoods from './components/FavoriteFoods/FavoriteFoods';
import { Switch, Route, Link } from 'react-router-dom'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      favorite_foods: []
    }

    this.getMyLocation = this.getMyLocation.bind(this)
    this.app = firedatabase.initializeApp(config);
    this.database = this.app.database().ref().child('favorite_foods');
  }



  componentDidMount() {
    this.getMyLocation()
  }
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
        <h1>Dinner Decider</h1>
        <main>
          <Switch>
            <Route>

            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;
