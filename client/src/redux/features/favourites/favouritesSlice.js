import { createSlice } from '@reduxjs/toolkit';
import { checkProductsInList } from '../../../utils/checkProductInList';

const initialState = {
	products: [],
	quantity: 0,
};

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavouriteProduct: (state, action) => {
			const isAlreadyFavourite = checkProductsInList(state.products, action.payload);

			if (!isAlreadyFavourite) {
				state.quantity += 1;
				state.products.push(action.payload);
			}
		},

		removeFavouriteProduct: (state, action) => {
			const isAlreadyFavourite = checkProductsInList(state.products, action.payload);

			if (isAlreadyFavourite) {
				state.quantity -= 1;
				state.products = state.products.filter((product) => product.id !== action.payload.id);
			}
		},
	},
});

export const { addFavouriteProduct, removeFavouriteProduct } = favouritesSlice.actions;

export default favouritesSlice.reducer;
