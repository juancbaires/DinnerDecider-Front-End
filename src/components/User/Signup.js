import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, ControlLabel, Button } from 'react-bootstrap'
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
        validationState: ''
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

    checkvalidation = (e) => {
        if (e.target.value === '') {
            this.setState({
                validationState: 'error'
            })
        } else {
            this.setState({
                validationState: 'success'
            })
        }
    }
    render() {
        return (
            <div className="signupContainer">
                <div className="imageContainer">
                    <div className="signupImage"></div>
                </div>
                <form onSubmit={this.handleSubmit} className="signupForms">
                    <div>
                        <h4>Spouse One/ Friend One</h4>
                        <FormGroup onSubmit={this.handleSubmit} onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>username</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>1</InputGroup.Addon>
                                <FormControl name="username" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food One</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>1</InputGroup.Addon>
                                <FormControl name="food1" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food Two</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>2</InputGroup.Addon>
                                <FormControl name="food2" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food Three</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>3</InputGroup.Addon>
                                <FormControl name="food3" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                            <Button bsSize="large" block>
                                Back
                    </Button>
                        </FormGroup>

                    </div>
                    <div>
                        <h4>Spouse Two/ Friend Two</h4>
                        <FormGroup onSelect={this.checkvalidation} type="password" validationState={this.state.validationState}>
                            <ControlLabel>Password</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon></InputGroup.Addon>
                                <FormControl type="password" name="password" onChange={this.handleInput} />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food One</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>1</InputGroup.Addon>
                                <FormControl name="food4" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food Two</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>2</InputGroup.Addon>
                                <FormControl name="food5" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup onSelect={this.checkvalidation} validationState={this.state.validationState}>
                            <ControlLabel>Food Three</ControlLabel>{' '}
                            <InputGroup>
                                <InputGroup.Addon>3</InputGroup.Addon>
                                <FormControl name="food6" onChange={this.handleInput} type="text" />
                            </InputGroup>
                            <FormControl.Feedback />
                            <Button handleSubmit={this.handleSubmit} bsSize="large" block>
                                Submit
                    </Button>
                        </FormGroup>

                    </div>
                </form>
            </div >

        )
    }
}

export default Signup;