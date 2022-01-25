class ProductController {
	async getAll(req, res) {
		const qLimit = req.query.limit;
		const qCategory = req.query.category;

		try {
			let products;

			if (qLimit) {
				products = await Product.find().limit(qLimit);
			} else if (qCategory) {
				products = await Product.find({ category: qCategory });
			} else {
				products = await Product.find();
			}

			res.status(200).json(products);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getOne(req, res) {
		try {
			const product = await Product.findById(req.params.id);

			res.status(200).json(product);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async create() {
		const newProduct = new Product(req.body);

		try {
			const savedProduct = await newProduct.save();

			res.status(201).json(savedProduct);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new ProductController();
