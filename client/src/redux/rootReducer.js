import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import favouritesReducer from './features/favourites/favouritesSlice';
import authReducer from './features/auth/authSlice';
import productsReducer from './features/products/productsSlice';

export const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	cart: cartReducer,
	favourites: favouritesReducer,
});
