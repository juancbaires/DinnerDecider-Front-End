import React, { Component } from 'react'
import './Splash.css'
import { Button } from 'react-bootstrap'

class Splash extends Component {
  state = {
    ballClass: 'eight-ball lower',
    triangleClass: 'triangle'
  }

  riseBall = () => {
    this.setState({
      ballClass: 'eight-ball rise'
    })
  }

  hideBall = () => {
    this.setState({
      ballClass: 'eight-ball lower'
    })
  }

  showTriangle = e => {
    e.preventDefault()
    this.setState({
      triangleClass: 'triangle triangle-show',
      ballClass: 'eight-ball rise'
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
          <h1>Dinner Decider</h1>
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
            <span>Olive Garden</span>
          </div>
        </div>
      </ul>
    )
  }
}

export default Splash
