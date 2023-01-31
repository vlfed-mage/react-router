import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { css } from "@emotion/css";

import Products from "../products";
import Admin from "../admin";
import NotFound from "../not-found";

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
	return (
		<div className={ appStyleWrapper } >
			<div className='container'>
				<Routes>
					<Route path='' element={ <Products /> } />
					<Route path='/test' element={ <Admin /> } />
					<Route path='*' element={ <Navigate to='/' /> } />
				</Routes>
			</div>
		</div>
	);
};

export default App;
