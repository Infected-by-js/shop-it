import { addProduct, removeProduct } from '../features/cart/cartSlice';

export const addToCart = (product) => {
	return addProduct(product);
};

export const removeFromCart = (product) => {
	return removeProduct(product);
};
