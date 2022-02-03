import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	activeProduct: {},
	isLoading: false,
	error: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productsLoading: (state, action) => {
			state.error = '';
			state.isLoading = true;
		},
		productsLoaded: (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		},
		activeProductLoaded: (state, action) => {
			state.isLoading = false;
			state.activeProduct = action.payload;
		},
		productsLoadingFailed: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { productsLoading, productsLoaded, activeProductLoaded, productsLoadingFailed } =
	productsSlice.actions;

export default productsSlice.reducer;
