import React from 'react';

import App from './app'
import Header from '../header';
import { css } from '@emotion/css';

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

const AppWrapper = () => {
    return (
        <div className={ appStyleWrapper } >
            <div className='container'>
                <Header />
                <App />
            </div>
        </div>
    );
};

export default AppWrapper;
