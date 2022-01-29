const UserService = require('../services/UserService');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

class AuthController {
	async register(req, res) {
		try {
			const { errors } = validationResult(req);

			if (errors.length) {
				return res.status(400).json(errors);
			}

			const newUser = {
				username: req.body.username,
				email: req.body.email,
				password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
			};

			const createdUser = await UserService.createUser(newUser);

			res.status(201).json(createdUser);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async login(req, res) {
		try {
			const { errors } = validationResult(req);

			if (errors.length) {
				return res.status(400).json(errors);
			}

			const user = await UserService.getUser(req.body.username);

			const encryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
			const originalPassword = encryptedPassword.toString(CryptoJS.enc.Utf8);

			if (originalPassword !== req.body.password) {
				return res.status(401).json('Incorrect password!');
			}

			const accessToken = jwt.sign(
				{
					id: user._id,
					username: user.username,
				},
				process.env.JWT_SEC,
				{ expiresIn: '2d' }
			);

			const { password, ...restCredentials } = user._doc;

			res.status(200).json({ ...restCredentials, accessToken });
		} catch (err) {
			res.status(400).json(err);
		}
	}
}

module.exports = new AuthController();
