import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductDetails, ProductsList } from './index';

const Products = () => {
    return (
        <div className='products'>
            <Routes>
                <Route path='/' element={ <ProductsList /> } />
                <Route path=':id' element={ <ProductDetails /> } />
            </Routes>
        </div>
    );
};

export default Products;