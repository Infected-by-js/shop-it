import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getOneProduct, getProducts } from './productsActions';

const initialState = {
	products: [],
	activeProduct: {},
	isLoading: false,
	error: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,

	extraReducers: ({ addCase, addMatcher }) => {
		addCase(getProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		addCase(getOneProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			state.activeProduct = action.payload;
		});
		addMatcher(isRejected(getProducts, getOneProduct), (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		addMatcher(isPending(getProducts, getOneProduct), (state) => {
			state.error = '';
			state.products = [];
			state.activeProduct = {};
			state.isLoading = true;
		});
	},
});

export const { productsLoading, productsLoaded, activeProductLoaded, productsLoadingFailed } =
	productsSlice.actions;

export default productsSlice.reducer;
