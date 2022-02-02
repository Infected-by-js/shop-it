import {
	addFavouriteProduct,
	removeFavouriteProduct,
} from '../features/favourites/favouritesSlice';

export const addToFavourites = (product) => {
	return addFavouriteProduct(product);
};

export const removeFromFavourites = (id) => {
	return removeFavouriteProduct(id);
};
