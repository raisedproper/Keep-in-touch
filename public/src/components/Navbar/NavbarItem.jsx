import React, { Component } from 'react'

export default class NavbarItem extends Component {
    render() {
        return (
            <a className="navbar-brand navheading" href={this['props']['routeLink']} style={this['props']['style']}>{this['props']['itemEntry']}</a>
        )
    }
}
