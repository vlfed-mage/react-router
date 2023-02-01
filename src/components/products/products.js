import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div className='products'>
            <img
                className='logo'
                src={ require('../../images/logo.svg') }
                alt='Ultimate burgers' />
            <Outlet />
        </div>
    );
};

export default Products;