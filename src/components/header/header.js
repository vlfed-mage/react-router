import React from 'react';
import Nav from '../nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='logo'>
                <img
                    src={ require('../../images/logo.svg') }
                    alt='Ultimate burgers' />
            </NavLink>
            <Nav />
        </header>
    );
};

export default Header;
