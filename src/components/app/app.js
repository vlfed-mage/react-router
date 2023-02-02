import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { css } from '@emotion/css';

import Header from "../header/header";
import ProtectedRoute from '../protected-route'
import Admin from '../admin';
import { Products } from '../products'

const appStyleWrapper = css`
	margin: 50px auto;
	width: 100%;
	max-width: 1440px;

	.container {
		background: #1d1e26;
		border: 4px solid #9580ff;
		border-radius: 6px;
		padding: 25px;
	}
`;

const App = () => {
	const [ authenticated ] = useState(true);

	return (
		<div className={ appStyleWrapper } >
			<div className='container'>
				<Header />
				<Routes>
					<Route path='/*' element={ <Products /> } />
					<ProtectedRoute // it doesn't work in the newest version of react-router
						path='/admin'
						element={ <Admin /> }
						authenticated={ authenticated }
						redirectTo='/' />
					<Route path='*' element={ <Navigate to='/' /> } />
				</Routes>
			</div>
		</div>
	);
};

export default App;
