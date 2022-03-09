import { createAction } from '@reduxjs/toolkit';

export const addToFavourites = createAction('favourites/addToFavourites', (product) => {
	return { payload: product };
});

export const removeFromFavourites = createAction('favourites/removeFromFavourites', (product) => {
	return { payload: product };
});
