export const HOME_PAGE_ROUTE = '/';
export const PRODUCTS_CATEGORY_ROUTE = 'category/:categoryId';
export const PRODUCT_PAGE_ROUTE = '/product/:productId';
export const REGISTER_PAGE_ROUTE = '/register';
export const LOGIN_PAGE_ROUTE = '/login';
export const CART_PAGE_ROUTE = '/cart';
export const FAVOURITES_PAGE_ROUTE = '/favourites';

export const routeToProductPage = (productId) => {
	return `/product/${productId}`;
};

export const routeToCategoryPage = (categoryId) => {
	return `/category/${categoryId}`;
};
