import { addProduct, removeProduct } from './cartSlice';

export const addToCart = (product) => {
	return addProduct(product);
};

export const removeFromCart = (product) => {
	return removeProduct(product);
};
