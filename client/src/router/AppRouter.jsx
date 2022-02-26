import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import StorageService from '../api/services/StorageService';
import { CartPage, ProductPage, HomePage, AuthPage, FavouritesPage } from '../pages';

import { requestAuth } from '../redux/actions';
import { selectCurrentUser } from '../redux/selectors';
import {
	CART_PAGE_ROUTE,
	PRODUCTS_CATEGORY_ROUTE,
	PRODUCT_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
} from './routes';

export const AppRouter = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = StorageService.getItem('token');

		if (token) {
			dispatch(requestAuth(token));
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME_PAGE_ROUTE} element={<HomePage />}>
					<Route path={PRODUCTS_CATEGORY_ROUTE} element={<HomePage />} />
				</Route>

				<Route path={PRODUCT_PAGE_ROUTE} element={<ProductPage />} />

				<Route element={<PrivateRoute isLogged={!!currentUser} />}>
					<Route path={CART_PAGE_ROUTE} element={<CartPage />} />
					<Route path={FAVOURITES_PAGE_ROUTE} element={<FavouritesPage />} />
				</Route>

				<Route path={REGISTER_PAGE_ROUTE} element={<AuthPage />} />
				<Route path={LOGIN_PAGE_ROUTE} element={<AuthPage />} />

				<Route path='*' element={<Navigate to={HOME_PAGE_ROUTE} />} />
			</Routes>
		</BrowserRouter>
	);
};

const PrivateRoute = ({ isLogged }) => {
	return isLogged ? <Outlet /> : <Navigate to={HOME_PAGE_ROUTE} />;
};
