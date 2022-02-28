class ProductDto {
	constructor(productData) {
		this.id = productData._id;
		this.author = productData.author;
		this.category = productData.category;
		this.description = productData.description;
		this.images = productData.images;
		this.price = productData.price;
		this.size = productData.size;
		this.style = productData.style;
		this.title = productData.title;
		this.year_created = productData.year_created;
	}
}

module.exports = ProductDto;
