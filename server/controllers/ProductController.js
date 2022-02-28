const ProductService = require('../services/ProductService');
const FileService = require('../services/FileService');
const { validationResult } = require('express-validator');

class ProductController {
	async getAll(req, res) {
		const qLimit = req.query.limit;
		const qCategory = req.query.category;
		const qQuery = req.query.query;

		try {
			let products;

			if (qCategory) {
				products = await ProductService.getProductsByCategory(qCategory, qLimit);
			} else if (qQuery) {
				products = await ProductService.getProductsByQuery(qQuery);
			} else {
				products = await ProductService.getProducts(qLimit);
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
			res.status(500).json('Product not found!');
		}
	}

	async create(req, res) {
		const { errors } = validationResult(req);

		try {
			if (errors.length) {
				FileService.deleteImages(req.files);

				return res.status(400).json(errors);
			}

			const images = req.files.map((image) => image.filename);
			const newProduct = { ...req.body, images };
			const savedProduct = await ProductService.saveProduct(newProduct);

			res.status(201).json(savedProduct);
		} catch (error) {
			FileService.deleteImages(req.files);

			res.status(500).json(error.message);
		}
	}
}

module.exports = new ProductController();
