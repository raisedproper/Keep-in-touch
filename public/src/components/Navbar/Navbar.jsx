import React, { Component } from 'react'
import Logo from './Logo';
import SignUp from './SignUp';
import Login from './Login';

const logoStyling = {
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: 'rgb(187, 24, 135)'
}

const navButtons = {
    color: 'rgba(0,0,0,.5)',
    fontSize: '1rem',
    marginLeft: '.5vw',
    marginRight: '.5vw'
}

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div className='order-0 w-100'>
                    <Logo style={logoStyling} />
                </div>
                <div class="navbar-collapse ml-auto" id="collapsingNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <SignUp style={navButtons} />
                        </li>
                        <li class="nav-item">
                            <Login style={navButtons} />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
