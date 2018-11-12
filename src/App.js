import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      favorite_foods: []
    }
    this.getMyLocation = this.getMyLocation.bind(this)
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
        <Header />
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
