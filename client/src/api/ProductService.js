import axios from './axiosInstance';
import { ENDPOINTS } from './endpoints';

class ProductService {
	#createImagesUrl = (images) => {
		return images.map((image) => `${this.endpoints.images}/${image}`);
	};

	constructor(endpoints, token) {
		this.endpoints = endpoints;
		this.token = token;
	}

	async fetchAll({ category = '', limit = '', query = '' }) {
		const productsUrl = this.endpoints.products;

		const response = await axios.get(productsUrl, {
			params: {
				category,
				limit,
				query,
			},
		});

		const products = response.data.map((product) => {
			const productId = product._id;
			delete product._id;

			return { ...product, id: productId, images: this.#createImagesUrl(product.images) };
		});

		return products;
	}

	async fetchOne(id) {
		const productsUrl = this.endpoints.products;

		const response = await axios.get(`${productsUrl}/${id}`);
		const product = response.data;
		const images = this.#createImagesUrl(product.images);
		const productId = product._id;
		delete product._id;

		return { ...product, id: productId, images };
	}

	async createOne(requestBody) {
		const productsUrl = this.endpoints.products;

		const response = await axios.post(productsUrl, requestBody, {
			headers: {
				token: `Bearer ${this.token}`,
			},
		});
		return response.data;
	}
}

export default new ProductService(ENDPOINTS);
