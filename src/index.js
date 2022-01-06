import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
