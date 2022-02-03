import { createSlice } from '@reduxjs/toolkit';
import { addProductToListUtil, removeProductFromListUtil } from '../../utils';

const initialState = {
	products: [],
};

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavouriteProduct: (state, action) => {
			state.products = addProductToListUtil(state.products, action.payload);
		},

		removeFavouriteProduct: (state, action) => {
			state.products = removeProductFromListUtil(state.products, action.payload);
		},
	},
});

export const { addFavouriteProduct, removeFavouriteProduct } = favouritesSlice.actions;

export default favouritesSlice.reducer;
