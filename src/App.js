import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/details-page/DetailsPage';
import { DETAILS_PAGE_ROUTE, HOME_PAGE_ROUTE } from './constants/routes';

export const App = () => {
	return (
		<Routes>
			<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
			<Route path={DETAILS_PAGE_ROUTE} element={<DetailsPage />} />
		</Routes>
	);
};
