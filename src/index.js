import './scss/main.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/app";
import ScrollToTop from './components/scroll-to-top';

ReactDOM.render(
	<StrictMode>
		<Router>
			<ScrollToTop />
			<App />
		</Router>
	</StrictMode>,
	document.getElementById('root')
);

module?.hot.accept();
