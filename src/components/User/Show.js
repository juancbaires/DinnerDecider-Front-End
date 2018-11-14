import React, { Component } from 'react';
import jwtDecode from 'jwt-decode'

class Show extends Component {

    render() {
        let user
        if (localStorage.token) {
            console.log(jwtDecode(localStorage.token))
            user = jwtDecode(localStorage.token)
            console.log(user)
        }
        return (
            <div>
                <h1>Welcome{" "}{user.username}</h1>
            </div>
        );
    }
}

export default Show;