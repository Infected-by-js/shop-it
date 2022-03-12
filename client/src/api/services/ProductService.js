import { requests } from '../requests';

class ProductService {
	constructor(requests) {
		this.requests = requests;
	}

	async fetchAll({ category = '', limit = '', page = '', query = '' }) {
		const response = await this.requests.fetchProducts({ category, limit, query, page });
		const { products, pageData } = response.data;

		const preparedProducts = products.map((product) => {
			const images = product.images.map(this.requests.getImageUrl);

			return { ...product, images };
		});

		return { products: preparedProducts, page: pageData };
	}

	async fetchOne(id) {
		const response = await this.requests.fetchProduct(id);
		const product = response.data;
		const images = product.images.map(this.requests.getImageUrl);

		return { ...product, images };
	}
}

export default new ProductService(requests);
