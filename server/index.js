require('dotenv').config();
const express = require('express');
const cors = require('cors');
const configDB = require('./config/db');

const authRoute = require('./routes/auth');
const productRoute = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 5000;

configDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => {
	console.log(`Server in running on PORT ${PORT}`);
});
