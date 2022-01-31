import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	isLoading: false,
	error: '',
	category: '',
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
		productsLoadingFailed: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		setCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});

export const { setCategory, productsLoading, productsLoaded, productsLoadingFailed } =
	productsSlice.actions;

export default productsSlice.reducer;
