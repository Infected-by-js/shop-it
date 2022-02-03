import { createSlice } from '@reduxjs/toolkit';
import { addProductToListUtil, removeProductFromListUtil } from '../../utils';

const initialState = {
	products: [],
	quantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.totalPrice += action.payload.price;
			state.products = addProductToListUtil(state.products, action.payload);
		},
		removeProduct: (state, action) => {
			state.quantity -= 1;
			state.totalPrice -= action.payload.price;
			state.products = removeProductFromListUtil(state.products, action.payload);
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
