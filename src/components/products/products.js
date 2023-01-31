import React from 'react';
import { Outlet } from 'react-router-dom';

import logo from '../../images/logo.svg'

const Products = () => {
    return (
        <div className='product'>
            <img src={ logo } alt='Ultimate burgers' className='logo'/>
            <Outlet />
        </div>
    );
};

export default Products;