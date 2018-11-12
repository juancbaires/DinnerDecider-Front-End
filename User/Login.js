import React, { Component } from 'react';
import './User.css'
import {form } from 'react-bootstrap'

class Login extends Component {
  render() {
    return (
      <form>
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState()}
      >
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    </form>
    );
  }
}

export default Login;