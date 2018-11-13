import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap"
import './Header.css'
import jwtDecode from 'jwt-decode'


class Header extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        if (localStorage.token) {
            this.setState({
                name: jwtDecode(localStorage.token).username
            })
        }
    }

    render() {
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
                        {this.props.isLoggedIn ? (
                            <Nav pullRight>
                                <NavItem eventKey={1}>
                                    Hello, {this.props.name}
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