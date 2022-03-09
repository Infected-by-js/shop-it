import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart', (product) => {
	return { payload: product };
});

export const removeFromCart = createAction('cart/removeFromCart', (product) => {
	return { payload: product };
});
