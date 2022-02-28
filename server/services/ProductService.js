const Product = require('../models/Product');
const ProductDto = require('../dtos/ProductDto');
class ProductService {
	getProductDto(productData) {
		return new ProductDto(productData);
	}

	async getProducts(limit = 8) {
		const products = await Product.find().limit(limit);
		return products.map(this.getProductDto);
	}

	async getProductsByCategory(category, limit = 8) {
		const products = await Product.find({ category }).limit(limit);
		return products.map(this.getProductDto);
	}

	async getProductsByQuery(query) {
		const products = await Product.find({
			$or: [
				{ title: { $regex: query, $options: 'i' } },
				{ author: { $regex: query, $options: 'i' } },
			],
		});

		return products.map(this.getProductDto);
	}

	async getProduct(productId) {
		const product = await Product.findById(productId);
		return this.getProductDto(product);
	}

	saveProduct(product) {
		const newProduct = new Product(product);
		return newProduct.save();
	}
}

module.exports = new ProductService();
