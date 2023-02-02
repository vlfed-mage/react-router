import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div className='products'>
            <Outlet />
        </div>
    );
};

export default Products;