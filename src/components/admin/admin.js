import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { ProductsList, ProductEdit } from '../products';

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