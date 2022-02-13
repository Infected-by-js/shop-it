import { requests } from '../requests';

class ProductService {
	constructor(requests) {
		this.requests = requests;
	}

	async fetchAll({ category = '', limit = '', query = '' }) {
		const response = await this.requests.fetchProducts({ category, limit, query });

		const products = response.data.map((product) => {
			const images = product.images.map(this.requests.getImageUrl);
			const isMongo = product.hasOwnProperty('_id');
			const productId = isMongo ? product._id : product.id;
			delete product._id;

			return { ...product, id: productId, images };
		});

		return products;
	}

	async fetchOne(id) {
		const response = await this.requests.fetchProduct(id);
		const product = response.data;
		const images = product.images.map(this.requests.getImageUrl);

		const isMongo = product.hasOwnProperty('_id');
		const productId = isMongo ? product._id : product.id;
		delete product._id;

		return { ...product, id: productId, images };
	}

	async createOne(requestBody) {
		const token = 'blabla';
		const response = await this.requests.saveProduct(requestBody, token);

		return response.data;
	}
}

export default new ProductService(requests);
