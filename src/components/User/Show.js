import React, { Component } from 'react';
import './User.css'
import { Link } from 'react-router-dom'
import Axios from 'axios';

const proxy = process.env.REACT_APP_PROXY

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food1: "",
      food2: "",
      food3: "",
      food4: "",
      food5: "",
      food6: "",
    }
  }

  componentDidMount() {
    this.props.setUser()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateFoods = e => {
    e.preventDefault();
    if (localStorage.token) {
      Axios
        .put(
          `${proxy}/users/${this.props.user.id}`, this.state,
          {
            headers: {
              authorization: "Bearer" + localStorage.token
            }
          }
        )
        .then(response => {
          localStorage.token = response.data.token
        })
        .then(_ => {
          this.props.setUser()
          this.setState({
            food1: "",
            food2: "",
            food3: "",
            food4: "",
            food5: "",
            food6: ""
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  deleteAccount = () => {
    if (localStorage.token) {
      Axios
        .delete(
          `${proxy}/users/${this.props.user.id}`, {
            headers: {
              authorization: "Bearer" + localStorage.token
            }
          })
        .then(deletedUser => {
          this.props.handleLogout();
        })
        .then(_ => {
          this.props.history.push('/');
        });
    }
  }


  render() {
    let { user } = this.props
    return (
      <div className="show-page">
        <div className="ShowImage">
          {/* user.username is undefined the first time, so nothing gets rendered. The second time, both are truthy so JS returns the second truthy, which is user.username.toUpperCase()  */}
          <h1 className="show-title">{user.username && "Welcome " + user.username.charAt(0).toUpperCase() + user.username.slice(1) + "!"}</h1>
          <form onSubmit={this.updateFoods} className="LoginForm2">
            <div className="foods2">
              <div className="foods--list2">
                <h1>Person 1's foods</h1>
                <label htmlFor="">Food 1</label>
                <input value={this.state.food1} className="foodInput" spellCheck="true" required name="food1" onChange={this.handleInput} placeholder={user.food1}></input>
                <label htmlFor="">Food 2</label>
                <input value={this.state.food2} className="foodInput" required name="food2" spellCheck="true" onChange={this.handleInput} placeholder={user.food2}></input>
                <label htmlFor="">Food 3</label>
                <input value={this.state.food3} className="foodInput" spellCheck="true" required name="food3" onChange={this.handleInput} placeholder={user.food3}></input>
              </div>
              <div className="foods--list2">
                <h1>Person 2's foods</h1>
                <label htmlFor="">Food 1</label>
                <input value={this.state.food4} className="foodInput" required name="food4" spellCheck="true" onChange={this.handleInput} placeholder={user.food4}></input>
                <label htmlFor="">Food 2</label>
                <input value={this.state.food5} className="foodInput" spellCheck="true" required name="food5" onChange={this.handleInput} placeholder={user.food5}></input>
                <label htmlFor="">Food 3</label>
                <input value={this.state.food6} className="foodInput" spellCheck="true" name="food6" onChange={this.handleInput} required placeholder={user.food6}></input>
              </div>
            </div>
            <div>
              <button type="submit" className="green-button save-button">Save foods</button>
              <span className="hide-mobile">or</span>
              <Link to="/ateball" className="green-button">Ateball me!</Link>
            </div>
            <button onClick={this.deleteAccount} className="red-button"></button>
          </form>

        </div>
      </div>
    );
  }
}

export default Show;