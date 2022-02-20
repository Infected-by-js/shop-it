import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { persistor, store } from './redux/store';
import { App } from './App';
import { PersistGate } from 'redux-persist/integration/react';

render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
