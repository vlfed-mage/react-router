import React, { lazy, useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import Loadable from '../loadable';

const Admin = Loadable(lazy(() => import('../admin')));
const Products = Loadable(lazy(() => import('../products')));
const HomePage = Loadable(lazy(() => import('../home-page')));

const App = () => {
	const [ authenticated ] = useState(true);

	return useRoutes([
		{
			path: '/',
			element: <HomePage/>
		},
		{
			path: '/products/*',
			element: <Products/>
		},
		{
			path: '/admin/*',
			element: authenticated ? <Admin/> : <Navigate to='/'/>
		},
		{
			path: '*',
			element: <Navigate to='/'/>
		}
	]);
};

export default App;
