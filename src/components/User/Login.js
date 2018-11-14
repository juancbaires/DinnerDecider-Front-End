import React, { Component } from 'react';
import './User.css'
import { Checkbox, Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap'
class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogIn(this.state)
  }

  render() {
    return (
      <div className="accountLogin">
        <div className="accountIMAGE">
          <div className='image'></div>
        </div>
        <div className="sideForm">
          <Form onSubmit={this.handleSubmit} horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}  >
                username
    </Col>
              <Col sm={10}>
                <FormControl type="username" placeholder="Username" name="username" onChange={this.handleChange} />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2} onChange={this.handleChange}>
                Password
    </Col>
              <Col sm={10}>
                <FormControl name="password" type="password" placeholder="Password" onChange={this.handleChange} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div >
    );
  }
}

export default Login;