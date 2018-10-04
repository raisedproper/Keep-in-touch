import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <a className="navbar-brand navheading" href="/" style={this['props']['style']}>LOG IN</a>
        )
    }
}
