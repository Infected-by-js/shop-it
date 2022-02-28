require('dotenv').config();

const Product = require('./models/Product');
const products = require('./data/products');
const connectDB = require('./config/db');

const importData = async () => {
	await connectDB();
	try {
		await Product.deleteMany({});

		await Product.insertMany(products);

		console.log('Data Import Success');

		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

importData();
