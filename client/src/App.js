import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './assets/styles/GlobalStyle';

export const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppRouter />
		</>
	);
};
