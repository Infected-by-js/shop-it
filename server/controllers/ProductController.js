const ProductService = require('../services/ProductService');

const { validationResult } = require('express-validator');

const generateLinkToFile = (fileName) => `http://localhost:${process.env.PORT}/static/${fileName}`;
class ProductController {
	async getAll(req, res) {
		const qLimit = req.query.limit;
		const qCategory = req.query.category;

		try {
			let products;

			if (qLimit) {
				products = await ProductService.getProducts(qLimit);
			} else if (qCategory) {
				products = await ProductService.getProductsByCategory(qCategory);
			} else {
				products = await ProductService.getProducts();
			}

			res.status(200).json(products);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getOne(req, res) {
		try {
			const product = await ProductService.getProduct(req.params.id);

			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getImage(req, res) {
		//
	}

	async create(req, res) {
		const { errors } = validationResult(req);
		const images = req.files.map((image) => image.filename);

		try {
			if (errors.length) {
				return res.status(400).json(errors);
			}

			// const newProduct = { ...req.body, images };
			// const savedProduct = await ProductService.saveProduct(newProduct);
			// res.status(201).json(savedProduct);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

module.exports = new ProductController();

// localhost/images/filename

/* 
	product: {
		_id: objectId, 
		title: string,
		author: string,
		style: string,
		size: string,
		description: string,
		price: number,
    category: string,
		year_created: number,
    images: [
			'1234567890-product_name'
		]
	}

*/
