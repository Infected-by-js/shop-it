require('dotenv').config();

const Product = require('./models/Product');
const User = require('./models/User');
const products = require('./data/products');
const users = require('./data/users');
const connectDB = require('./config/db');

const importData = async () => {
	connectDB();
	try {
		await Product.deleteMany({});
		await User.deleteMany({});

		await Product.insertMany(products);
		await User.insertMany(users);

		console.log('Data Import Success');

		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};

importData();
