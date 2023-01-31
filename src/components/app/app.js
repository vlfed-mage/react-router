import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path='' element={<div>base</div>} />
			<Route path='/test' element={<div>test</div>} />
		</Routes>
	);
};

export default App;
