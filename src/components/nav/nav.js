import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav' >
            <NavLink // activeClassName and activeStyle have been removed from NavLinkProps
                to='/products' end >
                Products
            </NavLink>
            <NavLink
                to='/admin'
                className={ ({ isActive }) => isActive ? 'active another-class' : null }
                style={ ({ isActive }) => isActive ? { fontStyle: 'italic', fontWeight: 700 } : null } >
                Admin
            </NavLink>
        </nav>
    );
};

export default Nav;