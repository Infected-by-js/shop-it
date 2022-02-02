import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	isLoading: false,
	error: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productsLoading: (state, action) => {
			state.error = '';
			state.products = [];
			state.isLoading = true;
		},
		productsLoaded: (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		},
		productsLoadingFailed: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { productsLoading, productsLoaded, productsLoadingFailed } = productsSlice.actions;

export default productsSlice.reducer;
