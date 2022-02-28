require('dotenv').config();
const mongoose = require('mongoose');

const configDB = () => {
	mongoose
		.connect(process.env.MONGO_URL)
		.then(() => console.log('DB connection is successfull!'))
		.catch((err) => console.log(err));
};

module.exports = configDB;
