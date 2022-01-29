const Product = require('../models/Product');
class ProductService {
	getProducts(limit = '6') {
		return Product.find().limit(limit);
	}

	getProductsByCategory(category) {
		return Product.find({ category });
	}

	getProduct(productId) {
		return Product.findById(productId);
	}

	saveProduct(product) {
		const newProduct = new Product(product);
		return newProduct.save();
	}
}

module.exports = new ProductService();
