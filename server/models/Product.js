const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		author: { type: String, required: true },
		style: { type: String, required: true },
		size: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		category: { type: String, required: true },
		year_created: { type: Number, required: true },
		images: { type: [String], required: true },
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('Product', ProductSchema);
