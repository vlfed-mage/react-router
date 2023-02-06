import React, { useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Admin from '../admin';
import { Products } from '../products';
import HomePage from '../home-page';

const App = () => {
	const [ authenticated ] = useState(true);
	const routes = useRoutes([
		{
			path: '/',
			element: <HomePage />
		},
		{
			path: '/products/*',
			element: <Products />
		},
		{
			path: '/admin/*',
			element: authenticated ? <Admin /> : <Navigate to='/' />
		},
		{
			path: '*',
			element: <Navigate to='/' />
		}
	]);

	return routes;
};

export default App;
