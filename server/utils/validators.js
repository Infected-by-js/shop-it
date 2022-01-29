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
	check('title', 'title is required!').notEmpty(),
	check('author', 'author is required!').notEmpty(),
	check('size', 'size is required!').notEmpty(),
	check('style', 'style is required!').notEmpty(),
	check('description', 'description is required!').notEmpty(),
	check('price', 'price is required!').notEmpty(),
	check('category', 'category is required!').notEmpty(),
	check('year_created', 'year_created is required!').notEmpty(),

	body('images').custom((value, meta) => {
		const files = meta.req?.files;
		const match = ['image/jpeg', 'image/png'];
		const isWrongExtension = files.some((file) => !match.includes(file.mimetype));

		if (!files || !files.length) {
			throw 'There must be at least one image!';
		}

		if (isWrongExtension) {
			throw 'Wrong extension of file';
		}

		return true;
	}),
];

module.exports = { registerValidators, loginValidators, saveProductValidators };
