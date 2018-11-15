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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSignup(this.state)
    }

    render() {
        return (
            <div className="accountLogin">
                <div className='signupImage'></div>
                <div className="sideForm2">
                    <form onSubmit={this.handleSubmit} className="LoginForm">
                        <h1>Signup</h1>
                        <div className="loginForm--head">
                            <label htmlFor="">Username</label>
                            <input name="username" onChange={this.handleInput} placeholder="Username"></input>
                            <label htmlFor="">Password</label>
                            <input name="password" onChange={this.handleInput} type="password" placeholder="Password"></input>
                        </div>
                        <div className="foods">
                            <div className="foods--list">
                                <label htmlFor="">Food 1</label>
                                <input className="foodInput" name="food1" onChange={this.handleInput} placeholder="Food 1"></input>
                                <label htmlFor="">Food 2</label>
                                <input className="foodInput" name="food2" onChange={this.handleInput} placeholder="Food 2"></input>
                                <label htmlFor="">Food 3</label>
                                <input className="foodInput" name="food3" onChange={this.handleInput} placeholder="Food 3"></input>
                            </div>
                            <div className="foods--list">
                                <label htmlFor="">Food 1</label>
                                <input className="foodInput" name="food4" onChange={this.handleInput} placeholder="Food 1"></input>
                                <label htmlFor="">Food 2</label>
                                <input className="foodInput" name="food5" onChange={this.handleInput} placeholder="Food 2"></input>
                                <label htmlFor="">Food 3</label>
                                <input className="foodInput" name="food6" onChange={this.handleInput} placeholder="Food 3"></input>
                            </div>
                        </div>
                        <button type="submit" className="loginButton">Signup</button>
                    </form>
                </div>

                {/* <Form className="SignupForm" onSubmit={this.handleSubmit}>
                    <div>
                        <h4>Person 1</h4>
                        <FormGroup >
                            <ControlLabel>username</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl name="username" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup  >
                            <ControlLabel>Food One</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>1</InputGroup.Addon>
                                <FormControl name="food1" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup  >
                            <ControlLabel>Food Two</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>2</InputGroup.Addon>
                                <FormControl name="food2" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup  >
                            <ControlLabel>Food Three</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>3</InputGroup.Addon>
                                <FormControl name="food3" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>

                    </div>
                    <div>
                        <h4>Person 2</h4>
                        <FormGroup type="password">
                            <ControlLabel>Password</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon></InputGroup.Addon>
                                <FormControl type="password" name="password" onChange={this.handleInput} />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Food One</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>1</InputGroup.Addon>
                                <FormControl name="food4" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Food Two</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>2</InputGroup.Addon>
                                <FormControl name="food5" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel>Food Three</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>3</InputGroup.Addon>
                                <FormControl name="food6" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                            <Button className="signupButton" type="submit" bsSize="large" block>
                                Submit
                    </Button>
                        </FormGroup>

                    </div>
                </Form> */}
            </div >

        )
    }
}

export default Signup;