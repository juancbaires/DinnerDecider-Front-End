import React, { Component } from 'react'
import './Splash.css'
import { Button } from 'react-bootstrap'

class Splash extends Component {
  state = {
    ballClass: 'eight-ball lower',
    triangleClass: 'triangle',
    clicked: false,
    website:
      'https://www.google.com/maps/place/Olive+Garden+Italian+Restaurant/@38.8471223,-77.1210922,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7b3f16f751631:0x954d31e54e9b8a69!8m2!3d38.8471223!4d-77.1189035'
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

  showTriangle = e => {
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
              Olive Garden
            </a>
          </div>
        </div>
      </ul>
    )
  }
}

export default Splash
