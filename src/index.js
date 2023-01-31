import './scss/main.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./components/app";

ReactDOM.render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	document.getElementById('root')
);

module?.hot.accept();
