const multer = require('multer');
const path = require('path');
const { v4 } = require('uuid');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve('static'));
	},

	filename: (req, file, cb) => {
		const fileExtension = file.originalname.split('.').pop();
		const fileName = v4() + '.' + fileExtension;
		cb(null, fileName);
	},
});

const uploadImages = multer({ storage }).array('images');

module.exports = uploadImages;
