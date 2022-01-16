import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { CartPage, DetailsPage, HomePage, LoginPage, ProductsPage, RegisterPage } from '../pages';
import {
	CART_PAGE_ROUTE,
	PRODUCTS_CATEGORY_ROUTE,
	DETAILS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
	PRODUCTS_PAGE_ROUTE,
} from './routes';

export const AppRouter = () => {
	const isLogged = true;

	return (
		<Routes>
			<Route element={<PrivateRoute isLogged={isLogged} />}>
				<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
				<Route path={PRODUCTS_PAGE_ROUTE} element={<ProductsPage />}>
					<Route path={PRODUCTS_CATEGORY_ROUTE} element={<ProductsPage />} />
				</Route>
				<Route path={DETAILS_PAGE_ROUTE} element={<DetailsPage />} />
				<Route path={CART_PAGE_ROUTE} element={<CartPage />} />
			</Route>
			{/* <Route element={<PublicRoute isLogged={isLogged} />}> */}
			<Route path={REGISTER_PAGE_ROUTE} element={<RegisterPage />} />
			<Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
			{/* </Route> */}

			<Route path='*' element={<Navigate to={HOME_PAGE_ROUTE} />} />
		</Routes>
	);
};

const PrivateRoute = ({ isLogged }) => {
	return isLogged ? <Outlet /> : <Navigate to={LOGIN_PAGE_ROUTE} />;
};

const PublicRoute = ({ isLogged }) => {
	return isLogged ? <Navigate to={HOME_PAGE_ROUTE} /> : <Outlet />;
};
