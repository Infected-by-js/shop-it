import { createSlice } from '@reduxjs/toolkit';
import { addProductToList } from '../../../utils/addProductInList';
import { removeProductFromList } from '../../../utils/removeProductFromList';

const initialState = {
	products: [],
};

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavouriteProduct: (state, action) => {
			state.products = addProductToList(state.products, action.payload);
		},

		removeFavouriteProduct: (state, action) => {
			state.products = removeProductFromList(state.products, action.payload);
		},
	},
});

export const { addFavouriteProduct, removeFavouriteProduct } = favouritesSlice.actions;

export default favouritesSlice.reducer;
