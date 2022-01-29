require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const imageRoute = require('./routes/image');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connection is successfull!'))
	.catch((err) => console.log(err));

app.use(express.json());
// app.use(fileUpload());
app.use(cors());

app.use('/static', express.static(path.resolve('static')));
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/images', imageRoute);

app.listen(PORT, () => {
	console.log(`Server in running on PORT ${PORT}`);
});
