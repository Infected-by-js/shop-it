const Product = require('../models/Product');
const ProductDto = require('../dtos/ProductDto');
class ProductService {
	getProductDto(productData) {
		return new ProductDto(productData);
	}

	getPageData(products, page, pageLimit, limit) {
		const activePageIndex = page >= 1 ? Number(page) : 1;
		const productsAtPage = page ? (limit ? limit : pageLimit) : limit;

		const pageStartPosition = (activePageIndex - 1) * productsAtPage;
		const pageEndPosition = pageStartPosition + productsAtPage;

		const pagesCount = Math.ceil(products.length / productsAtPage);
		const activePage = activePageIndex > pagesCount ? pagesCount : activePageIndex;
		const pageProducts = products.slice(pageStartPosition, pageEndPosition);

		return { pageProducts, pageData: { pagesCount, activePage } };
	}

	async getProducts({ limit, page, pageLimit }) {
		const products = await Product.find();
		const productsDto = products.map(this.getProductDto);
		const { pageProducts, pageData } = this.getPageData(productsDto, page, pageLimit, limit);

		return { products: pageProducts, pageData };
	}

	async getProductsByCategory({ category, page, pageLimit, limit }) {
		const products = await Product.find({ category });
		const productsDto = products.map(this.getProductDto);
		const { pageProducts, pageData } = this.getPageData(productsDto, page, pageLimit, limit);

		return { products: pageProducts, pageData };
	}

	async getProductsByQuery({ query, page, pageLimit, limit }) {
		const products = await Product.find({
			$or: [
				{ title: { $regex: query, $options: 'i' } },
				{ author: { $regex: query, $options: 'i' } },
			],
		}).limit(limit);

		const productsDto = products.map(this.getProductDto);
		const { pageProducts, pageData } = this.getPageData(productsDto, page, pageLimit, limit);

		return { products: pageProducts, pageData };
	}

	async getProduct(productId) {
		const product = await Product.findById(productId);
		return this.getProductDto(product);
	}
}

module.exports = new ProductService();
