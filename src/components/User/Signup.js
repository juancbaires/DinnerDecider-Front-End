import React, { Component } from 'react';
import { Form, FormControl, FormGroup, InputGroup, ControlLabel, Button } from 'react-bootstrap'

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
            <div className="signupContainer">
                <div className="imageContainer">
                    <div className="signupImage"></div>
                </div>
                <Form className="SignupForm" onSubmit={this.handleSubmit}>
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
                </Form>
            </div >

        )
    }
}

export default Signup;