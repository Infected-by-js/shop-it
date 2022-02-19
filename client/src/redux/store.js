import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import authReducer from './features/auth/authSlice';
import favouritesReducer from './features/favourites/favouritesSlice';
import searchSlice from './features/search/searchSlice';

const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	cart: cartReducer,
	favourites: favouritesReducer,
	search: searchSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
