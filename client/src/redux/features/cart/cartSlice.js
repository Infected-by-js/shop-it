import { createSlice } from '@reduxjs/toolkit';

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
			state.products.push(action.payload);
			state.totalPrice += action.payload.price;
		},
		removeProduct: (state, action) => {
			state.quantity -= 1;
			state.products = state.products.filter((product) => product._id !== action.payload._id);
			state.totalPrice -= action.payload.price;
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
