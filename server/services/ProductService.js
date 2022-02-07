const Product = require('../models/Product');
class ProductService {
	getProducts(limit = 8) {
		return Product.find().limit(limit);
	}

	getProductsByCategory(category, limit = 8) {
		return Product.find({ category }).limit(limit);
	}

	getProductsByQuery(query) {
		return Product.find({
			$or: [
				{ title: { $regex: query, $options: 'i' } },
				{ author: { $regex: query, $options: 'i' } },
			],
		});
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
