export {
	getProducts,
	getOneProduct,
	setPage,
	setCategory,
} from './features/products/productsActions';
export { addToCart, removeFromCart } from './features/cart/cartActions';
export { addToFavourites, removeFromFavourites } from './features/favourites/favouritesActions';
export { loginUser, registerUser, logOutUser, requestAuth } from './features/auth/authActions';
