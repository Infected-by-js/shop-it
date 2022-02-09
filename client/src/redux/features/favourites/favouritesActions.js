import { addFavouriteProduct, removeFavouriteProduct } from './favouritesSlice';

export const addToFavourites = (product) => {
	return addFavouriteProduct(product);
};

export const removeFromFavourites = (id) => {
	return removeFavouriteProduct(id);
};
