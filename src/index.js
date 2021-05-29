import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import {AppProvider}  from './components/coctailsproject/cocktailContext';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
