import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <a className="navbar-brand navheading" href="/" style={this['props']['style']}>KEEP IN TOUCH</a>
        )
    }
}
