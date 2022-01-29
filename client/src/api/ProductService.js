import axios from './axiosInstance';
import { ENDPOINTS } from './endpoints';

class ProductService {
	constructor(endpoints, token) {
		this.endpoints = endpoints;
		this.token = token;
	}

	createImagesUrl = (images) => {
		return images.map((image) => `${this.endpoints.images}/${image}`);
	};

	async fetchAll({ category, limit }) {
		const productsUrl = this.endpoints.products;

		const response = await axios.get(productsUrl, {
			params: {
				category,
				limit,
			},
		});

		const products = response.data.map((product) => {
			return { ...product, images: this.createImagesUrl(product.images) };
		});

		return products;
	}

	async fetchOne(id) {
		const productsUrl = this.endpoints.products;

		const response = await axios.get(`${productsUrl}/${id}`);
		const product = response.data;
		const images = this.createImagesUrl(product.images);

		return { ...product, images };
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
