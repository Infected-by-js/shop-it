const { check } = require('express-validator');

const registerValidators = [
	check('username', 'Username is required!').notEmpty(),
	check('email', 'Email incorrect').isEmail(),
	check('password', 'Password should be at least 4 characters').isLength({ min: 4 }),
];

const loginValidators = [
	check('username', 'Username is required!').notEmpty(),
	check('password', 'Password should be at least 4 characters').isLength({ min: 4 }),
];

module.exports = { registerValidators, loginValidators };
