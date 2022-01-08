import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage, HomePage, LoginPage, RegisterPage } from '../pages';
import {
	DETAILS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
} from './routes';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
			<Route path={DETAILS_PAGE_ROUTE} element={<DetailsPage />} />
			<Route path={REGISTER_PAGE_ROUTE} element={<RegisterPage />} />
			<Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
			<Route
				path={HOME_PAGE_ROUTE}
				element={
					<PrivateRoute>
						<HomePage />
					</PrivateRoute>
				}
			/>
			<Route path='*' element={<Navigate to={HOME_PAGE_ROUTE} />} />
		</Routes>
	);
};

const PrivateRoute = ({ children }) => {
	const isLogged = false;

	return isLogged ? children : <Navigate to={REGISTER_PAGE_ROUTE} />;
};
