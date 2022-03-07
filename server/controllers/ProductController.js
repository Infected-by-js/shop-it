const ProductService = require('../services/ProductService');
const FileService = require('../services/FileService');
const { validationResult } = require('express-validator');
const { PAGE_ITEMS_LIMIT } = require('../utils/constants');

class ProductController {
	async getAll(req, res) {
		const qLimit = req.query.limit;
		const qCategory = req.query.category;
		const qPage = req.query.page;
		const qQuery = req.query.query;

		try {
			let productsData;

			if (qCategory) {
				productsData = await ProductService.getProductsByCategory({
					category: qCategory,
					page: qPage,
					limit: qLimit,
					pageLimit: PAGE_ITEMS_LIMIT,
				});
			} else if (qQuery) {
				productsData = await ProductService.getProductsByQuery({
					query: qQuery,
					page: qPage,
					limit: qLimit,
					pageLimit: PAGE_ITEMS_LIMIT,
				});
			} else {
				productsData = await ProductService.getProducts({
					page: qPage,
					limit: qLimit,
					pageLimit: PAGE_ITEMS_LIMIT,
				});
			}

			res.status(200).json(productsData);
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
