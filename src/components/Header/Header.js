import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormControl } from "react-bootstrap"
import './Header.css'
import jwtDecode from 'jwt-decode'
import {Link} from 'react-router-dom'

class Header extends Component {

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
                      </Nav>
                        {this.props.isLoggedIn ? (
                      <Nav pullRight>
                      <NavItem componentClass={Link} href={"/user/" + name} to={"/user/" + name} className="header-link" >Hello, {name && name.charAt(0).toUpperCase() + name.slice(1)}</NavItem>
                        <NavItem eventKey={2} className="header-link" onClick={this.props.handleLogout}>
                          Logout
                        </NavItem>

                        <NavItem>
                        <div className="flex-zip">
                        <div className="header-link">Current zip: </div>
                        <FormControl maxLength="6" className="form-control-header" type="text" onChange={this.onChange} value={this.props.zip} />
                        </div>
                      </NavItem>
                      </Nav>
                        ) : (
                      <Nav pullRight>

                        <NavItem eventKey={1} componentClass={Link} href="/login" to="/login" className="header-link" >Login</NavItem>

                        <NavItem eventKey={2} componentClass={Link} href="/signup" to="/signup" className="header-link" >Signup</NavItem>

                        <NavItem>
                        <div className="flex-zip">
                        <div>Current zip: </div>
                        <FormControl maxLength="6" className="form-control-header" type="text" onChange={this.onChange} value={this.props.zip} />
                        </div>
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