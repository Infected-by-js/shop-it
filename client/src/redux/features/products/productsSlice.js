import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { getOneProduct, getProducts, setCategory, setPage } from './productsActions';
import { categories } from '../../../assets/categories';

const initialState = {
	products: [],
	category: categories[0].value,
	activeProduct: {},
	isLoading: false,
	page: 1,
	pages: 1,
	error: '',
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,

	extraReducers: ({ addCase, addMatcher }) => {
		addCase(setPage, (state, action) => {
			state.page = action.payload;
		});
		addCase(setCategory, (state, action) => {
			state.category = action.payload;
		});
		addCase(getProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload.products;
			state.page = action.payload.page.activePage;
			state.pages = action.payload.page.pagesCount;
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

export default productsSlice.reducer;
