import React, { Component } from 'react';
import './FavoriteFoods.css'
import axios from 'axios'
class FavoriteFoods extends Component {
    state = {
        foods: []
    }

    render() {
        return (
            <div>
                <form>
                    <label /> food 1:
                    <input></input>
                    <label /> food 2:
                    <input></input>
                    <label /> food 3:
                    <input></input>
                    <label /> food 4:
                    <input></input>
                    <label /> food 5:
                    <input></input>
                    <label /> food 6:
                    <input></input>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default FavoriteFoods;