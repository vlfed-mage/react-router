import './scss/main.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from "react-router-dom";

import ScrollToTop from './components/scroll-to-top';
import AppWrapper from './components/app/app-wrapper';

ReactDOM.render(
	<StrictMode>
		<Router>
			<ScrollToTop />
			<AppWrapper />
		</Router>
	</StrictMode>,
	document.getElementById('root')
);

module?.hot.accept();
