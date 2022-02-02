import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

export const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		addFavouriteProduct: (state, action) => {
			state.products.push(action.payload);
		},
		removeFavouriteProduct: (state, action) => {
			console.log(action);
			return state.products.filter((product) => product._id !== action.payload);
		},
	},
});

export const { addFavouriteProduct, removeFavouriteProduct } = favouritesSlice.actions;

export default favouritesSlice.reducer;
