import React, { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Loadable from '../loadable';

const ProductsList = Loadable(lazy(() => import('../products/products-list')));
const ProductEdit = Loadable(lazy(() => import('../products/product-edit')));

const Admin = () => {
    return (
        <div className='admin'>
            <div className='admin-header'>
                <h1>Admin panel</h1>
                <Link to='new' className='admin-new'>
                    New
                </Link>
            </div>
            <Routes>
                <Route path='/' element={ <ProductsList /> } />
                <Route path='/new' element={ <ProductEdit isEdit={ false } /> } />
                <Route path=':id' element={ <ProductEdit isEdit={ true } /> } />
            </Routes>
        </div>
    );
};

export default Admin;