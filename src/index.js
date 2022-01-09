import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { store } from './redux/store';

render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
