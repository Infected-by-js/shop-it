import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { requestAuth } from '../redux/actions';
import { selectUser } from '../redux/selectors';

import StorageService from '../api/services/StorageService';
import { CartPage, ProductPage, HomePage, AuthPage, FavouritesPage } from '../pages';
import { Header } from '../shared';
import {
	CART_PAGE_ROUTE,
	PRODUCTS_CATEGORY_ROUTE,
	PRODUCT_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_PAGE_ROUTE,
	REGISTER_PAGE_ROUTE,
	FAVOURITES_PAGE_ROUTE,
} from './routes';

export const AnimatedRoutes = () => {
	const location = useLocation();
	const { currentUser, authError } = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = StorageService.getItem('token');

		if (token) {
			dispatch(requestAuth(token));
		}
		// eslint-disable-next-line
	}, []);

	// FIXME: change it to refresh token
	useEffect(() => {
		if (authError) {
			StorageService.deleteItem('token');
		}
	}, [authError]);

	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
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
			</AnimatePresence>
		</>
	);
};

const PrivateRoute = ({ isLogged }) => {
	return isLogged ? <Outlet /> : <Navigate to={HOME_PAGE_ROUTE} />;
};
