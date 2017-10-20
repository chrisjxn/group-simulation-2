import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor() {
        super()

        this.state = {
            // username: '',
            // password: ''
        }
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser() {
        let user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }

        axios.post('/api/users', user)
        .then( res => console.log('user successfully created'));
        this.refs.username.value = '';
        this.refs.password.value = '';
    }

    render() {
        return (
            <div>
                <input placeholder="username" ref="username" />
                <input placeholder="password" ref="password" />
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

