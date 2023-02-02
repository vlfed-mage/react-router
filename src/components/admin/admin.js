import React from 'react';
import {Route, Routes} from "react-router-dom";
import { ProductsList } from "../products";

const Admin = () => {
    return (
        <div className='admin-panel'>
            <h1>Admin panel</h1>
            <Routes>
                <Route path='/' element={ <ProductsList /> } />
            </Routes>
        </div>
    );
};

export default Admin;