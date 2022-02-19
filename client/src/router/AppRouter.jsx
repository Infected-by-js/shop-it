import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { CartPage, ProductPage, HomePage, ProductsPage, AuthPage } from '../pages';

import { FavouritesPage } from '../pages/favourites/FavouritesPage';
import {
	CART_PAGE_ROUTE,
	PRODUCTS_CATEGORY_ROUTE,
	PRODUCT_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
	PRODUCTS_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
} from './routes';

export const AppRouter = () => {
	const user = useSelector((state) => state.auth.currentUser);

	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
				<Route path={PRODUCTS_PAGE_ROUTE} element={<ProductsPage />}>
					<Route path={PRODUCTS_CATEGORY_ROUTE} element={<ProductsPage />} />
				</Route>
				<Route path={PRODUCT_PAGE_ROUTE} element={<ProductPage />} />
				<Route path={CART_PAGE_ROUTE} element={<CartPage />} />
				<Route path={FAVOURITES_PAGE_ROUTE} element={<FavouritesPage />} />

				<Route path={REGISTER_PAGE_ROUTE} element={<AuthPage />} />
				<Route path={LOGIN_PAGE_ROUTE} element={<AuthPage />} />

				<Route path='*' element={<Navigate to={HOME_PAGE_ROUTE} />} />
			</Routes>
		</BrowserRouter>
	);
};

const PrivateRoute = ({ isLogged }) => {
	return isLogged ? <Outlet /> : <Navigate to={LOGIN_PAGE_ROUTE} />;
};

const PublicRoute = ({ isLogged }) => {
	return isLogged ? <Navigate to={HOME_PAGE_ROUTE} /> : <Outlet />;
};
