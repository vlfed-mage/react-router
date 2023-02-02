import React from "react";
import Nav from "../nav";

const Header = () => {
    return (
        <header className='header'>
            <img
                className='logo'
                src={ require('../../images/logo.svg') }
                alt='Ultimate burgers' />
            <Nav />
        </header>
    );
};

export default Header;