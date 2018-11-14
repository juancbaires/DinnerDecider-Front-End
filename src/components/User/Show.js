import React, { Component } from 'react';

class Show extends Component {

    render() {
        return (
            <div>
                <h1>Welcome{" "}{this.props.user.username}</h1>
                <a href="/ateball">Random Diner</a>
            </div>
        );
    }
}

export default Show;