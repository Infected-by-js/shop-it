import { createSelector } from '@reduxjs/toolkit';

export const productsSelector = (state) => state.products;

export const selectActiveProduct = createSelector(
	[productsSelector],
	(products) => products.activeProduct
);
export const selectProducts = createSelector([productsSelector], (products) => products.products);

export const selectProductsLoadingState = createSelector(
	[productsSelector],
	(products) => products.isLoading
);
export const selectProductsError = createSelector(
	[productsSelector],
	(products) => products.productsError
);
