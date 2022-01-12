const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connection is successfull!'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(PORT, () => {
	console.log('Backend server in running!');
});
