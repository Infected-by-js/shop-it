require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connection is successfull!'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => {
	console.log(`Server in running on PORT ${PORT}`);
});
