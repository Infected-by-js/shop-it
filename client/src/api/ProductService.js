import axios from 'axios';

export class ProductService {
	static #URL = 'http://localhost:5000/api/products';

	static getAll({ category = '', limit = '' }) {
		const response = axios.get(ProductService.#URL, {
			params: {
				category,
				limit,
			},
		});

		return response;
	}

	static getOne() {
		return {};
	}
}
