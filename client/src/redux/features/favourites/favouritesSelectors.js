import { createSelector } from '@reduxjs/toolkit';

export const favouritesSelector = (state) => state.favourites;

export const favouriteProductsSelector = createSelector(
	[favouritesSelector],
	(favourites) => favourites.products
);
export const favouriteQuantitySelector = createSelector(
	[favouritesSelector],
	(favourites) => favourites.quantity
);
