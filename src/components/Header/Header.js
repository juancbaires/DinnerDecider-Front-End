import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormControl } from "react-bootstrap"
import './Header.css'
import jwtDecode from 'jwt-decode'
import {Link} from 'react-router-dom'

class Header extends Component {
  state = {
    headerZip: ''
  }


  onChange = (e) => {
    this.props.zipChange(e.target.value)
  }

    render() {
      let name
      if (localStorage.token) {
        name = jwtDecode(localStorage.token).username
      }

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Ate-Ball</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav>
                        <NavItem eventKey={1} href="#">Zip: <FormControl className="form-control-header" type="text" onChange={this.onChange} value={this.props.zip} />
                        </NavItem>
                      </Nav>
                        {this.props.isLoggedIn ? (
                      <Nav pullRight>
                      <NavItem componentClass={Link} href={"/user/" + name} to={"/user/" + name} >Hello, {name}</NavItem>
                        <NavItem eventKey={2} onClick={this.props.handleLogout}>
                          Logout
                        </NavItem>
                      </Nav>
                        ) : (
                      <Nav pullRight>

                        <NavItem eventKey={1} componentClass={Link} href="/login" to="/login" >Login</NavItem>

                        <NavItem eventKey={2} componentClass={Link} href="/signup" to="/signup" >Signup</NavItem>
                      </Nav>
                            )}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;