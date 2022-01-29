const { check, body } = require('express-validator');

const registerValidators = [
	check('username', 'Username is required!').notEmpty(),
	check('email', 'Email incorrect').isEmail(),
	check('password', 'Password should be at least 4 characters').isLength({ min: 4 }),
];

const loginValidators = [
	check('username', 'Username is required!').notEmpty(),
	check('password', 'Password should be at least 4 characters').isLength({ min: 4 }),
];

const saveProductValidators = [
	body('images').custom((value, meta) => {
		const files = meta.req.files;
		const regExp = /.*\.(webp|jpe?g|bmp|png)$/gim;

		console.log({ files });

		if (!files.length) {
			throw 'There must be at least one image!';
		}

		const isWrongExtension = files.find((file) => regExp.test(file.originalname));

		if (isWrongExtension) {
			throw 'Wrong extension';
		}

		return true;
	}),
];

module.exports = { registerValidators, loginValidators, saveProductValidators };
