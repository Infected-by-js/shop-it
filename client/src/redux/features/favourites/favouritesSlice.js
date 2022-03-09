import { createSlice } from '@reduxjs/toolkit';
import { checkProductsInList } from '../../../helpers/checkProductInList';
import { addToFavourites, removeFromFavourites } from './favouritesActions';

const initialState = {
	products: [],
	quantity: 0,
};

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	extraReducers: ({ addCase }) => {
		addCase(addToFavourites, (state, action) => {
			const isAlreadyFavourite = checkProductsInList(state.products, action.payload);

			if (!isAlreadyFavourite) {
				state.quantity += 1;
				state.products.push(action.payload);
			}
		});
		addCase(removeFromFavourites, (state, action) => {
			const isAlreadyFavourite = checkProductsInList(state.products, action.payload);

			if (isAlreadyFavourite) {
				state.quantity -= 1;
				state.products = state.products.filter((product) => product.id !== action.payload.id);
			}
		});
	},
});

export default favouritesSlice.reducer;
