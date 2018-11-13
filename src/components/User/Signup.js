import React, { Component } from 'react';

class Signup extends Component {
    state = {
        username: '',
        password: '',
        food1: '',
        food2: '',
        food3: '',
        food4: '',
        food5: '',
        food6: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (

            <div className="accountForms accountForms--Signup">
                <h3>Signup</h3>
                <p>Create username and password</p>
                <form>
                    <div>
                        <div className="account--head">
                            <input onChange={this.handleInput} name="username" placeholder="Username"></input>
                            <input onChange={this.handleInput} name="password" placeholder="Password"></input>
                        </div>
                        <div className='account-container'>
                            <div className="account--body">
                                <p>Spouse one's favorite foods</p>
                                <input onChange={this.handleInput} name="food1" placeholder="Favorite Food 1"></input>
                                <input onChange={this.handleInput} name="food2" placeholder="Favorite Food 2"></input>
                                <input onChange={this.handleInput} name="food3" placeholder="Favorite Food 3"></input>
                            </div>
                            <div className="account--body">
                                <p>Spouse two's favorite foods</p>
                                <input onChange={this.handleInput} name="food4" placeholder="Favorite Food 1"></input>
                                <input onChange={this.handleInput} name="food5" placeholder="Favorite Food 2"></input>
                                <input onChange={this.handleInput} name="food6" placeholder="Favorite Food 3"></input>
                            </div>
                        </div>
                    </div>
                    <button className="signupButton" type="submit">Signup</button>
                </form>
            </div >

        )
    }
}

export default Signup;