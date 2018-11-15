import React, { Component } from 'react';
import './User.css'
import {Link} from 'react-router-dom'

class Show extends Component {

    render() {
      let { user } = this.props
        return (
            <div className="show-page">
                {/* user.username is undefined the first time, so nothing gets rendered. The second time, both are truthy so JS returns the second truthy, which is user.username.toUpperCase()  */}
                <h1 className="show-title">Hey {user.username && user.username.toUpperCase()}</h1>
                 <form onSubmit={this.handleSubmit} class="show-form">
                        <div className='foods'>
                            <div className="person1-foods">
                                <p>Person One's favorite foods</p>
                                <input value={user.food1} onChange={this.handleInput} name="food1" placeholder="Favorite Food 1"></input>
                                <input value={user.food2} onChange={this.handleInput} name="food2" placeholder="Favorite Food 2"></input>
                                <input value={user.food3} onChange={this.handleInput} name="food3" placeholder="Favorite Food 3"></input>
                            </div>
                            <div className="person2-foods">
                                <p>Person Two's favorite foods</p>
                                <input value={user.food4} onChange={this.handleInput} name="food4" placeholder="Favorite Food 1"></input>
                                <input value={user.food5} onChange={this.handleInput} name="food5" placeholder="Favorite Food 2"></input>
                                <input value={user.food6} onChange={this.handleInput} name="food6" placeholder="Favorite Food 3"></input>
                            </div>
                        </div>
                    <div className="show-button-container">
                      <button className="btn">Save</button>
                      <Link className="random-diner"to="/ateball">Random Diner</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Show;