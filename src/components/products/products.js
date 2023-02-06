import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loadable from '../loadable';

const ProductsList = Loadable(lazy(() => import('./products-list')));
const ProductDetails = Loadable(lazy(() => import('./product-details')));

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
