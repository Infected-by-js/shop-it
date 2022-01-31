import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
	products: productsReducer,
	user: userReducer,
	cart: cartReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
