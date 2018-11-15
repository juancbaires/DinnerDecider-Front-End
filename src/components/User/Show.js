import React, { Component } from 'react';
import './User.css'

class Show extends Component {

    render() {
        return (
            <div className="show-page">
                <h1 className="show-title">Welcome {this.props.user.username}</h1>

                 <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className='account-container'>
                            <div className="account--body">
                                <p>Person One's favorite foods</p>
                                <input onChange={this.handleInput} name="food1" placeholder="Favorite Food 1"></input>
                                <input onChange={this.handleInput} name="food2" placeholder="Favorite Food 2"></input>
                                <input onChange={this.handleInput} name="food3" placeholder="Favorite Food 3"></input>
                            </div>
                            <div className="account--body">
                                <p>Person Two's favorite foods</p>
                                <input onChange={this.handleInput} name="food4" placeholder="Favorite Food 1"></input>
                                <input onChange={this.handleInput} name="food5" placeholder="Favorite Food 2"></input>
                                <input onChange={this.handleInput} name="food6" placeholder="Favorite Food 3"></input>
                            </div>
                        </div>
                    </div>
                    <div className="show-button-container">
                      <button className="btn">Save</button>
                      <a href="/ateball">Random Diner</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Show;