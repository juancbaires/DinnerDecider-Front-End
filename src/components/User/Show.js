import React, { Component } from 'react';
import './User.css'
import { Link } from 'react-router-dom'
import Axios from 'axios';

const proxy = process.env.REACT_APP_PROXY

class Show extends Component {
    state = {
        food1: "",
        food2: "",
        food3: "",
        food4: "",
        food5: "",
        food6: "",
    }

    handleInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = () => {
      Axios.put(`${proxy}/${this.props.user.id}`)
    }


    render() {
        let { user } = this.props
        return (
            <div className="show-page">
                <div className="ShowImage">
                    {/* user.username is undefined the first time, so nothing gets rendered. The second time, both are truthy so JS returns the second truthy, which is user.username.toUpperCase()  */}
                    <h1 className="show-title">{user.username && "Welcome " + user.username.charAt(0).toUpperCase() + user.username.slice(1)}{"!"}</h1>
                    <form onSubmit={this.handleSubmit} className="LoginForm2">
                        <div className="foods2">
                            <div className="foods--list2">
                                <h1>Person 1's foods</h1>
                                <label htmlFor="">Food 1</label>
                                <input className="foodInput" spellCheck="true" required name="food1" onChange={this.handleInput} placeholder={user.food1}></input>
                                <label htmlFor="">Food 2</label>
                                <input className="foodInput" required name="food2" spellCheck="true" onChange={this.handleInput} placeholder={user.food2}></input>
                                <label htmlFor="">Food 3</label>
                                <input className="foodInput" spellCheck="true" required name="food3" onChange={this.handleInput} placeholder={user.food3}></input>
                            </div>
                            <div className="foods--list2">
                                <h1>Person 2's foods</h1>
                                <label htmlFor="">Food 1</label>
                                <input className="foodInput" required name="food4" spellCheck="true" onChange={this.handleInput} placeholder={user.food4}></input>
                                <label htmlFor="">Food 2</label>
                                <input className="foodInput" spellCheck="true" required name="food5" onChange={this.handleInput} placeholder={user.food5}></input>
                                <label htmlFor="">Food 3</label>
                                <input className="foodInput" spellCheck="true" name="food6" onChange={this.handleInput} required placeholder={user.food6}></input>
                            </div>
                        </div>
                        <button type="submit" className="loginButton">Save Foods</button>
                        <span>or</span>
                        <Link to="/ateball" className="loginButton">Ateball me!</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Show;