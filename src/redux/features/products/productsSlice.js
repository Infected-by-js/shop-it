import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../assets/products';

const initialState = {
	products: products,
	category: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setCategory: (state, payload) => {
			state.category = payload.category;
		},
	},
});

export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;
