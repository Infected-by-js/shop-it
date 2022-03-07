import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './AnimatedRoutes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	);
};
