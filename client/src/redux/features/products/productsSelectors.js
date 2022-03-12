import { createSelector } from '@reduxjs/toolkit';

export const productsSelector = (state) => state.products;

export const selectProducts = createSelector([productsSelector], (products) => products.products);
export const selectPage = createSelector([productsSelector], (products) => products.page);
export const selectPagesCount = createSelector([productsSelector], (products) => products.pages);
export const selectCategory = createSelector([productsSelector], (products) => products.category);
export const selectActiveProduct = createSelector(
	[productsSelector],
	(products) => products.activeProduct
);

export const selectProductsLoadingState = createSelector(
	[productsSelector],
	(products) => products.isLoading
);
export const selectProductsError = createSelector(
	[productsSelector],
	(products) => products.productsError
);
