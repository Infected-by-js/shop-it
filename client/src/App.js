import React from 'react';
import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppRouter />
		</>
	);
};
