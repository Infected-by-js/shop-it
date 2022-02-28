import axiosInstance from './axiosInstance';
import { PRODUCTS, IMAGES, LOGIN, REGISTER, AUTH } from './endpoints';

export const requests = {
	fetchProducts,
	fetchProduct,
	saveProduct,
	getImageUrl,
	login,
	register,
	auth,
};

function fetchProducts(params) {
	return axiosInstance.get(PRODUCTS, {
		params,
	});
}

function fetchProduct(id) {
	return axiosInstance.get(`${PRODUCTS}/${id}`);
}

function saveProduct(product) {
	return axiosInstance.post(PRODUCTS, product);
}

function auth() {
	return axiosInstance.get(AUTH);
}

function login(userCredentials) {
	return axiosInstance.post(LOGIN, userCredentials);
}

function register(userCredentials) {
	return axiosInstance.post(REGISTER, userCredentials);
}

function getImageUrl(image) {
	return `${IMAGES}/${image}`;
}
