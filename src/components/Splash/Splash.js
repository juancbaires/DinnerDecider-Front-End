import React, { Component } from 'react'
import './Splash.css'
import { Button } from 'react-bootstrap'
import Axios from 'axios';

const zomato = process.env.REACT_APP_ZOMATOKEY

class Splash extends Component {
  state = {
    ballClass: 'eight-ball lower',
    triangleClass: 'triangle',
    randomPick: {},
    clicked: false,
    website:
      'https://www.google.com/maps/search/?api=1&query='
  }

  riseBall = () => {
    if (!this.state.clicked) {
      this.setState({
        ballClass: 'eight-ball rise'
      })
    } else {
      this.setState({
        ballClass: 'eight-ball rise shake'
      })
    }
  }

  hideBall = () => {
    if (!this.state.clicked) {
      this.setState({
        ballClass: 'eight-ball lower'
      })
    } else {
      this.setState({
        ballClass: 'eight-ball rise shake'
      })
    }
  }

  randomRestaurant = () => {
    Axios.get(`https://developers.zomato.com/api/v2.1/search?lat=${this.props.latitude}&lon=${this.props.longitude}&radius=8000`, {
      headers: {
        "user-key": zomato
      }
    }).then(results => {
      console.log(results)
      this.setState({
        randomPick: results.data.restaurants[Math.floor(Math.random() * results.data.restaurants.length)].restaurant
      })
    }).finally(_ => {
      this.setState({
        website: this.state.website + this.state.randomPick.location.address
      })
    })
  }

  showTriangle = e => {
    this.randomRestaurant()
    e.preventDefault()
    this.setState({
      triangleClass: 'triangle triangle-show',
      ballClass: 'eight-ball rise shake',
      clicked: true
    })
  }

  render() {
    return (
      <ul className="slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
        <div className="hero-text">
          <h1>Ate-Ball</h1>
          <Button
            bsStyle="success"
            onMouseEnter={this.riseBall}
            onMouseLeave={this.hideBall}
            onClick={this.showTriangle}
            className="splash-button"
          >
            Random Diner
          </Button>
        </div>
        <div className={this.state.ballClass}>
          <div className={this.state.triangleClass}>
            <a
              href={this.state.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.state.randomPick.name}<br></br>
            </a>
          </div>
        </div>
      </ul>
    )
  }
}

export default Splash
