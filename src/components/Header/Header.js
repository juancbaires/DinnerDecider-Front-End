import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormControl } from "react-bootstrap"
import './Header.css'
import jwtDecode from 'jwt-decode'

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
                            <a href="/">Ate-Ball</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav><NavItem eventKey={1} href="#">Zip: <FormControl className="form-control-header" type="text" onChange={this.onChange} value={this.props.zip} /></NavItem></Nav>
                        {this.props.isLoggedIn ? (
                            <Nav pullRight>
                                <NavItem eventKey={1} href={"/user/" + name}>
                                    Hello, {name}
                                </NavItem>
                                <NavItem eventKey={2} onClick={this.props.handleLogout}>
                                    Logout
</NavItem>
                            </Nav>
                        ) : (
                                <Nav pullRight>

                                    <NavItem eventKey={1} href="/login">
                                        Login
  </NavItem>
                                    <NavItem eventKey={2} href="/signup">
                                        Signup
  </NavItem>
                                </Nav>
                            )}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;